import React from "react";
import { useNavigate } from "react-router-dom";

/* tabla de datos de los caballeros */
const TableRowRutas = ({e, setDataToEdit, deleteData}) => {
    let navigate = useNavigate()

    const handleEdit=()=> {
        setDataToEdit(e)
        navigate(`/editar/${e.id}`)
    }

    return (
        <tr>
        <td>{e.name}</td>
        <td>{e.constellation}</td>
        <td className="btn">
            <button onClick={handleEdit}>Editar</button>
            <button onClick={()=> deleteData(e.id)}>Eliminar</button>
        </td>
        </tr>
    );
};

export default TableRowRutas;