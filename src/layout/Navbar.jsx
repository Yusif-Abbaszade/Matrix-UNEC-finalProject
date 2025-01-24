import { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import { FaUser } from "react-icons/fa";
import { IoIosArrowDown, IoIosMenu, IoIosSearch } from "react-icons/io";
import { IoCartOutline, IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const logo = 'https://princetontec.com/wp-content/uploads/2023/12/Princeton-Tec-Logo-Mark-White-RGB.svg';

const Navbar = () => {

    const [leftMenuOpen, setLeftMenuOpen] = useState(false)
    const [shopddMenuOpen, setshopddMenuOpen] = useState(false)


    const navbarToggle = () => {
        leftMenuOpen ? setLeftMenuOpen(false) : setLeftMenuOpen(true)
    }

    const shopddToggle = () => {
        shopddMenuOpen ? setshopddMenuOpen(false) : setshopddMenuOpen(true)
    }


    return (
        <>
            <nav className="navbar navbar-expand-lg bg-none">
                <div className="container">
                    <Link to={'/'} style={{ width: "75px" }}><img src={logo} alt="" width={"100%"} /></Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-5">
                            <li className="d-flex">
                                <Link to={'/'}>Shop <div className="underline"></div></Link>
                                <button className="" onClick={shopddToggle} style={{ background: "none", border: "none", marginBottom: "10px" }}>
                                    <IconContext.Provider value={{ size: "1.4em", color: "white", className: "" }}>
                                        <IoIosArrowDown />
                                    </IconContext.Provider>
                                </button>
                            </li>
                            <li>
                                <Link to={'/'}>About<div className="underline"></div></Link>
                            </li>
                            <li>
                                <Link to={'/'}>News<div className="underline"></div></Link>
                            </li>
                        </ul>
                    </div>
                    <div className="d-flex">
                        <div className="left-side d-flex">
                            {/* {Bura Search modal gelecek} */}
                            <button className="btn"><IconContext.Provider value={{ size: "1.4em", color: "white" }}><div><IoIosSearch /></div></IconContext.Provider></button>
                            <Link className="btn" to={'/'}><IconContext.Provider value={{ size: "1em", color: "white" }}><div><FaUser /></div></IconContext.Provider></Link>
                            <Link className="btn" to={'/'}><IconContext.Provider value={{ size: "1.4em", color: "white" }}><div><IoCartOutline /></div></IconContext.Provider></Link>
                        </div>
                        <button className="btn navbar-toggler" onClick={navbarToggle}>
                            <IconContext.Provider value={{ size: '1.5em', color: "white" }}>
                                <div>{leftMenuOpen ? <IoCloseSharp /> : <IoIosMenu />}</div>
                            </IconContext.Provider>
                        </button>
                    </div>
                </div>
            </nav>
            <div className={`left-dd-navbar container-fluid ${leftMenuOpen ? 'navbar-dd-fade-anm-open' : 'd-none'}`} style={{ background: "white", position: "absolute", top: "10%", zIndex: "1" }} >
                <ul className="list-unstyled">
                    <li>
                        <div className="d-flex">
                            <Link to={'/'}><b>Shop</b></Link>
                            <button className="accordion-button" style={{ fontSize: "18px" }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <IconContext.Provider value={{}}><IoIosArrowDown /></IconContext.Provider>
                            </button>
                        </div>
                        <div className="accordion left-dd-shop-dd" id="accordionExample">
                            <div className="accordion-item border-0">
                                <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <h6>COLLECTIONS</h6>
                                        <ul>
                                            <li>
                                                <Link>example</Link>
                                            </li>
                                            <li>
                                                <Link>example</Link>
                                            </li>
                                            <li>
                                                <Link>example</Link>
                                            </li>
                                        </ul>
                                        <h6>ACTIVITIES</h6>
                                        <ul>
                                            <li>
                                                <Link>example</Link>
                                            </li>
                                            <li>
                                                <Link>example</Link>
                                            </li>
                                            <li>
                                                <Link>example</Link>
                                            </li>
                                            <li>
                                                <Link>example</Link>
                                            </li>
                                            <li>
                                                <Link>example</Link>
                                            </li>
                                        </ul>
                                        <h6>CATEGORIES</h6>
                                        <ul>
                                            <li>
                                                <Link>example</Link>
                                            </li>
                                            <li>
                                                <Link>example</Link>
                                            </li>
                                            <li>
                                                <Link>example</Link>
                                            </li>
                                            <li>
                                                <Link>example</Link>
                                            </li>
                                            <li>
                                                <Link>example</Link>
                                            </li>
                                            <li>
                                                <Link>example</Link>
                                            </li>
                                            <Link to={'/'} className="fw-bold fs-6">VIEW ALL PRODUCTS</Link>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>




                    </li>
                    <hr />
                    <li>
                        <Link to={'/'}><b>About</b></Link>
                    </li>
                    <hr />
                    <li>
                        <Link to={'/'}><b>News</b></Link>
                    </li>
                </ul>
            </div>
            <div className={`shop-dd-menu ${shopddMenuOpen ? 'navbar-dd-fade-anm-open' : 'd-none'} `}>
                <div className="col-5 links d-flex justify-content-around">
                    <div className="col-1"></div>
                    <div className="col-3">
                        <legend className="fs-6" style={{ fontWeight: "bold" }}>COLLECTIONS</legend>
                        <ul>
                            <li>
                                <Link>example</Link>
                            </li>
                            <li>
                                <Link>example</Link>
                            </li>
                            <li>
                                <Link>example</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-3">
                        <legend className="fs-6" style={{ fontWeight: "bold" }}>ACTIVITIES</legend>
                        <ul>
                            <li>
                                <Link>example</Link>
                            </li>
                            <li>
                                <Link>example</Link>
                            </li>
                            <li>
                                <Link>example</Link>
                            </li>
                            <li>
                                <Link>example</Link>
                            </li>
                            <li>
                                <Link>example</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-3">
                        <legend className="fs-6" style={{ fontWeight: "bold" }}>CATEGORIES</legend>
                        <ul>
                            <li>
                                <Link>example</Link>
                            </li>
                            <li>
                                <Link>example</Link>
                            </li>
                            <li>
                                <Link>example</Link>
                            </li>
                            <li>
                                <Link>example</Link>
                            </li>
                            <li>
                                <Link>example</Link>
                            </li>
                            <li>
                                <Link>example</Link>
                            </li>
                            <li>
                                <Link>example</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="line-down me-5"></div>
                <div className="col-5 right-side">
                    <Link to={'/'} className="col-5 link1"></Link>
                    <Link to={'/'} className="col-5 link2"></Link>
                    <div className="col-2"></div>
                </div>
            </div>
        </>

    )
}

export default Navbar