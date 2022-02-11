import React from 'react';

const Main = ({theme, text, auth}) => {
    return (
        <div className={theme}>
            <main>
            {auth ? <p>{text.mainHello}</p> : <p>{text.mainWelcome}</p>} 
                <p>{text.mainContent}</p>
            </main>
        </div>
    );
}

export default Main;
