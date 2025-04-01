import { useContext, useEffect } from "react"
import { AuthContext } from "../context/AuthContext"
import { Link, useNavigate } from "react-router-dom"
import { NavbarContext } from "../context/NavbarContext";
import AuthNavbar from "../layout/AuthNavbar";
import AccountPageDetailsEditCard from "../components/AccountPageDetailsEditCard";
import supabase from "../utils/supabase";
import AccountPagePaymentDetails from "../components/AccountPagePaymentDetails";
import { motion } from "motion/react";
import { ThemeContext } from "../context/ThemeContext";

const AccountDetails = () => {
    const [navbarTheme, setNavbarTheme] = useContext(NavbarContext);
    const { theme } = useContext(ThemeContext);
    const [authData, setAuthData] = useContext(AuthContext)

    useEffect(() => {
        if (theme === 'black') {
            document.getElementsByTagName('body')[0].style.backgroundColor = '#ebe3d6'
            document.querySelector('.account-details-page').style.background = '#ebe3d6'
            document.querySelector('.account-details-page .headtext').style.color = 'black'
            setNavbarTheme('black');
        } else {
            document.getElementsByTagName('body')[0].style.backgroundColor = '#000'
            document.querySelector('.account-details-page').style.background = '#000'
            document.querySelector('.account-details-page .headtext').style.color = 'white'
            setNavbarTheme('light');
        }
    }, [theme])
    const navigate = useNavigate();
    return (
        <div className="account-details-page">
            <AuthNavbar />
            <p className="fw-bold text-center headtext mt-5" style={{ fontSize: "55px" }}>YOUR DETAILS</p>
            {authData && authData.role === 'admin' ? <Link className="btn btn-warning w-100 p-3 fs-2 fw-bolder" to={'/dashboard'}>Go To Dashboard</Link> : ""}
            <motion.div className="container d-flex flex-column gap-5 my-5" initial={{ opacity: 0, translateX: "-300px" }} whileInView={{ opacity: 1, translateX: 0, translateY: 0 }} transition={{ duration: 1 }}>
                <AccountPageDetailsEditCard headertext={'Billing'} ddbuttontext={'EDIT DETAILS'} alert={'No billing address provided.'} />
                <AccountPageDetailsEditCard headertext={'Shipping'} ddbuttontext={'EDIT DETAILS'} alert={'No shipping address provided.'} />
                <AccountPagePaymentDetails />
            </motion.div>
        </div>
    )
}

//{{name:"nam1e",surname:"surnam1e", compName:"compNa1me", streetAdress:"streetAdr1ess", city:"cit1y", zipCode:"zipCode1", email:"email1", phone:"phon1", address:"street1", state:"state1"}}


export default AccountDetails