import React from 'react';

const Header = ({theme, handleTheme, handleLanguage, text, auth, handleAuth}) => {
    return (
        <div>
            <header className={theme}>
                <h2>{text.headerTitle}</h2>
                <h3>{text.headerSubtitle}</h3>
                <select onChange={handleLanguage} name="language">
                    <option value="es">ES</option>
                    <option value="en">EN</option>
                </select>

                <input type="radio" name="theme" id="light" value='light' onClick={handleTheme} />
                <label htmlFor="light">{text.headerLight}</label>

                <input type="radio" name="theme" id="dark" value='dark' onClick={handleTheme} />
                <label htmlFor="dark">{text.headerDark}</label>
                
                <button onClick={handleAuth}>
                {auth ? text.buttonLogout : text.buttonLogin}               
                </button>
            </header>
        </div>
    );
}

export default Header;
