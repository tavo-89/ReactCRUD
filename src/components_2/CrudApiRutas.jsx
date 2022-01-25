import React, { useEffect, useState } from "react";
import CrudformRutas from "../pages/CrudFormRutas";
import CrudtableRutas from "../pages/CrudTableRutas";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { helpHttp } from "../helpers/helpHttp";
import { HashRouter, NavLink, Routes, Route, useNavigate } from "react-router-dom";
/* ¡¡IMPORTANTE!! INICIALIZAR "npm run fake-api" */

const CrudApiRutas = () => {

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
        <div>
            <HashRouter>

                <header>
                    <h2>Crud API con Rutas</h2>
                    <nav>
                        <NavLink to='/home' activeclassname='active' > Home </NavLink>
                        <NavLink to='/agregar' activeclassname='active'> Agregar </NavLink>
                    </nav>
                </header>
                <Routes>
                    <Route path='/home' element={<>{/* operadores cortocircuito si son true renderizan los componentes */}
            {loading && <Loader/>}
            {/* el mensaje de error recivido lo toma de la respuesta del fetch */}
            {error && <Message msg={`Error ${error.status}: ${error.statusText}`} bgColor='#dc3545'/>}
            {db && <CrudtableRutas 
                data={db} 
                setDataToEdit={setDataToEdit}
                deleteData={deleteData} 
            />}</>}/>
                    <Route path='/agregar' element={<CrudformRutas
                createData={createData}
                updateData={updateData}
                dataToEdit={dataToEdit}
                setDataToEdit={setDataToEdit}
            />}/>
                    <Route path='/editar/:id' element={<CrudformRutas
                createData={createData}
                updateData={updateData}
                dataToEdit={dataToEdit}
                setDataToEdit={setDataToEdit}
            />}/>
                </Routes>

            </HashRouter>
            
        </div>
    );
};

export default CrudApiRutas;
