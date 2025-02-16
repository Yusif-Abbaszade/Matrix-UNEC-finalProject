import { useContext, useEffect, useRef } from "react"
import { Link, useNavigate } from "react-router-dom"
import supabase from "../utils/supabase"
import { AuthContext } from "../context/AuthContext"
import { toast, ToastContainer } from "react-toastify"
import Swal from "sweetalert2"
import { NavbarContext } from "../context/NavbarContext"
import { GoogleLogin } from "@react-oauth/google"

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


  const SearcDataFromDatabase = async (userInfo) => {
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

  const handleLoginForm = (e) => {
    e.preventDefault();
    SearcDataFromDatabase({ "email": emailRef.current.value, "password": passwordRef.current.value })
  }

  return (
    <div className="login-sec d-flex align-items-center">
      <div className="login-bgimg"></div>
      <div className="container">
        <form action="" className="text-center py-4 rounded-3" style={{ background: "#f0ebe3", height: "100%" }}>
          <p className="fs-1 fw-bolder">WELCOME BACK</p>
          <p className="" style={{ margin: "0", fontSize: "18px" }}>Login to your account below.</p>
          <p className="" style={{ margin: "0", fontSize: "18px" }}>New around here? <Link to={'/signup'} className="text-decoration-none fw-bold" style={{ color: "black" }}>Create an account</Link></p>
          <input ref={emailRef} className="w-75 mt-4 px-2" style={{ height: "40px", border: "none", fontSize: "14px", backgroundColor: "#ebe3d6" }} placeholder="EMAIL" type="email" />
          <input ref={passwordRef} className="w-75 mt-4 px-2" style={{ height: "40px", border: "none", fontSize: "14px", backgroundColor: "#ebe3d6" }} placeholder="PASSWORD" type="password" />
          <GoogleLogin onSuccess={(e)=>{console.log(e)}} onError={()=>{console.log('err')}} />
          <button type="submit" onClick={handleLoginForm} className="w-75 mt-5 mb-3 btn" style={{ background: "#d7c6af", height: "50px" }}>LOG IN</button>
        </form>
      </div>
    </div>
  )
}

export default Login