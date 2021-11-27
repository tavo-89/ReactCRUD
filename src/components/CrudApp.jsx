import React, { useState } from "react";
import Crudform from "./CrudForm";
import Crudtable from "./CrudTable";

/* simulacion base d datos */
const initialDb = [
    {
        id: 1,
        name: "Seiya",
        constellation: "Pegaso",
    },
    {
        id: 2,
        name: "Shiryu",
        constellation: "Dragón",
    },
    {
        id: 3,
        name: "Hyoga",
        constellation: "Cisne",
    },
    {
        id: 4,
        name: "Shun",
        constellation: "Andrómeda",
    },
    {
        id: 5,
        name: "Ikki",
        constellation: "Fénix",
    },
];

const Crudapp = () => {

    const [db, setDb] = useState(initialDb);

  /* permite saber si hay datos a editarse */
    const [dataToEdit, setDataToEdit] = useState(null);

  /* funciones q van a procesar las peticiones  */
    const createData = (data) => {
        data.id = Date.now();//crea un "id" (seria mejor usar una dependencia como "unique id")
        /* modifica la base d datos trae los datos y agrega */
        setDb([...db, data])
    };

    const updateData = (data) => {
        /* creamos un nuevo array donde guardamos la modificacion de la base d datos */
        let newData = db.map(e =>
            e.id === data.id ? data : e //si el id coincide con lo q hay en la base d datos se modifica sino permanece igual
            )
            setDb(newData)
    };

    const deleteData = (id) => {
        let deleteConfirm = window.confirm('¿Estás seguro?')

        if (deleteConfirm) {
            /* filtra los datos q no coincidan con el id pasado y los retorna en un nuevo array */
            let newData = db.filter(e => e.id !== id)
            setDb(newData)
        }else{
            return
        }

    };


    return (
        <div className="crud">
            <h2>CRUD APP</h2>
            <Crudform
                createData={createData}
                updateData={updateData}
                 /* para diferenciar create y update  necesitamos pasarle como propiedad dataToEdit y la funcion q la actualiza por q quien va a hacer eso es el evento submit del formulario y ahi es donde vamos a diferenciar si ejecutamos un un create o un update */
                dataToEdit={dataToEdit}
                setDataToEdit={setDataToEdit}
            />
            <Crudtable 
            /* recibe la base d datos */
                data={db} 
                /* se pasa el setDataToedit por q cuando clikeemos el boton de editar los datos se tienen q ir al formulario */
                setDataToEdit={setDataToEdit}
                deleteData={deleteData} 
            />
        </div>
    );
};

export default Crudapp;
