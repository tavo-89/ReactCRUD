import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Productos() {

    let {search}= useLocation()
    let query = new URLSearchParams(search)// define métodos útiles para trabajar con los parámetros de búsqueda de una URL

    const LIMIT = 20
    let start = parseInt(query.get('inicio'))||1 //el metodo get de URLSearchParams Returna el primer valor asociado al parámetro de búsqueda especificado
    let end = parseInt(query.get('fin'))||LIMIT //si el valor de la variable no esta definido lo defino

    let history= useNavigate()

    const handlePrev = () => {
        history({search: `?inicio=${start - LIMIT}&fin=${end - LIMIT}`})    
    }

    const handleNext = () => {
        history({search: `?inicio=${start + LIMIT}&fin=${end + LIMIT}`})
    }

    return (
        <div>
            <h3>Productos</h3>
            <p>mostrando productos del <b>{start}</b> al <b>{end}</b> </p>

            {start > LIMIT && <button onClick={handlePrev}>Atras</button> }
            <button onClick={handleNext}>Adelante</button>
        </div>
    )
}

export default Productos;
