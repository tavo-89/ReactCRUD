import React from 'react';

const Footer = ({theme, text}) => {
    return (
        <div className={theme}>
            <footer>
                <h4>{text.footerTitle}</h4>
            </footer>
        </div>
    );
}

export default Footer;
