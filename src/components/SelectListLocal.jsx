import React from 'react';
import { useFetch } from '../hook/useFetch';
import Loader from './Loader'
import Message from './Message';

const SelectlistLocal = ({title, url, handleChange}) => {
    const {data, error, loading} = useFetch(url)
    console.log(data, loading, error)
    let id = `select-${title}`
    //le coloca a la primer letra mayuscula 
    let label =  title.charAt(0).toUpperCase() + title.slice(1);

    let datos = data
    console.log(datos)

    if (!data) {
        return null
    }
    if (error) {
        return <Message msg={`ERROR${error.status}: ${error.statusText}`} bgColor='#dc3545'/>
    }
    return (
        <>
            <label htmlFor={id}>{label}</label>
            {loading && <Loader/>}
            <select name={id} id={id} onChange={handleChange}>
                <option value="" hidden selected>Seleccione {label}</option>
                {data && datos.localidades.map((e) => ( <option key={e.id} value={e.nombre}> {e.nombre} </option>))}
            </select>
        </>
    );
}

export default SelectlistLocal;
