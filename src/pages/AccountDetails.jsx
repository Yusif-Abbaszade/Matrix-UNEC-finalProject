import { useContext, useEffect } from "react"
import { AuthContext } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"

const AccountDetails = () => {
    useEffect(() => {
        document.getElementsByTagName('body')[0].style.backgroundColor = 'black'
    }, [])
    // const authDataLocal = JSON.parse(localStorage.getItem('authData'));
    const [authData, setAuthData] = useContext(AuthContext)
    const navigate = useNavigate();
    return (
        <div className="container">
            <p className="fs-1 fw-bolder text-light">{authData.username}</p>
            <p className="fs-1 fw-bolder text-light">{authData.email}</p>
            <button className="btn btn-danger fs-1" onClick={()=>{setAuthData({"isAuth":false}); navigate('/')}}>Exit</button>
        </div>
    )
}
// localStorage.setItem('authData', JSON.stringify({"isAuth":false}))
export default AccountDetails