import React, { useEffect, useState } from "react";
import Crudform from "./CrudForm";
import Crudtable from "./CrudTable";
import Message from "./Message";
import Loader from "./Loader";
import { helpHttp } from "../helpers/helpHttp";
/* ¡¡IMPORTANTE!! INICIALIZAR "npm run fake-api" */

const CrudApi = () => {

    let api = helpHttp()
    let url = 'http://localhost:5000/santos'

    const [db, setDb] = useState(null);
    const [dataToEdit, setDataToEdit] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    //carga la base de datos
    useEffect(()=> {
        //inicializo el componenete loader en true y cuando termina lo paso a false
        setLoading(true)
        //realiza peticion get
        helpHttp().get(url)
        .then((res)=>{
            
            if (!res.err) {
                setDb(res)
                setError(null)
            }else{
                setDb(null)
                setError(res)
            }

            setLoading(false)
        })
    },[url])

    const createData = (data) => {
        data.id = Date.now();
        //manda el cuerpo(body) q viene d data se le agrega el atributo contentType a la cabecerea 
        //para q agregue los datos del formulario
        let options = {body:data, headers: {"content-Type": "application/json"}}
        api.post(url, options)
        .then((res)=>{
            if (!res.err) {
                setDb([...db, res])
            } else {
                setError(res)
            }
        })
        setDb([...db, data])
    };

    const updateData = (data) => {
        //captura el id
        let endpoint = `${url}/${data.id}`
        let options = {body:data, headers: {"content-Type": "application/json"}}

        api.put(endpoint, options)
        .then((res)=>{

            if (!res.err) {
                let newData = db.map((e)=> (e.id === data.id ? data : e))
                setDb(newData)
            } else {
                setError(res)
            }
        })
    };

    const deleteData = (id) => {
        let deleteConfirm = window.confirm(`¿Estás seguro?`);
    
        if (deleteConfirm) {
            let endpoint = `${url}/${id}`;
            let options = { headers: { "content-type": "application/json" }};
    
            api.del(endpoint, options)
            .then((res) => {
                //console.log(res);
                if (!res.err) {
                let newData = db.filter((el) => el.id !== id);
                setDb(newData);
                } else {
                setError(res);
                }
            });
            } else {
            return;
            }
        };


    return (
        <div className="crud">
            <h2>CRUD API</h2>
            <Crudform
                createData={createData}
                updateData={updateData}
                dataToEdit={dataToEdit}
                setDataToEdit={setDataToEdit}
            />
            {/* operadores cortocircuito si son true renderizan los componentes */}
            {loading && <Loader/>}
            {/* el mensaje de error recivido lo toma de la respuesta del fetch */}
            {error && <Message msg={`Error ${error.status}: ${error.statusText}`} bgColor='#dc3545'/>}
            {db && <Crudtable 
                data={db} 
                setDataToEdit={setDataToEdit}
                deleteData={deleteData} 
            />}
            
            
        </div>
    );
};

export default CrudApi;
