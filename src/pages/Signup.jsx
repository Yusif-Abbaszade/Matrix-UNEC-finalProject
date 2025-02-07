import { useEffect, useRef } from "react"
import { Link, useNavigate } from "react-router-dom"
import supabase from "../utils/supabase"

const Signup = () => {
    useEffect(() => {
        document.getElementsByTagName('body')[0].style.backgroundColor = 'white'
    }, [])

    const userRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();

    const addDataToDatabase = async (userInfo)=>{
        const {data, error} = await supabase.from('userData').insert(userInfo).select()
    }

    const handleSignupForm = (e) => {
        e.preventDefault();
        addDataToDatabase([{"username":userRef.current.value, "email":emailRef.current.value, "password":passwordRef.current.value}])
        navigate('/login');
    }

    return (
        <div className="login-sec d-flex align-items-center">
            <div className="login-bgimg"></div>
            <div className="container">
                <form action="" className="text-center py-4 rounded-3" style={{ background: "#f0ebe3", width: "30rem", height: "100%" }}>
                    <p className="fs-1 fw-bolder">CREATE ACCOUNT</p>
                    <p className="" style={{ margin: "0", fontSize: "18px" }}>Fill out the form below to create your account.</p>
                    <p className="" style={{ margin: "0", fontSize: "18px" }}>Already have an account? <Link to={'/login'} className="text-decoration-none fw-bold" style={{ color: "black" }}>Login</Link></p>
                    <input ref={userRef} className="w-75 mt-4 px-2" style={{ height: "40px", border: "none", fontSize: "14px", backgroundColor: "#ebe3d6" }} placeholder="USERNAME" type="text" />
                    <input ref={emailRef} className="w-75 mt-4 px-2" style={{ height: "40px", border: "none", fontSize: "14px", backgroundColor: "#ebe3d6" }} placeholder="EMAIL" type="email" />
                    <input ref={passwordRef} className="w-75 mt-4 px-2" style={{ height: "40px", border: "none", fontSize: "14px", backgroundColor: "#ebe3d6" }} placeholder="PASSWORD" type="password" />
                    <p className="mt-3 px-5" style={{ fontSize: "14px" }}>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
                    <button type="submit" onClick={handleSignupForm} className="w-75 mt-2 btn" style={{ background: "#d7c6af", height: "50px", fontWeight: "bold" }}>REGISTER</button>
                </form>
            </div>
        </div>
    )
}

export default Signup