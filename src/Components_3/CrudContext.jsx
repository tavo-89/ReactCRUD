import React, { useContext } from 'react';
import Loader from '../components/Loader'
import Message from '../components/Message'
import CrudContext from '../Context/CrudContext';
import Crudformcontext from './CrudFormContext';
import Crudtablecontext from './CrudTableContext';


const Crudcontext = () => {

    const {loading, error, db} = useContext(CrudContext);

    return (
        
        <div className="crud">
            <h2>CRUD API con Context</h2>
            <Crudformcontext/>
            {/* operadores cortocircuito si son true renderizan los componentes */}
            {loading && <Loader/>}
            {/* el mensaje de error recivido lo toma de la respuesta del fetch */}
            {error && <Message msg={`Error ${error.status}: ${error.statusText}`} bgColor='#dc3545'/>}
            {db && <Crudtablecontext/>}
        </div>
    );
};

export default Crudcontext;
