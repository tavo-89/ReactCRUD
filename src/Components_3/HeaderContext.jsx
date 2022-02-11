import React, {useContext} from 'react';
import AuthContext from '../Context/AuthContext';
import LenguageContext from '../Context/LenguageContext';
import themeContext from '../Context/themeContext';

const Headercontext = () => {

    const {theme, handleTheme} = useContext(themeContext);
    const {text, handleLanguage} = useContext(LenguageContext)
    const {auth, handleAuth} = useContext(AuthContext)

    return (
        <div>
        <header className={theme}>
            <h2>{text.headerTitle}</h2>
            <h3>{text.headerSubtitle}</h3>
            <select onChange={handleLanguage} name="language">
                <option value="es">ES</option>
                <option value="en">EN</option>
            </select>

            <input type="radio" name="theme" id="light-context" value='light' onClick={handleTheme} />
            <label htmlFor="light-context">{text.headerLight}</label>

            <input type="radio" name="theme" id="dark-context" value='dark' onClick={handleTheme} />
            <label htmlFor="dark-context">{text.headerDark}</label>
            
            <button onClick={handleAuth}>
            {auth ? text.buttonLogout : text.buttonLogin}               
            </button>
        </header>
    </div>
    );
}

export default Headercontext;
