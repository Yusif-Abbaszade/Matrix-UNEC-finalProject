import { useContext, useRef } from "react";
import { IconContext } from "react-icons";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { AuthContext } from "../context/AuthContext";
import slugify from "slugify";
import supabase from "../utils/supabase";

const AccountPagePaymentDetails = () => {
    const [authData, setAuthData] = useContext(AuthContext);
    let cartdetails = authData.cartdetails;
    const cartNumberRef = useRef();
    const expirationDateRef = useRef();
    const securityCodeRef = useRef();
    const cartNameRef = useRef();


    async function handleSubmit(e) {
        e.preventDefault();
        const data = { cartNumber: cartNumberRef.current.value, expirationDate: expirationDateRef.current.value, securityCode: securityCodeRef.current.value, cartName: cartNameRef.current.value }
        const { error } = await supabase
            .from('userData')
            .update({ "cartdetails": {"cart":data} })
            .eq('uuid', JSON.parse(localStorage.getItem('authData')).uuid)
        if (error) { console.log(error) }
        setAuthData({ ...authData, cartdetails: { cart: data } })
    }



    return (
        <div className="container" style={{ background: "#f0ebe3", padding: "20px", borderRadius: "10px" }}>
            <div className="head-sec d-flex flex-row justify-content-between">
                <div className="left-sec fs-5 fw-bold">PAYMENT DETAILS</div>
                <button className="btn text-dark fw-bold fs-5 px-3 py-2" style={{ background: "#d7c6af" }} data-bs-toggle="collapse" data-bs-target={'#collapse-AcoountDetails-cartDetailsAccordion'}>{cartdetails.cart.length === 0?"ADD NEW":"EDIT CART"}</button>

            </div>
            {
                cartdetails.cart.length === 0
                    ? <div className="alert w-50 mt-3" role="alert" style={{ background: "#d7c6af" }}>
                        <IconContext.Provider value={{}}>
                            <BsFillInfoCircleFill />
                        </IconContext.Provider>
                        <span className="ms-2 fs-5">No saved methods found.</span>
                    </div>
                    : <div>
                        <p className="fs-2 fw-bolder mb-0">{cartdetails.cart.cartName}</p>
                        <p className="mb-0 fs-5 ms-3">{cartdetails.cart.cartNumber.substring(0, 4)} {cartdetails.cart.cartNumber.substring(4,8)} **** ****</p>
                        <p className="mb-0 fs-5 ms-3"></p>
                        <p className="mb-0 fs-5 ms-3"></p>
                    </div>
            }
            <div className="accordion">
                <div className="accordion-item border-0">
                    <div id={'collapse-AcoountDetails-cartDetailsAccordion'} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{ background: "#f0ebe3" }}>
                            <form action="" onSubmit={handleSubmit} className="row g-3 accountdetails-form">
                                <div className="col-12 col-md-6">
                                    <label>Cart Number</label>
                                    <input type="text" className="w-100" ref={cartNumberRef} placeholder="1234 1234 1234 1234" maxLength={16} defaultValue={cartdetails.cart.cartNumber} />
                                </div>
                                <div className="col-12 col-md-3">
                                    <label>Expiration Date</label>
                                    <input type="text" className="w-100" ref={expirationDateRef} placeholder="MM/YY" maxLength={5} defaultValue={cartdetails.cart.expirationDate} />
                                </div>
                                <div className="col-12 col-md-3">
                                    <label>Security code</label>
                                    <input type="text" className="w-100" ref={securityCodeRef} placeholder="CVC" maxLength={3} defaultValue={cartdetails.cart.securityCode} />
                                </div>
                                <div className="col-12">
                                    <label>Cart Name</label>
                                    <input type="text" className="w-100" ref={cartNameRef} placeholder="Cart Name" defaultValue={cartdetails.cart.cartName} />
                                </div>
                                <div className="col-8 col-sm-6 col-md-4">
                                    <button className="btn" style={{ width: "100%" }}>{cartdetails.cart.length === 0?"ADD PAYMENT NOW":"EDIT PAYMENT NOW"}</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccountPagePaymentDetails