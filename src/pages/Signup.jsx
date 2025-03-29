import { useContext, useEffect, useRef } from "react"
import { Link, useNavigate } from "react-router-dom"
import supabase from "../utils/supabase"
import Swal from "sweetalert2"
import { NavbarContext } from "../context/NavbarContext"
import { motion } from "motion/react";
import LangUtil from "../utils/LangUtil"; // Import LangUtil component

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
                text: <LangUtil en="USER ALREADY EXISTS!" az="İSTİFADƏÇİ ARTIQ MÖVCUDDUR!" />,
                icon: "error",
                confirmButtonColor: "black",
                background: "#d7c6af"
            });
        } else {
            Swal.fire({
                title: "SUCCESS",
                text: <LangUtil en="ACCOUNT CREATED SUCCESSFULLY!" az="HESAB UĞURLA YARADILDI!" />,
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
                    text: <LangUtil en="PASSWORDS MUST MATCH!" az="ŞİFRƏLƏR EYNİ OLMALIDIR!" />,
                    icon: "error",
                    confirmButtonColor: "black",
                    background: "#d7c6af"
                });
            }
        } else {
            Swal.fire({
                title: "ERROR",
                text: <LangUtil en="YOU MUST FILL OUT ALL FIELDS!" az="BÜTÜN SAHƏLƏRİ DOLDURMALISINIZ!" />,
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
                    <p className="fs-1 fw-bolder"><LangUtil en="CREATE ACCOUNT" az="HESAB YARADIN" /></p>
                    <p className="" style={{ margin: "0", fontSize: "18px" }}>
                        <LangUtil en="Fill out the form below to create your account." az="Hesabınızı yaratmaq üçün aşağıdakı formu doldurun." />
                    </p>
                    <p className="" style={{ margin: "0", fontSize: "18px" }}>
                        <LangUtil en="Already have an account?" az="Artıq hesabınız var?" />
                        <Link to={'/login'} className="text-decoration-none fw-bold" style={{ color: "black" }}>
                            <LangUtil en="Login" az="Daxil olun" />
                        </Link>
                    </p>
                    <input required={true} ref={userRef} className="w-75 mt-4 px-2" style={{ height: "40px", border: "none", fontSize: "14px", backgroundColor: "#ebe3d6" }} placeholder="USERNAME" type="text" />
                    <input required={true} ref={emailRef} className="w-75 mt-4 px-2" style={{ height: "40px", border: "none", fontSize: "14px", backgroundColor: "#ebe3d6" }} placeholder="EMAIL" type="email" />
                    <input required={true} ref={passwordRef1} className="w-75 mt-4 px-2" style={{ height: "40px", border: "none", fontSize: "14px", backgroundColor: "#ebe3d6" }} placeholder="PASSWORD" type="password" />
                    <input required={true} ref={passwordRef2} className="w-75 mt-4 px-2" style={{ height: "40px", border: "none", fontSize: "14px", backgroundColor: "#ebe3d6" }} placeholder="PASSWORD" type="password" />
                    <p className="mt-3 px-5" style={{ fontSize: "14px" }}>
                        <LangUtil en="Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy." az="Şəxsi məlumatlarınız bu vebsaytda təcrübənizi dəstəkləmək, hesabınıza girişinizi idarə etmək və məxfilik siyasətimizdə təsvir edilən digər məqsədlər üçün istifadə olunacaq." />
                    </p>
                    <button type="submit" onClick={handleSignupForm} className="w-75 mt-2 btn" style={{ background: "#d7c6af", height: "50px", fontWeight: "bold" }}>
                        <LangUtil en="REGISTER" az="QEYDİYYAT" />
                    </button>
                </form>
            </motion.div>
        </div>
    )
}

export default Signup