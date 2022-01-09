import React, { useEffect, useState } from "react";
import { helpHttp } from "../helpers/helpHttp";
import SongDetail from "./SongDetail";
import SongForm from "./SongForm";
import Loader from "./Loader";

const Songsearch = () => {
    const [search, setSearch] = useState(null);
    const [lyric, setLyric] = useState(null);
    const [bio, setBio] = useState(null);
    const [loading, setLoading] = useState(false);

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
            console.log(artistUrl, songUrl)

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
    }, [search]);

    const handleSearch = (data) => {
        setSearch(data);
    };

    return (
        <div>
            <h2>Song Search</h2>
            <article className="grid-1-3">
                <SongForm handleSearch={handleSearch} />
                {loading && <Loader />}
                {search && !loading && (
                <SongDetail search={search} lyric={lyric} bio={bio} />
                )}
            </article>
        </div>
    );
};

export default Songsearch;
