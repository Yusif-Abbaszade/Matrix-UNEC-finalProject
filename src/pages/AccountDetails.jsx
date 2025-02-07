import { useContext, useEffect } from "react"
import { AuthContext } from "../context/AuthContext"

const AccountDetails = () => {
    useEffect(() => {
        document.getElementsByTagName('body')[0].style.backgroundColor = 'black'
    }, [])
    const authData = JSON.parse(localStorage.getItem('authData'));

    return (
        <div className="container">
            <p className="fs-1 fw-bolder text-light">{authData.username}</p>
            <p className="fs-1 fw-bolder text-light">{authData.email}</p>
        </div>
    )
}

export default AccountDetails