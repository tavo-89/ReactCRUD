import React, { createContext, useState } from "react";

const themeContext = createContext()
const initialTheme = 'light'

const ThemeProvider = ({children})=>{

    const [theme, setTheme] = useState(initialTheme);

    const handleTheme = (e)=> {
        if (e.target.value === 'light') {
            setTheme('light')
        } else {
            setTheme('dark')
        }

    }

    const data = {
        theme,
        handleTheme
    }
    return (
        <themeContext.Provider value={data}>
            {children}
        </themeContext.Provider>
    )
}

export {ThemeProvider}
export default themeContext