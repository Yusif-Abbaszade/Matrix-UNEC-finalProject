import { useContext, useEffect, useRef } from "react"
import { Link, useNavigate } from "react-router-dom"
import supabase from "../utils/supabase"
import Swal from "sweetalert2"
import { NavbarContext } from "../context/NavbarContext"
import { motion } from "motion/react";

const Signup = () => {
    const [navbarTheme, setNavbarTheme] = useContext(NavbarContext);
    useEffect(() => {
        document.getElementsByTagName('body')[0].style.backgroundColor = 'white'
        setNavbarTheme('light')
    }, [])

    const userRef = useRef();
    const emailRef = useRef();
    const passwordRef1 = useRef();
    const passwordRef2 = useRef();
    const navigate = useNavigate();

    const addDataToDatabase = async (userInfo) => {
        const { data, error } = await supabase.from('userData').insert(userInfo).select()
        if (error) {
            Swal.fire({
                title: "ERROR",
                text: "USER ALREDY EXIST!",
                icon: "error",
                confirmButtonColor: "black",
                background: "#d7c6af"
            });
        } else {
            Swal.fire({
                title: "SUCCESS",
                text: "ACCOUNT CREATED SUCCESSFULLY!",
                icon: "success",
                confirmButtonColor: "black",
                background: "#d7c6af"
            });
        }
    }

    const handleSignupForm = (e) => {
        e.preventDefault();
        if (userRef.current.value.length !== 0 && emailRef.current.value.length !== 0 && passwordRef1.current.value.length !== 0 && passwordRef1.current.value.length !== 0) {
            if (passwordRef1.current.value === passwordRef2.current.value) {
                addDataToDatabase([{ "username": userRef.current.value, "email": emailRef.current.value, "password": passwordRef1.current.value }])
                navigate('/login');
            } else {
                Swal.fire({
                    title: "ERROR",
                    text: "PASSWORD MUST BE SAME!",
                    icon: "error",
                    confirmButtonColor: "black",
                    background: "#d7c6af"
                });
            }
        } else {
            Swal.fire({
                title: "ERROR",
                text: "YOU MUST FILL THE GAPS!",
                icon: "error",
                confirmButtonColor: "black",
                background: "#d7c6af"
            });
        }
    }

    return (
        <div className="login-sec d-flex align-items-center">
            <div className="login-bgimg"></div>
            <motion.div className="container" initial={{ opacity: 0, translateX: "-300px" }} whileInView={{ opacity: 1, translateX: 0, translateY: 0 }} transition={{ duration: 1 }}>
                <form action="" className="text-center py-4 rounded-3" style={{ background: "#f0ebe3", width: "30rem", height: "100%" }}>
                    <p className="fs-1 fw-bolder">CREATE ACCOUNT</p>
                    <p className="" style={{ margin: "0", fontSize: "18px" }}>Fill out the form below to create your account.</p>
                    <p className="" style={{ margin: "0", fontSize: "18px" }}>Already have an account? <Link to={'/login'} className="text-decoration-none fw-bold" style={{ color: "black" }}>Login</Link></p>
                    <input required={true} ref={userRef} className="w-75 mt-4 px-2" style={{ height: "40px", border: "none", fontSize: "14px", backgroundColor: "#ebe3d6" }} placeholder="USERNAME" type="text" />
                    <input required={true} ref={emailRef} className="w-75 mt-4 px-2" style={{ height: "40px", border: "none", fontSize: "14px", backgroundColor: "#ebe3d6" }} placeholder="EMAIL" type="email" />
                    <input required={true} ref={passwordRef1} className="w-75 mt-4 px-2" style={{ height: "40px", border: "none", fontSize: "14px", backgroundColor: "#ebe3d6" }} placeholder="PASSWORD" type="password" />
                    <input required={true} ref={passwordRef2} className="w-75 mt-4 px-2" style={{ height: "40px", border: "none", fontSize: "14px", backgroundColor: "#ebe3d6" }} placeholder="PASSWORD" type="password" />
                    <p className="mt-3 px-5" style={{ fontSize: "14px" }}>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
                    <button type="submit" onClick={handleSignupForm} className="w-75 mt-2 btn" style={{ background: "#d7c6af", height: "50px", fontWeight: "bold" }}>REGISTER</button>
                </form>
            </motion.div>
        </div>
    )
}

export default Signup