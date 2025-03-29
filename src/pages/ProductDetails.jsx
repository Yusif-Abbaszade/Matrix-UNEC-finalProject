import { useContext, useEffect, useState } from "react";
import { NavbarContext } from "../context/NavbarContext";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { GiUsaFlag } from "react-icons/gi";
import { motion } from "motion/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { IconContext } from "react-icons";
import { useSelector } from "react-redux";
import slugify from "slugify";
import { useCart } from "react-use-cart";
import { LiaFeatherAltSolid } from "react-icons/lia";
import { FaHeart, FaRegHeart, FaWater } from "react-icons/fa";
import { CiSun, CiTimer } from "react-icons/ci";
import BestsellersCarousel from "../components/BestsellersCarousel";
import { WishlistContext } from "../context/WishlistContext";
import LangUtil from "../utils/LangUtil";

const ProductDetails = () => {
    const [navbarTheme, setNavbarTheme] = useContext(NavbarContext);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const product = useSelector(p => p.products)
    const { inWishlist, removeWishlistItem, addWishlistItem } = useContext(WishlistContext);
    const { productslug } = useParams();
    const data = product.find(i => slugify(i.title, { lower: true }) === productslug);
    useEffect(() => {
        document.getElementsByTagName('body')[0].style.background = '#F0EBE3'
        setNavbarTheme('dark')
    }, [])
    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
        addItem
    } = useCart();
    return (
        <div className="d-flex productdetpage justify-content-center align-items-center mt-5 flex-column" style={{overflow: "hidden"}}>
            <div className="container row d-flex justify-content-between w-100">
                <motion.div className="col-12 col-xl-6" initial={{ opacity: 0, translateX: "-350px" }} whileInView={{ opacity: 1, translateX: 0, translateY: 0 }} transition={{ duration: 1 }}>
                    <Swiper
                        style={{
                            '--swiper-navigation-color': '#000',
                            '--swiper-pagination-color': '#000',
                        }}
                        spaceBetween={10}
                        navigation={true}
                        thumbs={{ swiper: thumbsSwiper }}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper2"
                    >
                        <SwiperSlide>
                            <img src={data.img} style={{ background: "#EBE3D6" }} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={data.imghover} style={{ background: "#EBE3D6" }} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={data.img} style={{ background: "#EBE3D6" }} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={data.imghover} style={{ background: "#EBE3D6" }} />
                        </SwiperSlide>
                    </Swiper>
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        spaceBetween={10}
                        slidesPerView={4}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <img src={data.img} style={{ background: "#EBE3D6" }} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={data.imghover} style={{ background: "#EBE3D6" }} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={data.img} style={{ background: "#EBE3D6" }} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={data.imghover} style={{ background: "#EBE3D6" }} />
                        </SwiperSlide>
                    </Swiper>
                </motion.div>
                <motion.div initial={{ opacity: 0, translateX: "350px" }} whileInView={{ opacity: 1, translateX: 0, translateY: 0 }} transition={{ duration: 1 }} className="col-12 col-xl-6">
                    <p className="fs-6 fw-bold"><IconContext.Provider value={{ size: "2em", color: "black", className: "me-3" }}><GiUsaFlag /></IconContext.Provider>MADE IN USA</p>
                    <div className='d-flex flex-row justify-content-between'>
                        <span className='fs-2 fw-bold'>{data.title}</span>
                        <button className='btn' onClick={() => { inWishlist(data.uuid) ? removeWishlistItem(data.uuid) : addWishlistItem({ ...data, id: data.uuid }) }}>
                            <IconContext.Provider value={{ size: "2em", color: "red", className: "" }}>
                                {inWishlist(data.uuid) ? <FaHeart /> : <FaRegHeart />}
                            </IconContext.Provider>
                        </button>
                    </div>
                    <p>{data.desc}</p>
                    <p className="fs-5 fw-bold">${data.price}</p>
                    <p><span className="fw-bold">Color</span> : {data.color}</p>
                    <div className="rounded-5" style={{ width: "25px", height: "25px", background: data.color, border: "1px solid black" }}></div>
                    <button onClick={() => { addItem({ ...data, id: data.uuid }, 1) }} className='btn my-4 shopcard-modal-addtocart-btn fs-5 fw-bold'>Add to cart</button>
                    <p className="fw-bolder">Details : </p>
                    <p><span className="fw-bold">Everyday-Use Headlamp.</span> Known for its simplicity and user-friendliness, the Princeton Tec Refuel features only one mode, a dimmable white flood beam. At 300 lumens, this headlamp is easily and intuitively activated, deactivated, and dimmed with a single large, easy-to-find button, and with its asymmetrical single arm bracket, the headlamp is effortlessly positioned to direct light wherever needed. Refuel also has an extremely easy-open battery door, making battery swaps easier than ever.</p>
                    <ul className="list-unstyled d-flex justify-content-between my-5">
                        <li>
                            <IconContext.Provider value={{ color: "#B49360", size: "3em" }}>
                                <CiSun />
                            </IconContext.Provider>
                            <p className="counts">{data.props.lumen}</p>
                            <p>Lumens</p>
                        </li>
                        <li>
                            <IconContext.Provider value={{ color: "#B49360", size: "3em" }}>
                                <CiTimer />
                            </IconContext.Provider>
                            <p className="counts">{data.props.timestamp}</p>
                            <p><LangUtil en={'Run Time'} az={'İşləmə Vaxtı'} /></p>
                        </li>
                        <li>
                            <IconContext.Provider value={{ color: "#B49360", size: "3em" }}>
                                <FaWater />
                            </IconContext.Provider>
                            <p className="counts">{data.props.waterproof}</p>
                            <p><LangUtil en={'Water Resistant'} az={'Suya Davamlılıq'} /></p>
                        </li>
                        <li>
                            <IconContext.Provider value={{ color: "#B49360", size: "3em" }}>
                                <LiaFeatherAltSolid />
                            </IconContext.Provider>
                            <p className="counts">{data.props.weight}</p>
                            <p><LangUtil en={'Weight'} az={'Çəki'} /></p>
                        </li>
                    </ul>
                </motion.div>
            </div>
            <motion.div className="best-sellers-sec" initial={{ opacity: 0, translateY: "400px" }} whileInView={{ opacity: 1, translateX: 0, translateY: 0 }} transition={{ duration: 1 }}>
                <div className="breakdance-px breakdance-px-bestsellers" />
                <div className="row best-sellers-products">
                    <p className="fw-bold d-flex align-items-center gap-3 h1 text-dark ms-5"><span style={{ color: "#b49360", fontWeight: "bold" }}><LangUtil en={'RELATED'} az={'ƏLAQƏLİ'} /> </span> <LangUtil en={'PRODUCTS'} az={'MƏHSULLAR'} /></p>
                    <BestsellersCarousel />
                </div>
            </motion.div>
        </div>
    )
}

export default ProductDetails