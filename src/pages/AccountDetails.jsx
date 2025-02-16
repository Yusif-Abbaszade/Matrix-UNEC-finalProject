import { useContext, useEffect } from "react"
import { AuthContext } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"
import { NavbarContext } from "../context/NavbarContext";
import AuthNavbar from "../layout/AuthNavbar";
import AccountPageDetailsEditCard from "../components/AccountPageDetailsEditCard";
import supabase from "../utils/supabase";
import AccountPagePaymentDetails from "../components/AccountPagePaymentDetails";

const AccountDetails = () => {
    const [navbarTheme, setNavbarTheme] = useContext(NavbarContext);
    const [authData, setAuthData] = useContext(AuthContext)

    useEffect(() => {
        document.getElementsByTagName('body')[0].style.backgroundColor = '#ebe3d6'
        setNavbarTheme('dark');
    }, [])
    const navigate = useNavigate();
    return (
        <div className="account-details-page">
            <AuthNavbar />
            <p className="fw-bold text-center mt-5" style={{ fontSize: "55px" }}>YOUR DETAILS</p>
            <div className="container d-flex flex-column gap-5 my-5">
                <AccountPageDetailsEditCard headertext={'Billing'} ddbuttontext={'EDIT DETAILS'} alert={'No billing address provided.'} />
                <AccountPageDetailsEditCard headertext={'Shipping'} ddbuttontext={'EDIT DETAILS'} alert={'No shipping address provided.'} />
                <AccountPagePaymentDetails/>
            </div>
        </div>
    )
}

//{{name:"nam1e",surname:"surnam1e", compName:"compNa1me", streetAdress:"streetAdr1ess", city:"cit1y", zipCode:"zipCode1", email:"email1", phone:"phon1", address:"street1", state:"state1"}}


export default AccountDetails