import { IconContext } from "react-icons";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const logo = 'https://princetontec.com/wp-content/uploads/2023/12/Princeton-Tec-Primary-Logo-Black-RGB.png';

const Footer = () => {
    return (
        <div className="footer">
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
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Order Status</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Warranty</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQ</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Manuals</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Returns</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Shipping</a></li>
                                </ul>
                            </div>
                            <div className="col-xl-4 mb-3">
                                <h5>Join Out Mailing List:</h5>
                                <div className="d-flex joinusemailform flex-column flex-sm-row w-100">
                                    <input id="newsletter1" type="text" className="form-control rounded-0" placeholder="Email address" />
                                    <button className="btn btn-dark rounded-0" type="button">Subscribe</button>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    )
}

export default Footer