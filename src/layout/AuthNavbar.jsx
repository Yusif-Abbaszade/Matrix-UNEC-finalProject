import { useContext } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"
import { googleLogout } from "@react-oauth/google";

const AuthNavbar = () => {
    const [authData, setAuthData] = useContext(AuthContext);
    const navigete = useNavigate();
    return (
        <div className="authnavbar-sec pt-4">
            <div className="container d-flex justify-content-between align-items-center">
                <div className="left-sec d-flex gap-5">
                    <NavLink to="/accountdetails" className="nav-link">YOUR DETAILS</NavLink>
                </div>
                <div className="right-sec">
                    <button className="btn nav-link" onClick={()=>{setAuthData({"isAuth":false}); googleLogout(); navigete('/login')}}>LOG OUT</button>
                </div>
            </div>
        </div>
    )
}

export default AuthNavbar