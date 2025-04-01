import { useContext, useEffect } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"
import { googleLogout } from "@react-oauth/google";
import LangUtil from "../utils/LangUtil";
import { ThemeContext } from "../context/ThemeContext";

const AuthNavbar = () => {
    const [authData, setAuthData] = useContext(AuthContext);
    const { theme } = useContext(ThemeContext);
    const navigete = useNavigate();
    useEffect(() => {
        if (theme === 'black') {
            [...document.querySelectorAll('.authnavbar-sec .nav-link')].map(item=>item.style.color = 'black');
        } else {
            [...document.querySelectorAll('.authnavbar-sec .nav-link')].map(item=>item.style.color = 'white');
        }
    }, [theme])
    return (
        <div className="authnavbar-sec pt-4">
            <div className="container d-flex justify-content-between align-items-center">
                <div className="left-sec d-flex gap-5">
                    <NavLink to="/accountdetails" className="nav-link"><LangUtil en={'YOUR DETAILS'} az={'MƏLUMATLAR'} /></NavLink>
                </div>
                <div className="right-sec">
                    <button className="btn nav-link" onClick={() => { setAuthData({ "isAuth": false }); googleLogout(); navigete('/login') }}><LangUtil en={'LOG OUT'} az={'ÇIXIŞ'} /></button>
                </div>
            </div>
        </div>
    )
}

export default AuthNavbar