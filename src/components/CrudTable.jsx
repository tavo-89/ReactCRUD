import React from 'react';
import Crudtablerow from './CrudTableRow';
/* va a importar la base de datos falsa de CrudApp (componente padre) y destructuro las funciones */
const Crudtable = ({data, setDataToEdit, deleteData}) => {
    return (
        <div>
            <h3>Tabla de Datos</h3>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Constelación</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {/* si no hay datos coloca "sin datos" sino devuelve la lista d todos los datos */}
                    {data.length === 0 ? <tr><td colSpan='3'>sin datos</td></tr> : data.map(e => <Crudtablerow key={e.id} e={e} setDataToEdit={setDataToEdit} deleteData={deleteData}/>)}
                </tbody>
            </table>
        </div>
    );
}

export default Crudtable;
