import { useContext } from "react";
import { useEffect } from "react";
import { NavbarContext } from "../context/NavbarContext";
import { LiaTimesSolid } from "react-icons/lia";
import { IconContext } from "react-icons/lib";
import { FaTrashCan } from "react-icons/fa6";
import { useCart } from "react-use-cart";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import LangUtil from "../utils/LangUtil";
import { ThemeContext } from "../context/ThemeContext";

const Cart = () => {
  const [navbarTheme, setNavbarTheme] = useContext(NavbarContext);
  const { theme } = useContext(ThemeContext);
  const [authData, setAuthData] = useContext(AuthContext);
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    emptyCart,
    removeItem,
  } = useCart();

  useEffect(() => {
    if (theme === 'black') {
      document.getElementsByTagName('body')[0].style.backgroundColor = '#F0EBE3'
      setNavbarTheme('black');
    } else {
      document.getElementsByTagName('body')[0].style.backgroundColor = '#000';
      setNavbarTheme('light');
    }
  }, [theme])

  if (isEmpty) return (
    <div className="container-fluid d-flex justify-content-center">
      <div className="container cart-page d-flex flex-column justify-content-center align-items-center">
        <img src="https://moscot.com/cdn/shop/files/empty-cart-hyman-moscot_350x.gif?v=1688454525" alt="Empty Cart" />
      </div>
    </div>
  )

  return (
    <div className="container-fluid d-flex justify-content-center">
      <div className="container cart-page d-flex flex-column ">
        <table>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td>
                  <button className="btn me-2" onClick={() => removeItem(item.id)}>
                    <IconContext.Provider value={{ color: '#B49360', size: '1em' }}>
                      <LiaTimesSolid />
                    </IconContext.Provider>
                  </button>
                </td>
                <td>
                  <img style={{ width: "75px", height: "75px" }} src={item.img} alt={item.title} />
                </td>
                <td className="ps-4 card-item-body">
                  <p className="fs-3 fw-bolder">{item.title}</p>
                  <div style={{ width: "100%", height: "1px", background: "#B49360" }} />
                  <p className="m-0">
                    <LangUtil en="Color:" az="Rəng:" /> <span className="fw-bolder ms-2">{item.color}</span>
                  </p>
                  <p className="m-0">
                    <LangUtil en="Category:" az="Kateqoriya:" /> <span className="fw-bolder ms-2">{item.category}</span>
                  </p>
                </td>
                <td className="ms-5 float-end price-quantity d-flex flex-column align-items-center" style={{ minWidth: "110px" }}>
                  <span className="mb-2">${(item.price * item.quantity).toFixed(2)}</span>
                  <div className="quantity-sec">
                    <button className="btn border-black rounded-0 py-1" onClick={() => updateItemQuantity(item.id, (item.quantity ?? 0) - 1)}>-</button>
                    <span className="mx-2">{item.quantity}</span>
                    <button className="btn border-black rounded-0 py-1" onClick={() => updateItemQuantity(item.id, (item.quantity ?? 0) + 1)}>+</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="total-cart-sec mt-5">
          <div className="d-flex justify-content-between">
            <h4>
              <LangUtil en="Total Items:" az="Ümumi Məhsullar:" /> {totalUniqueItems}
            </h4>
            <h4>
              <LangUtil en="Total Price:" az="Ümumi Qiymət:" /> ${items.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}
            </h4>
          </div>
          <div className="d-flex justify-content-between row">
            <button className="btn btn-danger col-2 col-sm-1" onClick={emptyCart}>
              <IconContext.Provider value={{ color: 'white', size: '1em' }}>
                <FaTrashCan />
              </IconContext.Provider>
            </button>
            <Link to={"/checkout"} className="btn checkoutbtn col-8 rounded-0 px-5 py-2 fw-bolder fs-4">
              <LangUtil en="PLACE ORDER" az="SİFARİŞ ET" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart;