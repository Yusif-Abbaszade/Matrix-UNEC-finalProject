import { useContext, useEffect, useRef } from "react"
import { Link, useNavigate } from "react-router-dom"
import supabase from "../utils/supabase"
import { AuthContext } from "../context/AuthContext"
import { toast, ToastContainer } from "react-toastify"
import Swal from "sweetalert2"
import { NavbarContext } from "../context/NavbarContext"
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google"
import { jwtDecode } from "jwt-decode";
import { v4 as uuidv4 } from 'uuid';
import { motion } from 'motion/react';
const Login = () => {
  const [navbarTheme, setNavbarTheme] = useContext(NavbarContext);
  useEffect(() => {
    document.getElementsByTagName('body')[0].style.backgroundColor = 'white'
    setNavbarTheme('light')
  }, [])

  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const [authData, setAuthData] = useContext(AuthContext);


  const SearcDataFromDatabaseForLogin = async (userInfo) => {
    const { data, error } = await supabase.from('userData').select('*');
    if (error) console.log(error);
    let auth = false;
    data.map((item) => {
      if (item.email === userInfo.email && item.password === userInfo.password) {
        item.isAuth = true;
        auth = true;
        setAuthData(item);
        navigate('/accountdetails');
      }
    })
    if (!auth) {
      Swal.fire({
        title: "ERROR",
        text: "WRONG EMAIL OR PASSWORD!",
        icon: "error",
        confirmButtonColor: "black"
      });
    }
  }

  const SearcDataFromDatabaseForGoogleLogin = async (userInfo) => {
    const { data, error } = await supabase.from('userData').select('*');
    if (error) console.log(error);
    let auth = false;
    data.map((item) => {
      if (item.email === userInfo.email) {
        item.isAuth = true;
        auth = true;
        setAuthData(item);
        navigate('/accountdetails');
      }
    })
    if (!auth) {
      const { data, error } = await supabase
        .from('userData')
        .insert({ username: userInfo.name, email: userInfo.email, password: uuidv4() })
        .select('*')
      if (error) { console.log(error) }
      data[0].isAuth = true;
      auth = true;
      setAuthData(data[0]);
      navigate('/accountdetails');
    }
  }

  const handleLoginForm = (e) => {
    e.preventDefault();
    SearcDataFromDatabaseForLogin({ "email": emailRef.current.value, "password": passwordRef.current.value })
  }

  const handleGoogleLogin = (credentialData) => {
    const data = jwtDecode(credentialData.credential);
    SearcDataFromDatabaseForGoogleLogin(data);
  }


  return (
    <div className="login-sec d-flex align-items-center">
      <div className="login-bgimg"></div>
      <motion.div className="container" initial={{ opacity: 0, translateX: "-500px" }} whileInView={{ opacity: 1, translateX: 0, translateY: 0 }} transition={{ duration: 1 }}>
        <form action="" className="text-center py-4 rounded-3" style={{ background: "#f0ebe3", height: "100%" }} >
          <p className="fs-1 fw-bolder">WELCOME BACK</p>
          <p className="" style={{ margin: "0", fontSize: "18px" }}>Login to your account below.</p>
          <p className="" style={{ margin: "0", fontSize: "18px" }}>New around here? <Link to={'/signup'} className="text-decoration-none fw-bold" style={{ color: "black" }}>Create an account</Link></p>
          <input ref={emailRef} className="w-75 mt-4 px-2" style={{ height: "40px", border: "none", fontSize: "14px", backgroundColor: "#ebe3d6" }} placeholder="EMAIL" type="email" />
          <input ref={passwordRef} className="w-75 mt-4 px-2" style={{ height: "40px", border: "none", fontSize: "14px", backgroundColor: "#ebe3d6" }} placeholder="PASSWORD" type="password" />
          <div className="d-flex justify-content-center align-items-center mt-2">
            <GoogleLogin width={3} text="signin" size="large" logo_alignment="center" type="icon" onSuccess={(credentialData) => { handleGoogleLogin(credentialData) }} onError={() => { alert('err') }} />
          </div>
          <button type="submit" onClick={handleLoginForm} className="w-75 mt-3 mb-3 btn" style={{ background: "#d7c6af", height: "50px" }}>LOG IN</button>
        </form>
      </motion.div>
    </div>
  )
}

export default Login