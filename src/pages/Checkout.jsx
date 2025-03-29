import { useContext, useEffect } from "react";
import { NavbarContext } from "../context/NavbarContext";
import LangUtil from "../utils/LangUtil"; // Import LangUtil component

//#F0EBE3
const Checkout = () => {
    const [navbarTheme, setNavbarTheme] = useContext(NavbarContext);
    useEffect(() => {
        document.getElementsByTagName('body')[0].style.backgroundColor = '#F0EBE3'
        setNavbarTheme('black');
    }, [])
    return (
        <div className="container checkout-page">
            <p className="fw-bold my-5" style={{fontSize:"50px"}}><LangUtil en="CHECKOUT" az="SİFARİŞİ TAMAMLA" /></p>
            <div className="row justify-content-around">
                <div className="col-12 col-lg-5 row g-2">
                    <p className="col-12 fs-2 fw-bolder"><LangUtil en="Your details" az="Sizin məlumatlarınız" /></p>
                    <input className="col-12" type="text" placeholder="FIRST NAME" />
                    <input className="col-12" type="text" placeholder="LAST NAME" />
                    <input className="col-12" type="text" placeholder="EMAIL ADDRESS" />
                    <input className="col-12" type="text" placeholder="PHONE" />
                </div>
                <div className="col-12 col-lg-5 row g-2 justify-content-center">
                    <p className="col-12 fs-2 fw-bolder"><LangUtil en="Delivery details" az="Çatdırılma məlumatları" /></p>
                    <input className="col-12" type="text" placeholder="STREET ADDRESS" />
                    <input className="col-12" type="text" placeholder="APT, COMPANY, HOUSE NAME" />
                    <input className="col-12" type="text" placeholder="COUNTRY" />
                    <div className="col-12 row p-0">
                        <input className="col-4" type="text" placeholder="CITY" />
                        <input className="col-4" type="text" placeholder="STATE" />
                        <input className="col-4" type="text" placeholder="ZIP" />
                    </div>
                </div>
                <button className="btn col-4 fs-4 float-end my-5" style={{background:"#D7C6AF"}}><LangUtil en="PLACE ORDER" az="SİFARİŞ ET" /></button>
            </div>
        </div>
    )
}

export default Checkout