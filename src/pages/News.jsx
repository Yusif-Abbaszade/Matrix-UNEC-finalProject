import { useContext, useEffect, useState } from "react";
import { NavbarContext } from "../context/NavbarContext";
import NewsCarousel from "../components/NewsCarousel";
import { IoIosSearch } from "react-icons/io";
import { motion } from "motion/react"
import { IconContext } from "react-icons";
import { RxCornerBottomRight, RxCornerTopLeft } from "react-icons/rx";
import SocialMediaCarousel from "../components/SocialMediaCarousel";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import slugify from "slugify";
const News = () => {
    const [navbarTheme, setNavbarTheme] = useContext(NavbarContext);
    const [searchText, setSearchText] = useState('');
    const navigate = useNavigate();
    const newsData = useSelector(p => p.news);
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
                        <button className="d-flex flex-row w-100" style={{ height: "50px" }} data-bs-toggle="modal" data-bs-target="#newsSearchModal">
                            <input type="text" style={{ width: "90%" }} className="border-0 ps-3" />
                            <button style={{ width: "10%" }} className="btn rounded-0 border-0"><IoIosSearch /></button>
                        </button>
                    </motion.div>
                </div>
            </div>
            <div className="blog-sec">
                {newsData.map((item, index) => (
                    <div className={`news-card row d-flex justify-content-center ${index % 2 === 1 ? "newscard-fright" : "newscard-fleft"} mb-5`} key={index}>
                        <motion.div initial={{ opacity: 0, translateX: index % 2 === 1 ? "-50%" : "50%" }} whileInView={{ opacity: 1, translateX: 0 }} transition={{ duration: 1, delay: .3 }} className="left-sec col-12 col-md-6 text-light d-flex flex-column justify-content-center px-5 mt-4">
                            <p className="fs-5">{item.creationDate}</p>
                            <p className="fs-3 fw-bolder">{item.title}</p>
                            <Link to={`/news/${slugify(item.title, { lower: true })}`} className="fw-bold mt-4">Read more</Link>
                        </motion.div>
                        <motion.div initial={{ opacity: 1, translateX: index % 2 === 1 ? "50%" : "-50%" }} whileInView={{ opacity: 1, translateX: 0 }} transition={{ duration: 1, delay: .3 }} className="right-sec col-12 col-md-6" style={{ height: "40vh", background: `url(${item.bgimg})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", zIndex: 999 }}></motion.div>
                    </div>
                ))}
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


            <div class="modal fade" id="newsSearchModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Search Blog</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div className="d-flex flex-row w-100" style={{ height: "50px" }}>
                                <input type="text" style={{ width: "100%" }} className="border-1 ps-3" onChange={(e) => { setSearchText(e.target.value) }} />
                            </div>
                            <div className="row">
                                {newsData.filter(p => p.title.toLowerCase().includes(searchText.toLowerCase())).map((item, index) => (
                                    <div onClick={()=>{navigate(`/news/${slugify(item.title, {lower:true})}`)}} data-bs-toggle='modal' data-bs-target='#newsSearchModal' className="col-12 my-2 d-flex justify-content-around align-items-center">
                                        <div className="col-4">
                                            <img src={item.bgimg} alt="" width={"100%"} style={{height:"10vh", objectFit:"cover"}} />
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
        </div>
    )
}

export default News