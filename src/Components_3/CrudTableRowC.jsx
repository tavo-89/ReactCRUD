import React, {useContext} from 'react';
import CrudContext from '../Context/CrudContext';

const Crudtablerowc = ({e}) => {

    const {setDataToEdit, deleteData} = useContext(CrudContext);
    return (
        <tr>
        <td>{e.name}</td>
        <td>{e.constellation}</td>
        <td className="btn">
            <button onClick={()=>setDataToEdit(e)}>Editar</button>
            <button onClick={()=> deleteData(e.id)}>Eliminar</button>
        </td>
        </tr>
    );
}

export default Crudtablerowc;
