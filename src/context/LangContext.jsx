import { createContext, useEffect, useState } from "react";

export const LangContext = createContext();

export const LangProvider = ({ children }) => {

    useEffect(() => {
        !localStorage.getItem('lang') ? localStorage.setItem('lang', 'en') : "";
    }, [])

    const [lang, setLang] = useState(localStorage.getItem('lang') || "en");

    useEffect(() => {
        localStorage.setItem('lang', lang);
    }, [lang])

    return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}