import React, {useState} from 'react';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';

const Mypage = () => {

    const initialAuth = null
    const initialTheme = 'light'
    const initialLanguage = 'es'
    const translations = {
        es: {
            headerTitle: "Mi aplicación SIN Context API",
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
            headerTitle: "My application without Context API",
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

    const [theme, setTheme] = useState(initialTheme);
    const [language, setLanguage] = useState(initialLanguage);
    const [text, setText] = useState(translations[language]);
    const [auth, setAuth] = useState(initialAuth);

    const handleTheme = (e)=> {
        if (e.target.value === 'light') {
            setTheme('light')
        } else {
            setTheme('dark')
        }

    }

    const handleLanguage = (e)=> {
        if (e.target.value === 'es') {
            setLanguage('es')
            setText(translations.es)
        }else{
            setLanguage('en')
            setText(translations.en)
        }
    }

    const handleAuth = ()=> {
        if (auth) {
            setAuth(null)
        }else{
            setAuth(true)
        }
    }

    return (
        <div className='my-page'>
            <Header theme={theme} handleTheme={handleTheme} text={text} handleLanguage={handleLanguage} auth={auth} handleAuth={handleAuth} />
            <Main theme={theme} text={text} auth={auth}/>
            <Footer theme={theme} text={text}/>
        </div>
    );
}

export default Mypage;
