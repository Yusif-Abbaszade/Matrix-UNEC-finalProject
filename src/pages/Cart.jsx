import { useContext } from "react";
import { useEffect } from "react";
import { NavbarContext } from "../context/NavbarContext";
import { LiaTimesSolid } from "react-icons/lia";
import { IconContext } from "react-icons/lib";
import { useCart } from "react-use-cart";
const Cart = () => {
  const [navbarTheme, setNavbarTheme] = useContext(NavbarContext);
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
  } = useCart();
  useEffect(() => {
    document.getElementsByTagName('body')[0].style.backgroundColor = '#F0EBE3'
    setNavbarTheme('black');
  }, [])

  return (
    <div className="container-fluid d-flex justify-content-center">
      <div className="container cart-page d-flex flex-column ">
        {/* <ul className="list-unstyled">
          {items.map((item, index) => (
            <li className="mt-3" key={index}>
              <div className="cart-item d-flex flex-row justify-content-around">
                <div className="left-sec d-flex flex-row">
                  <button className="btn me-2">
                    <IconContext.Provider value={{ color: '#B49360', size: '1em' }}>
                      <LiaTimesSolid />
                    </IconContext.Provider>
                  </button>
                  <img style={{ width: "75px", height: "75px" }} src={item.img} alt="" />
                  <div className="main-sec ms-4">
                    <p className="fs-3 fw-bolder">{item.title}</p>
                    <div style={{ width: "150%", height: "1px", background: "#B49360" }} />
                    <p className="m-0">Color: <span className="fw-bolder ms-2">{item.color}</span></p>
                    <p className="m-0">Category: <span className="fw-bolder ms-2">{item.category}</span></p>
                  </div>
                </div>
                <div className="price-quantity d-flex flex-column align-items-center">
                  <span className="mb-2">${item.price * item.quantity}</span>
                  <div className="quantity-sec">
                    <button className="btn border-black rounded-0 py-1">-</button>
                    <span className="mx-2">{item.quantity}</span>
                    <button className="btn border-black rounded-0 py-1">+</button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul> */}
        <table>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td>
                  <button className="btn me-2">
                    <IconContext.Provider value={{ color: '#B49360', size: '1em' }}>
                      <LiaTimesSolid />
                    </IconContext.Provider>
                  </button>
                </td>
                <td>
                  <img style={{ width: "75px", height: "75px" }} src={item.img} alt="" />
                </td>
                <td className="ps-4 card-item-body" >
                  <p className="fs-3 fw-bolder">{item.title}</p>
                  <div style={{ width: "100%", height: "1px", background: "#B49360" }} />
                  <p className="m-0">Color: <span className="fw-bolder ms-2">{item.color}</span></p>
                  <p className="m-0">Category: <span className="fw-bolder ms-2">{item.category}</span></p>
                </td>
                <td className="ms-5 float-end price-quantity d-flex flex-column align-items-center" style={{minWidth:"110px"}}>
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
      </div>
    </div>
  )
}

export default Cart