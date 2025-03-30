import { createContext, useEffect, useState } from "react";


export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState(localStorage.getItem('theme') || "light");

    useEffect(()=>{
        !localStorage.getItem('theme')?localStorage.setItem('theme', theme):"";
    }, [])

    useEffect(()=>{
        localStorage.setItem('theme', theme);
    }, [theme])

    return <ThemeContext.Provider value={{theme, setTheme}}>{children}</ThemeContext.Provider>;
}