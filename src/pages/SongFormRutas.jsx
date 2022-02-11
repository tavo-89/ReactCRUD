import React, { useState } from "react";

const initialForm = {
    artist: "",
    song: "",
};

const SongformRutas = ({ handleSearch, handleFavorite }) => {
    const [disable, setDisable] = useState(true);
    const [form, setForm] = useState(initialForm);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.artist || !form.song) {
        alert("Datos incompletos");
        setDisable(true)
        return;
        }
        handleSearch(form);
        setForm(initialForm);
        setDisable(false)
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                name="artist"
                placeholder="Nombre del Interprete"
                onChange={handleChange}
                value={form.artist}
                />
                <input
                type="text"
                name="song"
                placeholder="Nombre de la Canción"
                onChange={handleChange}
                value={form.song}
                />

                <input type="submit" value="Enviar" />
                <input type="button" onClick={handleFavorite} value="Agregar a Favoritos" disabled={disable && 'disabled'}/>
            </form>
        </div>
    );
};

export default SongformRutas;
