import { useContext } from "react";
import { useEffect } from "react";
import { NavbarContext } from "../context/NavbarContext";

const Cart = () => {
  const [navbarTheme, setNavbarTheme] = useContext(NavbarContext);
  useEffect(() => {
    document.getElementsByTagName('body')[0].style.backgroundColor = '#F0EBE3'
    setNavbarTheme('black');
  }, [])
  return (
    <div className="container cart-page">
      
    </div>
  )
}

export default Cart