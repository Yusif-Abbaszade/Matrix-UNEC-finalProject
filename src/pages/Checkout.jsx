import { useContext, useEffect } from "react";
import { NavbarContext } from "../context/NavbarContext";
import LangUtil from "../utils/LangUtil"; // Import LangUtil component
import AccountPagePaymentDetails from "../components/AccountPagePaymentDetails";
import { AuthContext } from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";

//#F0EBE3
const Checkout = () => {
    const [navbarTheme, setNavbarTheme] = useContext(NavbarContext);
    const { theme } = useContext(ThemeContext);
    const [authData, setAuthData] = useContext(AuthContext);
    useEffect(() => {
        if (theme === 'black') {
            setNavbarTheme('black');
            document.getElementsByTagName('body')[0].style.backgroundColor = '#F0EBE3';
            document.querySelector('.checkout-page').style.color = 'black';
            document.querySelector('.checkout-page .paymentdet').style.color = 'black';
        }
        else {
            setNavbarTheme('light');
            document.getElementsByTagName('body')[0].style.backgroundColor = '#000';
            document.querySelector('.checkout-page').style.color = 'white';
            document.querySelector('.checkout-page .paymentdet').style.color = 'black';
        }
    }, [theme])
    return (
        <div className="container checkout-page">
            <p className="fw-bold my-5" style={{ fontSize: "50px" }}><LangUtil en="CHECKOUT" az="SİFARİŞİ TAMAMLA" /></p>
            <div className="row justify-content-around">
                <div className="col-12 col-lg-5 row g-2">
                    <p className="col-12 fs-2 fw-bolder"><LangUtil en="Your details" az="Sizin məlumatlarınız" /></p>
                    <input className="col-12" type="text" placeholder="FIRST NAME" defaultValue={authData?.billing?.name} />
                    <input className="col-12" type="text" placeholder="LAST NAME" defaultValue={authData?.billing?.surname} />
                    <input className="col-12" type="text" placeholder="EMAIL ADDRESS" defaultValue={authData?.billing?.email} />
                    <input className="col-12" type="text" placeholder="PHONE" defaultValue={authData?.billing?.phone} />
                </div>
                <div className="col-12 col-lg-5 row g-2 justify-content-center">
                    <p className="col-12 fs-2 fw-bolder"><LangUtil en="Delivery details" az="Çatdırılma məlumatları" /></p>
                    <input className="col-12" type="text" placeholder="STREET ADDRESS" defaultValue={authData?.billing?.address} />
                    <input className="col-12" type="text" placeholder="APT, COMPANY, HOUSE NAME" defaultValue={authData?.billing?.compName} />
                    <input className="col-12" type="text" placeholder="COUNTRY" />
                    <div className="col-12 row p-0">
                        <input className="col-4" type="text" placeholder="CITY" defaultValue={authData?.billing?.city} />
                        <input className="col-4" type="text" placeholder="STATE" defaultValue={authData?.billing?.state} />
                        <input className="col-4" type="text" placeholder="ZIP" defaultValue={authData?.billing?.zipCode} />
                    </div>
                </div>
                <div className="col-12 paymentdet container d-flex flex-column gap-5 my-5">
                    <AccountPagePaymentDetails />
                </div>
                <button className="btn col-4 fs-4 float-end my-5" style={{ background: "#D7C6AF" }}><LangUtil en="PLACE ORDER" az="SİFARİŞ ET" /></button>
            </div>
        </div>
    )
}

export default Checkout