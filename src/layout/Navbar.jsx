import { useContext, useEffect, useState } from "react";
import { IconContext } from "react-icons";
import { FaHeart, FaRegHeart, FaUser } from "react-icons/fa";
import { IoIosArrowDown, IoIosMenu, IoIosSearch } from "react-icons/io";
import { IoCartOutline, IoCloseSharp } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { NavbarContext } from "../context/NavbarContext";
import { useSelector } from "react-redux";
import slugify from "slugify";
import LangUtil from "../utils/LangUtil";

const logo_white = 'https://princetontec.com/wp-content/uploads/2023/12/Princeton-Tec-Logo-Mark-White-RGB.svg';
const logo_black = 'https://princetontec.com/wp-content/uploads/2024/01/Princeton-Tec-Logo-Mark-Black-RGB-1.svg';

const Navbar = () => {



    const [leftMenuOpen, setLeftMenuOpen] = useState(false)
    const [shopddMenuOpen, setshopddMenuOpen] = useState(false)
    const [authData] = useContext(AuthContext);
    const [navbarTheme, setNavbarTheme] = useContext(NavbarContext);
    const products = useSelector(p => p.products);
    const [productSearchText, setProductSearchText] = useState('');
    const navigate = useNavigate();


    const navbarToggle = () => {
        leftMenuOpen ? setLeftMenuOpen(false) : setLeftMenuOpen(true)
    }

    const shopddToggle = () => {
        shopddMenuOpen ? setshopddMenuOpen(false) : setshopddMenuOpen(true)
    }

    const resetAll = () => {
        setLeftMenuOpen(false);
        setshopddMenuOpen(false);
    }

    useEffect(() => {
        [...document.querySelectorAll('.resetAllClass')].map((item) => {
            item.onClick = () => {
                resetAll()
            }
        })
    }, [])

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-none py-3">
                <div className="container">
                    <Link to={'/'} style={{ width: "75px" }}><img src={navbarTheme === 'light' ? logo_white : logo_black} alt="" width={"100%"} /></Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-5">
                            <li>
                                <Link className={`resetAllClass ${navbarTheme === 'light' ? '' : 'text-dark'}`} to={'/shop'}><LangUtil  en={'Shop'} az={'MAĞAZA'}/> <div className="underline"></div></Link>
                            </li>
                            <li>
                                <Link className={`resetAllClass ${navbarTheme === 'light' ? '' : 'text-dark'}`} to={'/about-us'}><LangUtil en={'About'} az={'HAQQIMIZDA'} /><div className="underline"></div></Link>
                            </li>
                            <li>
                                <Link className={`resetAllClass ${navbarTheme === 'light' ? '' : 'text-dark'}`} to={'/news'}><LangUtil en={'News'} az={'XƏBƏRLƏR'} /><div className="underline"></div></Link>
                            </li>
                        </ul>
                    </div>
                    <div className="d-flex">
                        <div className="left-side d-flex">
                            <div className="modal fade" id="searchModalProducts" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content" style={{background: navbarTheme === 'light' ? 'white' : '#f0ebe3'}}>
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" id="exampleModalLabel"><LangUtil en={'Search Product'} az={'Məhsul Axtar'} /></h1>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <div className="d-flex flex-row w-100" style={{ height: "50px" }}>
                                                <input type="text" style={{ width: "100%", background:"#d7c6af", border:"none", outline:"none" }} className="border-1 ps-3 rounded-2" onChange={(e) => { setProductSearchText(e.target.value) }} />
                                            </div>
                                            <div className="row" style={{ maxHeight: "500px", overflowY: "scroll" }}>
                                                {products.filter(p => p.title.toLowerCase().includes(productSearchText.toLowerCase())).map((item, index) => (
                                                    <div data-bs-toggle='modal' onClick={() => { navigate(`/shop/${slugify(item.title, { lower: true })}`) }} key={index} data-bs-target='#newsSearchModal' className="col-12 my-2 d-flex justify-content-around align-items-center" style={{ cursor: "pointer" }}>
                                                        <div className="col-4">
                                                            <img src={item.img} alt="" width={"100%"} style={{ height: "10vh", objectFit: "cover" }} />
                                                        </div>
                                                        <div className="col-7">
                                                            <p>{item.title}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="btn" data-bs-toggle='modal' data-bs-target='#searchModalProducts'><IconContext.Provider value={{ size: "1.2em", color: navbarTheme === 'light' ? "white" : "black" }}><div><IoIosSearch /></div></IconContext.Provider></button>
                            <Link className="btn resetAllClass" to={authData && authData.isAuth ? '/accountdetails' : '/login'}><IconContext.Provider value={{ size: "1em", color: navbarTheme === 'light' ? "white" : "black" }}><div><FaUser /></div></IconContext.Provider></Link>
                            <Link className="btn resetAllClass" to={'/cart'}><IconContext.Provider value={{ size: "1.1em", color: navbarTheme === 'light' ? "white" : "black" }}><div><IoCartOutline /></div></IconContext.Provider></Link>
                            <Link className="btn resetAllClass" to={'/wishlist'}><IconContext.Provider value={{ size: "1.1em", color: navbarTheme === 'light' ? "white" : "black" }}><div><FaHeart /></div></IconContext.Provider></Link>
                        </div>
                        <button className="btn navbar-toggler resetAllClass" onClick={navbarToggle}>
                            <IconContext.Provider value={{ size: '1.5em', color: navbarTheme === 'light' ? "white" : "black" }}>
                                <div>{leftMenuOpen ? <IoCloseSharp /> : <IoIosMenu />}</div>
                            </IconContext.Provider>
                        </button>
                    </div>
                </div>
            </nav>
            <div className={`left-dd-navbar container-fluid ${leftMenuOpen ? 'navbar-dd-fade-anm-open' : 'd-none'}`} style={{ background: "white", position: "absolute", top: "10%", zIndex: "999" }} >
                <ul className="list-unstyled">
                    <li className="resetAllClass">
                        <Link onClick={resetAll} to={'/shop'} className="resetAllClass"><b><LangUtil  en={'Shop'} az={'MAĞAZA'}/></b></Link>
                    </li>
                    <hr />
                    <li className="resetAllClass">
                        <Link onClick={resetAll} to={'/about-us'} className="resetAllClass"><b><LangUtil en={'About'} az={'HAQQIMIZDA'} /></b></Link>
                    </li>
                    <hr />
                    <li className="resetAllClass">
                        <Link onClick={resetAll} to={'/news'} className="resetAllClass"><b><LangUtil en={'News'} az={'XƏBƏRLƏR'} /></b></Link>
                    </li>
                </ul>
            </div>
        </>

    )
}

export default Navbar