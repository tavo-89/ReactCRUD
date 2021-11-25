import React from "react";

/* tabla de datos de los caballeros */
const Crudtablerow = ({e, setDataToEdit, deleteData}) => {

    return (
        <tr>
        <td>{e.name}</td>
        <td>{e.constellation}</td>
        <td>
            <button onClick={()=>setDataToEdit(e)}>Editar</button>
            <button onClick={()=> deleteData(e.id)}>Eliminar</button>
        </td>
        </tr>
    );
};

export default Crudtablerow;
