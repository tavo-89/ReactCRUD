import React, { useContext } from 'react';
import CrudContext from '../Context/CrudContext';
import Crudtablerowc from './CrudTableRowC';

const Crudtablecontext = () => {

    const {db:data} = useContext(CrudContext) /* como lo q viene del context es db le asigno a db el alias de data para q no enre en conflicto */

    return (
        <div className="tabla">
            <h3 className="titulo">Caballeros del zodiaco</h3>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Constelación</th>
                        <th className="btn">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {/* si no hay datos coloca "sin datos" sino devuelve la lista d todos los datos */}
                    {data.length > 0 ? data.map(e => <Crudtablerowc key={e.id} e={e}/>) : (<tr><td colSpan='3'>sin datos</td></tr>) }
                </tbody>
            </table>
        </div>
    );
}

export default Crudtablecontext;
