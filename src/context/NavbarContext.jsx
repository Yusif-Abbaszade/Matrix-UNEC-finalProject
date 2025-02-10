import { createContext, useState } from "react";


export const NavbarContext = createContext();


export const NavbarProvider = ({children})=>{
    const [navbarTheme, setNavbarTheme] = useState('light');
    return <NavbarContext.Provider value={[navbarTheme, setNavbarTheme]}>{children}</NavbarContext.Provider>
}