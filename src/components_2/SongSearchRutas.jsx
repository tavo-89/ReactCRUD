import React, { useEffect, useState } from "react";
import { helpHttp } from "../helpers/helpHttp";
import SongDetail from "../components/SongDetail";
import SongformRutas from "../pages/SongFormRutas";
import Loader from "../components/Loader";
import { HashRouter, Link, Route, Routes } from "react-router-dom";
import NotFound from "./NotFound";
import Songtable from "./SongTable";
import Songpage from "../pages/SongPage";

let initialSongs = JSON.parse(localStorage.getItem('mySongs')) || [];
//se parsea para guardar en el localStorage, obten el item q se llame mySongs sino agrego un array vacio

const SongSearchRutas = () => {
    const [search, setSearch] = useState(null);
    const [lyric, setLyric] = useState(null);
    const [bio, setBio] = useState(null);
    const [loading, setLoading] = useState(false);
    const [mySongs, setMySongs] = useState(initialSongs);

    //va a procesar el buscador
    useEffect(() => {
        //si no hay busqueda no renderiza
        if (search === null) return;

        //
        const fetchData = async () => {
        //se le asigna a search los dos atributos q tiene el objeto de la variable de estado
            const { artist, song } = search;
            //guardamos los dos endpoint asignandole los atributos
            let artistUrl = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artist}`;
            let songUrl = `https://api.lyrics.ovh/v1/${artist}/${song}`;
            

            //cuando se inicia la busqueda renderiza el loading
            setLoading(true);

            //como se neceista ambas respuestas creamos una promise.all para ejecutar ambas
            const [artistResponse, songResponse] = await Promise.all([
                helpHttp().get(artistUrl),
                helpHttp().get(songUrl),
            ]);

            //actualizamos los dos estados
            setBio(artistResponse);
            setLyric(songResponse);

            //se oculta el loading cuando termina de hacer la peticion
            setLoading(false);
        };
        //ejecuto la peticion
        fetchData();

        localStorage.setItem('mySong',JSON.stringify(mySongs))
        //cada vez q se haga una busqueda stringificamos la variable mySongs
    }, [search, mySongs]);

    const handleSearch = (data) => {
        setSearch(data);
    };

    const handleFavorite = ()=> {
        let currentSong = {
            search,
            lyric,
            bio
        }
        let songs= [...mySongs, currentSong]

        setMySongs(songs)
        setSearch(null)
        localStorage.setItem('mySongs', JSON.stringify(songs))
    }

    const handleDelete = (id)=> {
        let isDelete = window.confirm('estas seguro de eliminar esta cancion?')

        if (isDelete) {
            let songs = mySongs.filter((e, i)=> i !== id)
            setMySongs(songs)
            localStorage.setItem('mySongs', JSON.stringify(songs))
        }
    }

    return (
        <div>
        <HashRouter>

            <header>
            <h2>Buscador de cancioones</h2>
            <Link to="/home-song">Home</Link>
            </header>

            {loading && <Loader />}

            <article className="grid-1-3">

            <Routes>

                <Route path="/home-song" element={
                    <>
                    <SongformRutas handleSearch={handleSearch} handleFavorite={handleFavorite}/>

                    {search && !loading && (
                        <SongDetail search={search} lyric={lyric} bio={bio} />
                    )}

                    <Songtable mySongs={mySongs} handleDelete={handleDelete}/>
                    </>
                }/>

                <Route path='/canciones/:id' element={<Songpage mySongs={mySongs} />}/>

                <Route path='*' element={<NotFound/>} />

            </Routes>
            </article>
        </HashRouter>
        </div>
    );
};

export default SongSearchRutas;
