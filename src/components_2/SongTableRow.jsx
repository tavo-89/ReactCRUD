import React from 'react';
import { useNavigate } from 'react-router-dom';

const Songtablerow = ({id, e, handleDelete}) => {
    let navigate= useNavigate()
    let {bio, search} = e
    let avatar = bio.artists[0].strArtistThumb

    let avatarStyle = {
        width:'auto',
        height:'40px'
    }
    return (
        <tr>
            <td> <img style={avatarStyle} src={avatar} alt={search.artist} /></td>
            <td>{search.artist}</td>
            <td>{search.song}</td>
            <td>
                <button onClick={()=>navigate(`/canciones/${id}`)}>Ver</button>
                <button onClick={()=>handleDelete(id)}>Eliminar</button>
            </td>
        </tr>
    );
}

export default Songtablerow;
