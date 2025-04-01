import { useContext, useEffect } from "react";
import { IconContext } from "react-icons";
import { NavbarContext } from "../context/NavbarContext";
import { WishlistContext } from "../context/WishlistContext";
import { FaHeart } from "react-icons/fa";
import LangUtil from "../utils/LangUtil";
import { ThemeContext } from "../context/ThemeContext";

const Wishlist = () => {
    const [navbarTheme, setNavbarTheme] = useContext(NavbarContext);
    const { theme } = useContext(ThemeContext);
    const { wishlistdata, removeWishlistItem, isEmpty } = useContext(WishlistContext);
    useEffect(() => {
        if (theme === 'black') {
            document.getElementsByTagName('body')[0].style.backgroundColor = '#F0EBE3'
            setNavbarTheme('black');
        } else {
            document.getElementsByTagName('body')[0].style.backgroundColor = '#000'
            setNavbarTheme('light');
        }
    }, [theme])
    if (isEmpty()) return (
        <div className="container-fluid d-flex justify-content-center wishlist-sec">
            <div className="container cart-page d-flex flex-column justify-content-center align-items-center">
                <img src="https://cdni.iconscout.com/illustration/premium/thumb/empty-wishlist-illustration-download-in-svg-png-gif-file-formats--is-no-items-with-products-favorites-list-ecommerce-states-pack-e-commerce-shopping-illustrations-9741055.png" />
            </div>
        </div>
    )
    return (
        <div className="container-fluid d-flex justify-content-center">
            <div className="container cart-page d-flex flex-column ">
                <table>
                    <tbody>
                        {wishlistdata.items.map((item, index) => (
                            <tr key={index}>
                                <td>
                                    <button className="btn me-2" onClick={() => removeWishlistItem(item.id)}>
                                        <IconContext.Provider value={{ color: 'red', size: '1.5em' }}>
                                            <FaHeart />
                                        </IconContext.Provider>
                                    </button>
                                </td>
                                <td>
                                    <img style={{ width: "75px", height: "75px" }} src={item.img} alt="" />
                                </td>
                                <td className="ps-4 card-item-body" >
                                    <p className="fs-3 fw-bolder">{item.title}</p>
                                    <div style={{ width: "100%", height: "1px", background: "#B49360" }} />
                                    <p className="m-0">
                                        <LangUtil en="Color:" az="Rəng:" /> <span className="fw-bolder ms-2">{item.color}</span>
                                    </p>
                                    <p className="m-0">
                                        <LangUtil en="Category:" az="Kateqoriya:" /> <span className="fw-bolder ms-2">{item.category}</span>
                                    </p>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Wishlist