import { useContext, useEffect } from "react";
import { NavbarContext } from "../context/NavbarContext";
import NewsCarousel from "../components/NewsCarousel";
import { IoIosSearch } from "react-icons/io";
import { motion } from "motion/react"
import { IconContext } from "react-icons";
import { RxCornerBottomRight, RxCornerTopLeft } from "react-icons/rx";
import SocialMediaCarousel from "../components/SocialMediaCarousel";

const News = () => {
    const [navbarTheme, setNavbarTheme] = useContext(NavbarContext);
    useEffect(() => {
        document.getElementsByTagName('body')[0].style.backgroundColor = '#000';
        setNavbarTheme('light');
    }, [])
    return (
        <div className="news-page w-100 position-realtive">
            <div className="header d-flex justify-content-center align-items-center pb-5">
                <div className="news-bgimg-overlay position-absolute"></div>
                <div className="texts container row pb-5 text-light align-items-center">
                    <motion.div initial={{ opacity: 0, translateX: "-300px", translateY: "-200px" }} whileInView={{ opacity: 1, translateX: 0, translateY: 0 }} transition={{ duration: 1 }} className="col-12 col-xl-6">
                        <h1 className="text-center" style={{ fontSize: "55px", fontWeight: "bolder" }}>News</h1>
                        <p className="fs-5">
                            Stay up to date on Princeton Tec’s products and community involvement; Explore our experts’ thoughts on lighting products, and learn from our informational newsletters.
                        </p>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, translateX: "300px", translateY: "200px" }} whileInView={{ opacity: 1, translateX: 0, translateY: 0 }} transition={{ duration: 1 }} className="col-12 col-xl-6 searchsec">
                        <div className="d-flex flex-row" style={{ height: "50px" }}>
                            <input type="text" style={{ width: "90%" }} className="border-0 ps-3" />
                            <button style={{ width: "10%" }} className="btn rounded-0 border-0"><IoIosSearch /></button>
                        </div>
                    </motion.div>
                </div>
            </div>
            <div className="blog-sec">
                <div className="news-card row d-flex justify-content-center newscard-fleft mb-5">
                    <motion.div initial={{ opacity: 0, translateX: "50%" }} whileInView={{ opacity: 1, translateX: 0 }} transition={{ duration: 1, delay: .5 }} className="left-sec col-12 col-md-6 text-light d-flex flex-column justify-content-center px-5 mt-4">
                        <p className="fs-5">July 25, 2024</p>
                        <p className="fs-3 fw-bolder">RGB in the Wild: How Red, Green, and Blue Light Help Hunters</p>
                        <p className="fw-bold mt-4">Read more</p>
                    </motion.div>
                    <motion.div initial={{ opacity: 1, translateX: "-50%" }} whileInView={{ opacity: 1, translateX: 0 }} transition={{ duration: 1, delay: .5 }} className="right-sec col-12 col-md-6" style={{ height: "40vh", background: "url(https://princetontec.com/wp-content/uploads/2024/06/Dialed-In-Hunter-1453-1024x683.jpg)", backgroundSize: "cover", backgroundPosition: "center", zIndex: 999 }}></motion.div>
                </div>
                <div className="news-card row d-flex justify-content-center newscard-fright mb-5">
                    <motion.div initial={{ opacity: 0, translateX: "-50%" }} whileInView={{ opacity: 1, translateX: 0 }} transition={{ duration: 1, delay: .5 }} className="left-sec col-12 col-md-6 text-light d-flex flex-column justify-content-center px-5 mt-4">
                        <p className="fs-5">July 25, 2024</p>
                        <p className="fs-3 fw-bolder">RGB in the Wild: How Red, Green, and Blue Light Help Hunters</p>
                        <p className="fw-bold mt-4">Read more</p>
                    </motion.div>
                    <motion.div initial={{ opacity: 1, translateX: "50%" }} whileInView={{ opacity: 1, translateX: 0 }} transition={{ duration: 1, delay: .5 }} className="right-sec col-12 col-md-6" style={{ height: "40vh", background: "url(https://princetontec.com/wp-content/uploads/2024/06/Dialed-In-Hunter-1453-1024x683.jpg)", backgroundSize: "cover", backgroundPosition: "center", zIndex: 999 }}></motion.div>
                </div>
                <div className="news-card row d-flex justify-content-center newscard-fleft mb-5">
                    <motion.div initial={{ opacity: 0, translateX: "50%" }} whileInView={{ opacity: 1, translateX: 0 }} transition={{ duration: 1, delay: .5 }} className="left-sec col-12 col-md-6 text-light d-flex flex-column justify-content-center px-5 mt-4">
                        <p className="fs-5">July 25, 2024</p>
                        <p className="fs-3 fw-bolder">RGB in the Wild: How Red, Green, and Blue Light Help Hunters</p>
                        <p className="fw-bold mt-4">Read more</p>
                    </motion.div>
                    <motion.div initial={{ opacity: 1, translateX: "-50%" }} whileInView={{ opacity: 1, translateX: 0 }} transition={{ duration: 1, delay: .5 }} className="right-sec col-12 col-md-6" style={{ height: "40vh", background: "url(https://princetontec.com/wp-content/uploads/2024/06/Dialed-In-Hunter-1453-1024x683.jpg)", backgroundSize: "cover", backgroundPosition: "center", zIndex: 999 }}></motion.div>
                </div>
                <div className="news-card row d-flex justify-content-center newscard-fright mb-5">
                    <motion.div initial={{ opacity: 0, translateX: "-50%" }} whileInView={{ opacity: 1, translateX: 0 }} transition={{ duration: 1, delay: .5 }} className="left-sec col-12 col-md-6 text-light d-flex flex-column justify-content-center px-5 mt-4">
                        <p className="fs-5">July 25, 2024</p>
                        <p className="fs-3 fw-bolder">RGB in the Wild: How Red, Green, and Blue Light Help Hunters</p>
                        <p className="fw-bold mt-4">Read more</p>
                    </motion.div>
                    <motion.div initial={{ opacity: 1, translateX: "50%" }} whileInView={{ opacity: 1, translateX: 0 }} transition={{ duration: 1, delay: .5 }} className="right-sec col-12 col-md-6" style={{ height: "40vh", background: "url(https://princetontec.com/wp-content/uploads/2024/06/Dialed-In-Hunter-1453-1024x683.jpg)", backgroundSize: "cover", backgroundPosition: "center", zIndex: 999 }}></motion.div>
                </div>
            </div>
            <div className="social-media-sec d-flex flex-column justify-content-center align-items-center">
                <div className="main-link">
                    <IconContext.Provider value={{ color: "white", size: "3em", className: "social-RxCornerTopLeft", style: { marginBottom: "40px" } }} >
                        <RxCornerTopLeft />
                    </IconContext.Provider>
                    <a href="#" className="text-decoration-none text-light fw-bold followussocialmedialink">FOLLOW US ON SOCIAL MEDIA</a>
                    <IconContext.Provider value={{ color: "white", size: "3em", className: "social-RxCornerBottomRight", style: { marginTop: "35px" } }}>
                        <RxCornerBottomRight />
                    </IconContext.Provider>
                </div>
                <SocialMediaCarousel />
            </div>
        </div>
    )
}

export default News