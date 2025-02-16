import { useContext, useEffect, useRef } from "react"
import { IconContext } from "react-icons"
import { BsFillInfoCircleFill } from "react-icons/bs"
import slugify from "slugify"
import supabase from "../utils/supabase"
import { AuthContext } from "../context/AuthContext"

const AccountPageDetailsEditCard = ({ headertext, ddbuttontext, alert }) => {
    const [authData, setAuthData] = useContext(AuthContext);
    let userData = (headertext === 'Billing') ? authData.billing : authData.shipping || null;
    const firstnameRef = useRef();
    const lastnameRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();
    const addressRef = useRef();
    const cityRef = useRef();
    const stateRef = useRef();
    const zipCodeRef = useRef();
    const compNameRef = useRef();

    useEffect(() => {
        userData = (headertext === 'Billing') ? authData.billing : authData.shipping;
    }, [authData])

    const updateBilling = async () => {
        const data = { name: firstnameRef.current.value, surname: lastnameRef.current.value, email: emailRef.current.value, phone: phoneRef.current.value, address: addressRef.current.value, city: cityRef.current.value, state: stateRef.current.value, zipCode: zipCodeRef.current.value, compName: compNameRef.current.value }
        const { error } = await supabase
            .from('userData')
            .update({ "billing": data })
            .eq('uuid', JSON.parse(localStorage.getItem('authData')).uuid)
        if (error) { console.log(error) }
        setAuthData({ ...authData, billing: data })
    }
    const updateShipping = async () => {
        const data = { name: firstnameRef.current.value, surname: lastnameRef.current.value, email: emailRef.current.value, phone: phoneRef.current.value, address: addressRef.current.value, city: cityRef.current.value, state: stateRef.current.value, zipCode: zipCodeRef.current.value, compName: compNameRef.current.value }
        const { error } = await supabase
            .from('userData')
            .update({ 'shipping': data })
            .eq('uuid', JSON.parse(localStorage.getItem('authData')).uuid)
        if (error) { console.log(error) }
        setAuthData({ ...authData, shipping: data })
    }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     (headertext === 'Billing') ? updateBilling() : updateShipping()
    // }
    function handleSubmit(e) {
        e.preventDefault();
        (headertext === 'Billing') ? updateBilling() : updateShipping()
    }
    return (
        <div className="container" style={{ background: "#f0ebe3", padding: "20px", borderRadius: "10px" }}>
            <div className="head-sec d-flex flex-row justify-content-between">
                <div className="left-sec fs-5 fw-bold">{headertext}</div>
                <button className="btn text-dark fw-bold fs-5 px-3 py-2" style={{ background: "#d7c6af" }} data-bs-toggle="collapse" data-bs-target={`#collapse-AcoountDetails-${slugify(headertext, { lower: true })}`}>{ddbuttontext}</button>
            </div>
            {
                userData === null
                    ? <div className="alert w-50 mt-3" role="alert" style={{ background: "#d7c6af" }}>
                        <IconContext.Provider value={{}}>
                            <BsFillInfoCircleFill />
                        </IconContext.Provider>
                        <span className="ms-2 fs-5">{alert}</span>
                    </div>
                    : <div>
                        <p className="fs-2 fw-bolder mb-0">{userData.name} {userData.surname}</p>
                        <p className="mb-0 fs-5 ms-3">{userData.compName}</p>
                        <p className="mb-0 fs-5 ms-3">{userData.streetAdress}</p>
                        <p className="mb-0 fs-5 ms-3">{userData.city} {userData.zipCode}</p>
                    </div>
            }
            <div className="accordion">
                <div className="accordion-item border-0">
                    <div id={`collapse-AcoountDetails-${slugify(headertext, { lower: true })}`} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{ background: "#f0ebe3" }}>
                            <form action="" onSubmit={handleSubmit} className="row g-3 accountdetails-form">
                                <div className="col-12 col-sm-6">
                                    <label>First name</label>
                                    <input type="text" className="w-100" placeholder="First name" ref={firstnameRef} defaultValue={userData && userData.name} />
                                </div>
                                <div className="col-12 col-sm-6">
                                    <label>Last name</label>
                                    <input type="text" className="w-100" placeholder="Last name" ref={lastnameRef} defaultValue={userData && userData.surname} />
                                </div>
                                <div className="col-12">
                                    <label>Email Address</label>
                                    <input type="text" className="w-100" placeholder="Email Address" ref={emailRef} defaultValue={userData && userData.email} />
                                </div>
                                <div className="col-12">
                                    <label>Phone</label>
                                    <input type="text" className="w-100" placeholder="Phone" ref={phoneRef} defaultValue={userData && userData.phone} />
                                </div>
                                <div className="col-12">
                                    <label>Street Address</label>
                                    <input type="text" className="w-100" placeholder="Street Address" ref={addressRef} defaultValue={userData && userData.address} />
                                </div>
                                <div className="col-12 col-md-4">
                                    <label>City</label>
                                    <input type="text" className="w-100" placeholder="City" ref={cityRef} defaultValue={userData && userData.city} />
                                </div>
                                <div className="col-12 col-md-4">
                                    <label>State</label>
                                    <input type="text" className="w-100" placeholder="State" ref={stateRef} defaultValue={userData && userData.state} />
                                </div>
                                <div className="col-12 col-md-4">
                                    <label>Zip</label>
                                    <input type="text" className="w-100" placeholder="Zip" ref={zipCodeRef} defaultValue={userData && userData.zipCode} />
                                </div>
                                <div className="col-12">
                                    <label>Company Name</label>
                                    <input type="text" className="w-100" placeholder="Company Name" ref={compNameRef} defaultValue={userData && userData.compName} />
                                </div>
                                <div className="col-8 col-sm-6 col-md-4">
                                    <button className="btn" style={{ width: "100%" }}>SAVE CHANGES</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default AccountPageDetailsEditCard