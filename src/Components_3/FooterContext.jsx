import React, {useContext} from 'react';
import LenguageContext from '../Context/LenguageContext';
import themeContext from '../Context/themeContext';

const Footercontext = () => {

    const {theme} = useContext(themeContext);
    const {text} = useContext(LenguageContext)

    return (
        <div className={theme}>
            <footer>
                <h4>{text.footerTitle}</h4>
            </footer>
        </div>
    );
}

export default Footercontext;
