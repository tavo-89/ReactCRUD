import React, { useState } from "react";
import Crudform from "./CrudForm";
import Crudtable from "./CrudTable";
import dataBase from "../Api/db.json"

const CrudApi = () => {

    const [db, setDb] = useState(dataBase);

    const [dataToEdit, setDataToEdit] = useState(null);

    const createData = (data) => {
        data.id = Date.now();
        setDb([...db, data])
    };

    const updateData = (data) => {
        let newData = db.map(e =>
            e.id === data.id ? data : e 
            )
            setDb(newData)
    };

    const deleteData = (id) => {
        let deleteConfirm = window.confirm('¿Estás seguro?')

        if (deleteConfirm) {
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
                dataToEdit={dataToEdit}
                setDataToEdit={setDataToEdit}
            />
            <Crudtable 
                data={db} 
                setDataToEdit={setDataToEdit}
                deleteData={deleteData} 
            />
        </div>
    );
};

export default CrudApi;
