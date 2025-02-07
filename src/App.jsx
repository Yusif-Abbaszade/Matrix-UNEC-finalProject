import React, { useContext, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AOS from "aos";
import '../node_modules/aos/dist/aos.css'
import Home from "./pages/Home";
import Header from "./components/Header";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'react-multi-carousel/lib/styles.css'
import './assets/sass/style.scss'
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import AboutUs from "./pages/AboutUs";
import BSCarTry from "./components/BSCarTry";
import FAQ from "./pages/FAQ";
import Warranty from "./pages/Warranty";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AccountDetails from "./pages/AccountDetails";
import { AuthContext } from "./context/AuthContext";
const App = () => {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  const [authData] = useContext(AuthContext);
  return (
    <>
      <BrowserRouter>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/support/faq" element={<FAQ />} />
          <Route path="/support/warranty" element={<Warranty />} />
          {authData && authData.isAuth?"":<Route path="/login" element={<Login />} />}
          {authData && authData.isAuth?"":<Route path="/signup" element={<Signup />} />}
          {authData && authData.isAuth?<Route path="/accountdetails" element={<AccountDetails />} />:""}
          <Route path="/for-try" element={<BSCarTry />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
