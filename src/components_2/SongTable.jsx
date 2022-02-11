import React from 'react';
import Songtablerow from './SongTableRow';

const Songtable = ({mySongs,handleDelete}) => {
    return (
        <div>
            <h3>Favoritos</h3>
            <table>
                <thead>
                    <tr>
                        <th colSpan='2'>Artista</th>
                        <th>Canciones</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {mySongs.length > 0 ? (mySongs.map((e, index)=><Songtablerow key={index} e={e} id={index} handleDelete={handleDelete} />)) : (<tr><td colSpan='4'>Sin canciones</td></tr>) }
                </tbody>
            </table>
        </div>
    );
}

export default Songtable;
