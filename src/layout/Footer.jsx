import { IconContext } from "react-icons";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

const logo = 'https://princetontec.com/wp-content/uploads/2023/12/Princeton-Tec-Primary-Logo-Black-RGB.png';

const Footer = () => {
    return (
        <div className="footer" style={{ overflow: "hidden" }} >
            <div className="breakdance-px breakdance-px-footer"></div>
            <div className="container-fluid footer-sec">
                <div className="container">
                    <footer className="py-5">
                        <div className="row">
                            <div className="col-12 col-xl-3 mb-3">
                                <Link to={'/'}><img src={logo} alt='logo' /></Link>
                                <ul className="my-3 links list-unstyled d-flex gap-3">
                                    <li><Link><IconContext.Provider value={{ size: "1.5em", color: "black" }}><FaYoutube /></IconContext.Provider></Link></li>
                                    <li><Link><IconContext.Provider value={{ size: "1.5em", color: "black" }}><FaFacebookF /></IconContext.Provider></Link></li>
                                    <li><Link><IconContext.Provider value={{ size: "1.5em", color: "black" }}><BsTwitterX /></IconContext.Provider></Link></li>
                                    <li><Link><IconContext.Provider value={{ size: "1.5em", color: "black" }}><FaInstagram /></IconContext.Provider></Link></li>
                                </ul>
                                <p>Princeton Tec 1777 Hylton Road Pennsauken, NJ 08110 1.800.257.9080</p>
                                <a href="#" className="text-decoration-none">support@princetontec.com</a>
                            </div>
                            <div className="col-12 col-xl-2 mb-3">
                                <h5 style={{ fontWeight: "bold" }}>Useful Links</h5>
                                <ul className="nav flex-column">
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Where to Buy</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Catalogs</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Affiliate Program</a></li>
                                </ul>
                            </div>
                            <div className="col-12 col-xl-2 mb-3">
                                <h5>Orders</h5>
                                <ul className="nav flex-column">
                                    <li className="nav-item mb-2"><button href="#" className="nav-link p-0 text-body-secondary" data-bs-toggle="modal" data-bs-target="#ContactUsModal">Contact US</button></li>
                                    <li className="nav-item mb-2"><Link to={'/support/warranty'} className="nav-link p-0 text-body-secondary">Warranty</Link></li>
                                    <li className="nav-item mb-2"><Link to={'/support/faq'} className="nav-link p-0 text-body-secondary">FAQ</Link></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Manuals</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Returns</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Shipping</a></li>
                                </ul>
                            </div>
                            <div className="col-xl-4 mb-3">
                                <h5>Join Out Mailing List:</h5>
                                <div className="d-flex joinusemailform flex-row w-100">
                                    <input id="newsletter1" type="text" className="form-control rounded-0" style={{ minWidth: "150px" }} placeholder="Email address" />
                                    <button className="btn btn-dark rounded-0" type="button">Subscribe</button>
                                </div>
                            </div>
                        </div>
                    </footer>
                    {/* modals */}
                    <div className="modal fade" id="ContactUsModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered modal-lg modal-fullscreen-lg-down">
                            <div className="modal-content">
                                <div className="modal-body">
                                    <div className="left-sec text-light d-flex flex-column justify-content-center">
                                        <p className="headertext">CONTACT US</p>
                                        <p className="fw-bold fs-4">Become a member and receive 10% off your first order</p>
                                        <input type="text" className="emailinput" placeholder="Enter your email address" />
                                        <p className="mt-5 fs-6 categoryheader">WHAT PRODUCTS ARE YOU INTERESTED IN?</p>
                                        <div className="category-checkbox d-flex flex-column">
                                            <div>
                                                <input type="checkbox" name="tactical" id="tactical" />
                                                <label htmlFor="tactical">TACTICAL</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" name="adventure" id="adventure" />
                                                <label htmlFor="adventure">ADVENTURE</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" name="industrial" id="industrial" />
                                                <label htmlFor="industrial">INDUSTRIAL</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" name="all" id="all" />
                                                <label htmlFor="all">ALL</label>
                                            </div>
                                        </div>
                                        <button>JOIN NOW</button>
                                    </div>
                                    <div className="right-sec">
                                        <button type="button" className="btn" data-bs-dismiss="modal">
                                            <IconContext.Provider value={{size:"2em", color:"white"}}><IoMdClose /></IconContext.Provider>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer