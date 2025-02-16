import { createContext, useEffect, useState } from "react";


export const AuthContext = createContext();

export const AuthProvider = ({children})=>{

    const [authData, setAuthData] = useState(JSON.parse(localStorage.getItem('authData')) || {"isAuth":false});
    useEffect(()=>{
        if(localStorage.getItem('authData')){
            localStorage.setItem('authData', JSON.stringify(authData))
        }else {
            localStorage.setItem('authData', JSON.stringify({"isAuth":false}));
        }
    }, [authData])



    return <AuthContext.Provider value={[authData, setAuthData]}>{children}</AuthContext.Provider>
}