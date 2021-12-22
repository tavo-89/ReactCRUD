import React, {useState} from 'react';
import { useForm } from '../hook/useForm';
import Loader from './Loader'
import Message from './Message'


const initialForm = {
    name: '',
    email: '',
    subject: '',
    comments: ''
}

/* validacion */
const validationForm = (form) =>{
    let errors = {}
    let regexName = /^[a-zA-Z\sñáéíóúü]*$/
    let regexEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]:+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/
    let RegexComments =  /^.{1,255}$/;

    /* validacion campo nombre */
    if(!form.name.trim()){
        errors.name = "el campo Nombre es requerido"
    }else if (!regexName.test(form.name.trim())){
        errors.name = "solo letras"
    }else if (form.name.length < 2){
        errors.name = "El campo Nombre debe tener al menos 2 letras"
    }


    /* validacion campo email */
    if (!form.email.trim()) {
        errors.email = "El campo Email es requerido";
    } else if (!regexEmail.test(form.email.trim())) {
        errors.email = "El campo Email es incorrecto ejemplo: name@email.com";
    }
    
    /* validacion campo asunto */
    if (!form.subject.trim()) {
        errors.subject = "El campo Asunto es requerido";
    }
    
    /* validacion campo comentario */
    if (!form.comments.trim()) {
        errors.comments = "El campo Comentarios es requerido";
    } else if (!RegexComments.test(form.comments.trim())) {
        errors.comments =
            "El campo Comentarios no debe exceder los 255 caracteres";
    }

    return errors
}

let styles = {
    fontWeight: "bold",
    color: "#dc3545",
};

const Contactform = () => {

    const {form, errors, loading, response, handleChange, handleBlur, handleSubmit} = useForm(initialForm, validationForm)

    return (
        <div>
            <h2>Formulario de contactos</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder='Nombre' onChange={handleChange} onBlur={handleBlur} value={form.name} />
                {errors.name ? (<span style={styles}>{errors.name}</span>) :''}

                <input type="email" name="email" placeholder='E-mail' onChange={handleChange} onBlur={handleBlur} value={form.email} />
                {errors.email ? (<span style={styles}>{errors.email}</span>) :''}
                
                <input type="text" name="subject" placeholder='Asunto' onChange={handleChange} onBlur={handleBlur} value={form.subject}/>
                {errors.subject ? (<span style={styles}>{errors.subject}</span>) :''}

                <textarea name="comments" cols="35" rows="5" placeholder='Escribe un comentario' required onChange={handleChange} onBlur={handleBlur} value={form.comments}></textarea>
                {errors.comments ? (<span style={styles}>{errors.comments}</span>) :''}

                <button type="submit">Enviar</button>
            </form>
            {loading && <Loader/>}
            {response && <Message msg= "El mensaje a sido enviado con exito" bgColor='#198754'/>}
        </div>
    );
}

export default Contactform;
