import React, {useContext} from 'react';
import AuthContext from '../Context/AuthContext';
import LenguageContext from '../Context/LenguageContext';
import themeContext from '../Context/themeContext';

const Maincontext = () => {

    const {theme} = useContext(themeContext);
    const {text} = useContext(LenguageContext)
    const {auth} = useContext(AuthContext)

    return (
        <div className={theme}>
            <main>
            {auth ? <p>{text.mainHello}</p> : <p>{text.mainWelcome}</p>} 
                <p>{text.mainContent}</p>
            </main>
        </div>
    );
}

export default Maincontext;
