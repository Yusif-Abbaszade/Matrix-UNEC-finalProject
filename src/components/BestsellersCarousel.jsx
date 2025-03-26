import Slider from "react-slick";
import { useContext, useEffect, useState } from "react";
import ProductCardForHome from "./ProductCardForHome";
import { useSelector } from "react-redux";
import slugify from "slugify";
import { IconContext } from "react-icons";
import { LiaFeatherAltSolid } from "react-icons/lia";
import { FaHeart, FaRegHeart, FaWater } from "react-icons/fa";
import { CiSun, CiTimer } from "react-icons/ci";
import { useCart } from "react-use-cart";
import ShopProductCard from "./ShopProductCard";
import { useNavigate } from "react-router-dom";
import { WishlistContext } from "../context/WishlistContext";


function SampleNextArrow(props) {
    const { className, style, onClick } = props;

    return (
        <img
            src="https://cdn-icons-png.flaticon.com/512/32/32213.png"
            className={className}
            style={{ display: "block", top: "105%", right: "5%" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <img
            src="https://cdn-icons-png.flaticon.com/512/271/271220.png"
            className={className}
            style={{ display: "block", top: "105%", left: "85%" }}
            onClick={onClick}
        />
    );
}


function SampleNextArrowForModal(props) {
    const { className, style, onClick } = props;
    return (
        <img
            src="https://cdn-icons-png.flaticon.com/512/32/32213.png"
            className={className}
            onClick={onClick}
        />
    );
}

function SamplePrevArrowForModal(props) {
    const { className, style, onClick } = props;
    return (
        <img
            src="https://cdn-icons-png.flaticon.com/512/271/271220.png"
            className={className}
            onClick={onClick}
        />
    );
}


const BestsellersCarousel = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const [updateCount, setUpdateCount] = useState(0);
    const [slideCount, setSlideCount] = useState(3);
    const [itemHovered, setItemHovered] = useState('');
    const { inWishlist, removeWishlistItem, addWishlistItem } = useContext(WishlistContext);
    const data = useSelector(p => p.products);
    const navigate = useNavigate();
    const { addItem } = useCart();
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToScroll: 1,
        initialSlide: 1,
        afterChange: () => setUpdateCount(updateCount + 1),
        beforeChange: (current, next) => setSlideIndex(next),
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 5000,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                }
            },
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 1220,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 840,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }
    const shopcard_settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrowForModal />,
        prevArrow: <SamplePrevArrowForModal />
    };
    useEffect(() => {
        if (window.innerWidth <= 840) { setSlideCount(8) }
        else if (window.innerWidth <= 1220) { setSlideCount(7) }
        else if (window.innerWidth <= 1600) { setSlideCount(6) }
        else { setSlideCount(5) }
    }, [window.innerWidth])


    useEffect(() => {
        [...document.querySelectorAll('.productcardforhome .imgsc img')].map((item, index) => {
            item.onmouseover = () => {
                setItemHovered(item.getAttribute('src'))
            }
            item.onmouseleave = () => {
                setItemHovered('')
            }
        })
    }, [])




    return (
        <>
            <div className="slider-container container-fluid" style={{ width: "100%", margin: "0", padding: "0" }}>
                <Slider {...settings} className="sldsc" draggable={true}>
                    {data.filter(item => item.bestsellers).map((item, index) => (
                        <ProductCardForHome key={index} title={item.title} price={item.price} img={item.img} imghover={item.imghover} itemHovered={itemHovered} color={item.color} desc={item.desc} props={item.props} uuid={item.uuid} />
                    ))}
                </Slider>
                <div className="progress-sc d-flex flex-row justify-content-center">
                    <div className="progress" style={{ height: "5px", marginTop: "19px", width: "78%" }} role="progressbar" aria-label="Basic example" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>
                        <div className="progress-bar" style={{ background: "#b49360", width: `${(slideIndex + 1) * (100 / slideCount)}%` }} />
                    </div>
                    <div className="buttons" style={{ width: "10%" }}>
                    </div>
                </div>
            </div>

            {/* Modals  */}
            {data.filter(item => item.bestsellers).map((item, index) => (
                <div key={index} className="modal fade" id={`shopcardmodal-${slugify(item.uuid, { lower: true })}`} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true" >
                    <div className="modal-dialog modal-lg modal-dialog-centered">
                        <div className="modal-content" style={{ background: "#ebe3d6" }}>
                            <div className="modal-header" style={{ borderBottom: "none" }}>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body shopcard-about-modal-body d-flex">
                                <div className="left-sec p-5">
                                    <Slider {...shopcard_settings}>
                                        <div style={{ width: "100%" }}>
                                            <img src={item.img} width="100%" alt="" />
                                        </div>
                                        <div style={{ width: "100%" }}>
                                            <img src={item.imghover} width="100%" alt="" />
                                        </div>
                                    </Slider>
                                </div>
                                <div className="right-sec ps-4 pe-3">
                                    <div className='d-flex flex-row justify-content-between'>
                                        <span className='fs-2 fw-bold'>{item.title}</span>
                                        <button className='btn' onClick={() => { inWishlist(item.uuid) ? removeWishlistItem(item.uuid) : addWishlistItem({ ...item, id: item.uuid }) }}>
                                            <IconContext.Provider value={{ size: "2em", color: "red", className: "" }}>
                                                {inWishlist(item.uuid) ? <FaHeart /> : <FaRegHeart />}
                                            </IconContext.Provider>
                                        </button>
                                    </div>
                                    <p className='fs-5'>${item.price}</p>
                                    <p className='fs-6'>{item.desc}</p>
                                    <div className='d-flex flex-row gap-3 align-items-center'>
                                        <span className='fs-6 fw-bold'>Color : </span>
                                        <div className='rounded-5' style={{ width: "25px", height: "25px", background: item.color, border: "1px solid black" }}></div>
                                    </div>
                                    <ul className="list-unstyled d-flex justify-content-between text-center mt-4">
                                        <li>
                                            <IconContext.Provider value={{ color: "#88782D", size: "2em" }}>
                                                <CiSun />
                                            </IconContext.Provider>
                                            <p className="counts m-0 fw-bold">{item.props.lumen}</p>
                                            <p className=''>Lumens</p>
                                        </li>
                                        <li>
                                            <IconContext.Provider value={{ color: "#88782D", size: "2em" }}>
                                                <CiTimer />
                                            </IconContext.Provider>
                                            <p className="counts m-0 fw-bold">{item.props.timestamp}</p>
                                            <p>Run Time</p>
                                        </li>
                                        <li>
                                            <IconContext.Provider value={{ color: "#88782D", size: "2em" }}>
                                                <FaWater />
                                            </IconContext.Provider>
                                            <p className="counts m-0 fw-bold">{item.props.waterproof}</p>
                                            <p>Water Resistant</p>
                                        </li>
                                        <li>
                                            <IconContext.Provider value={{ color: "#88782D", size: "2em" }}>
                                                <LiaFeatherAltSolid />
                                            </IconContext.Provider>
                                            <p className="counts m-0 fw-bold">{item.props.weight}</p>
                                            <p>Weight</p>
                                        </li>
                                    </ul>
                                    <button onClick={() => { addItem({ ...item, id: item.uuid }, 1) }} className='btn shopcard-modal-addtocart-btn fs-5 fw-bold'>Add to cart</button>
                                </div>
                            </div>
                            <div className="modal-footer d-flex justify-content-center mb-4" style={{ borderTop: "none" }}>
                                <button className='btn shopcard-modal-moredet-btn fs-5 fw-bold' onClick={() => { navigate(`/shop/${slugify(item.title, { lower: true })}`) }} data-bs-toggle='modal' data-bs-target={`#shopcardmodal-${slugify(item.uuid, { lower: true })}`}>View Full Details</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default BestsellersCarousel