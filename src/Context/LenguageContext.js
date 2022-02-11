import React, { createContext, useState } from "react";

const LenguageContext = createContext()

const initialLanguage = 'es'
const translations = {
    es: {
        headerTitle: "Mi aplicación CON Context API",
        headerSubtitle: "Mi cabecera",
        headerLight: "Claro",
        headerDark: "Oscuro",
        buttonLogin: "Iniciar Sesión",
        buttonLogout: "Cerrar Sesión",
        mainWelcome: "Bienvenid@ invitad@",
        mainHello: "Hola Tavo",
        mainContent: "Mi contenido principal",
        footerTitle: "Mi pié de página",
    },
    en: {
        headerTitle: "My application WITH Context API",
        headerSubtitle: "My header",
        headerLight: "Light",
        headerDark: "Dark",
        buttonLogin: "Login",
        buttonLogout: "Logout",
        mainWelcome: "Welcome Guest",
        mainHello: "Hello Tavo",
        mainContent: "My main content",
        footerTitle: "My footer",
    }
}


const LenguageProvider = ({ children }) => {

    const [lenguage, setLenguage] = useState(initialLanguage);
    const [text, setText] = useState(translations[lenguage]);

    const handleLanguage = (e) => {
        if (e.target.value === 'es') {
            setLenguage('es')
            setText(translations.es)
        } else {
            setLenguage('en')
            setText(translations.en)
        }
    }

    const data = {
        text,
        handleLanguage
    }
    return (
        <LenguageContext.Provider value={data}>
            {children}
        </LenguageContext.Provider>
    )
}



export { LenguageProvider }
export default LenguageContext