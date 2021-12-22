import { useState } from "react";
import { helpHttp } from '../helpers/helpHttp'


export const useForm = (initialForm, validationForm) => {
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);

    const handleChange = (e) => {
        const{name, value}= e.target
        setForm({
            ...form,
            [name]: value
        })
    };

    const handleBlur = (e) => {
        handleChange(e)
        setErrors(validationForm(form))

        /* evalua q el objeto errores no tenga errores */
        if (Object.keys(errors).length === 0) {
            setLoading(true)
            helpHttp().post('https://formsubmit.co/ajax/gusacosta.87@gmail.com', {
                body:form,
                headers: {
                "Content-Type":"application/json",
                Accept:"application/json",
            }
            }).then((res)=>{
            setLoading(false)
            setResponse(true)
            setForm(initialForm)
            setTimeout(()=> setResponse(false), 5000)
            })
        }else {
            return
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault()

        setErrors(validationForm(form))

    };


    return {
        form,
        errors,
        loading,
        response,
        handleChange,
        handleBlur,
        handleSubmit,
    };
};
