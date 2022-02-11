import React, { useContext, useEffect, useState } from 'react';
import CrudContext from '../Context/CrudContext';

const initialForm = {
    name: "",
    constellation: "",
    id: null,
};

const Crudformcontext = () => {

    const {createData, updateData, dataToEdit, setDataToEdit} = useContext(CrudContext);

    const [form, setForm] = useState(initialForm);

    useEffect(()=>{

        if (dataToEdit) {
            setForm(dataToEdit)
        }else{
            setForm(initialForm)
        }
    },[dataToEdit])

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!form.name || !form.constellation) {
            alert("Datos incompletos");
            return;
        } 
    
        if (form.id === null) {
            createData(form);
        } else {
            updateData(form);
        }
    
        handleReset()
    };

        const handleReset = (e) => {
            setForm(initialForm)
            setDataToEdit(null)
        };
    
        return (
        <div>
            {/* si presiono editar el texto del h3 cambia a editar sino a agregar */}
            <h3>{dataToEdit ? 'Editar' : 'Agregar'}</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    onChange={handleChange}
                    value={form.name}
                />
                <input
                    type="text"
                    name="constellation"
                    placeholder="Constelación"
                    onChange={handleChange}
                    value={form.constellation}
                />
                <input type="submit" value="enviar" />
                <input type="reset" value="Limpiar" onClick={handleReset} />
            </form>
        </div>
        );
}

export default Crudformcontext;
