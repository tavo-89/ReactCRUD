import React from 'react';
import { AuthProvider } from '../Context/AuthContext';
import { LenguageProvider } from '../Context/LenguageContext';
import { ThemeProvider } from '../Context/themeContext';
import Footercontext from './FooterContext';
import Headercontext from './HeaderContext';
import Maincontext from './MainContext';

const Mypagecontext = () => {
    
    return (
        <div className='my-page'>
            <ThemeProvider>
            <LenguageProvider>
            <AuthProvider>

            <Headercontext />
            <Maincontext />
            <Footercontext />

            </AuthProvider>
            </LenguageProvider>
            </ThemeProvider>
        </div>
    );
}

export default Mypagecontext;
