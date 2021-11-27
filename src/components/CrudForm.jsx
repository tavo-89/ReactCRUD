import React, { useEffect, useState } from "react";

/* estructura del objeto */
const initialForm = {
    name: "",
    constellation: "",
    id: null,
};
/* importamos del componente padre las funciones como props */
const Crudform = ({createData, updateData, dataToEdit, setDataToEdit}) => {

    /* el estado inicial del formulario */
    const [form, setForm] = useState(initialForm);

    /* se va a ejecutar cuando la variable dataToEdit cambia */
    useEffect(()=>{

      /* si tiene algo actualiza el formulario */
      if (dataToEdit) {
        setForm(dataToEdit)//se actualiza con los valores de dataToEdit
      }else{
        setForm(initialForm)//sino se pasa a initialForm
      }

    },[dataToEdit])

  /* para manejar los cambios en los imput text */
    const handleChange = (e) => {
      /* actualiza datos del formulario */
      setForm({
        ...form,
        [e.target.name]:e.target.value
      })
    };
  /* para el envio del formulario */
    const handleSubmit = (e) => {
      e.preventDefault()
        if (!form.name || !form.constellation) {
          alert("Datos incompletos");
          return;
        } 
/* si no tiene id creo un nuevo sino lo edito */
    if (form.id === null) {
      createData(form);
    } else {
      updateData(form);
    }
/* limpia el formulario */
      handleReset()
    };
  /* para limpieza del formlario y el estado a valores iniciales */
    const handleReset = (e) => {
      setForm(initialForm)
      setDataToEdit(null)
    };

  /* formulario para editar y eliminar caballeros */
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
};

export default Crudform;
