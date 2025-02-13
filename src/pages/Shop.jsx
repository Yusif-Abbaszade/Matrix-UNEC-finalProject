import React, { useContext, useEffect, useState } from 'react'
import { IconContext } from 'react-icons'
import { RxCornerBottomLeft, RxCornerTopRight } from 'react-icons/rx'
import { useSelector } from 'react-redux'
import ShopProductCard from '../components/ShopProductCard'
import { FaFilter, FaWater } from 'react-icons/fa'
import { NavbarContext } from '../context/NavbarContext'
import slugify from 'slugify'
import Slider from "react-slick";
import { CiSun, CiTimer } from 'react-icons/ci'
import { LiaFeatherAltSolid } from 'react-icons/lia'


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <img
            src="https://cdn-icons-png.flaticon.com/512/32/32213.png"
            className={className}
            // style={{ display: "block", top: "105%", right: "5%" }}
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
            // style={{ display: "block", top: "105%", left: "85%" }}
            onClick={onClick}
        />
    );
}



const Shop = () => {
    const [itemHovered, setItemHovered] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [cardsPerPage, setCardsPerPage] = useState(12);
    const [navbarTheme, setNavbarTheme] = useContext(NavbarContext);
    const data = useSelector(p => p.products);
    const lastcardindex = currentPage * cardsPerPage;
    const firscardindex = lastcardindex - cardsPerPage;
    let pages = [];
    const shopcard_settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    for (let i = 1; i <= Math.ceil(data.length / cardsPerPage); ++i) {
        pages.push(i)
    }

    useEffect(() => {
        [...document.querySelectorAll('.shopproductcard .imgsc img')].map((item, index) => {
            item.onmouseover = () => {
                setItemHovered(item.getAttribute('src'))
            }
            item.onmouseleave = () => {
                setItemHovered('')
            }
        })
    }, [])
    useEffect(() => {
        document.getElementsByTagName('body')[0].style.backgroundColor = '#f0ebe3';
        setNavbarTheme('black')
    }, [])
    return (
        <div>
            <div className="shop-sec">
                <div className="shop-header">
                    <div className='shoptxtmain d-flex'>
                        <IconContext.Provider value={{ size: "2.5em", className: "shop-RxCornerBottomLeft" }}>
                            <RxCornerBottomLeft />
                        </IconContext.Provider>
                        <p className='fs-1'>ALL PRODUCTS</p>
                        <IconContext.Provider value={{ size: "2.5em", className: "shop-RxCornerTopRight" }}>
                            <RxCornerTopRight />
                        </IconContext.Provider>
                    </div>
                    <div className="breakdance-px"></div>
                </div>
                <div className="d-flex justify-content-center" style={{ background: "#f0ebe3" }}>
                    <div className='d-flex flex-column align-items-center' style={{ width: "80%" }}>
                        <div className="filter-sec my-4 d-none d-lg-flex row g-4 w-100">
                            <div className="col-4 col-xl-2 d-flex flex-column">
                                <span className='fw-bold fs-5'>COLLECTION</span>
                                <select id="for-collection">
                                    <option value="ALL" defaultChecked>ALL</option>
                                    <option value="TACTICAL">TACTICAL</option>
                                    <option value="ADVENTURE">ADVENTURE</option>
                                    <option value="INDUSTRIAL">INDUSTRIAL</option>
                                </select>
                            </div>
                            <div className="col-4 col-xl-2 d-flex flex-column">
                                <span className='fw-bold fs-5'>ACTIVITY</span>
                                <select id="for-activity">
                                    <option value="ALL" defaultChecked>ALL</option>
                                    <option value="RUNNING">RUNNING</option>
                                    <option value="HIKING">HIKING</option>
                                    <option value="FISHING">FISHING</option>
                                    <option value="DIVING">DIVING</option>
                                    <option value="CAMPING">CAMPING</option>
                                </select>
                            </div>
                            <div className="col-4 col-xl-2 d-flex flex-column">
                                <span className='fw-bold fs-5'>CATEGORIES</span>
                                <select id="for-categories">
                                    <option value="all" defaultChecked>ALL</option>
                                    <option value="headlamps">HEADLAMPS</option>
                                    <option value="handhelds">HANDHELDS</option>
                                    <option value="helmet lights">HELMET LIGHTS</option>
                                    <option value="lanterns">LANTERNS</option>
                                    <option value="marker lights">MARKER LIGHTS</option>
                                    <option value="accessories">ACCESSORIES</option>
                                </select>
                            </div>
                            <div className="col-4 col-xl-2 d-flex flex-column">
                                <span className='fw-bold fs-5'>WATERPROOF</span>
                                <select id="for-waterproof">
                                    <option value="all" defaultChecked>ALL</option>
                                    <option value="IPX8">IPX8</option>
                                    <option value="IPX7">IPX7</option>
                                    <option value="IPX6">IPX6</option>
                                    <option value="IPX4">IPX4</option>
                                    <option value="IPX68">IPX68</option>
                                </select>
                            </div>
                            <div className="col-4 col-xl-2 d-flex flex-column">
                                <span className='fw-bold fs-5'>COLOR</span>
                                <select id="for-color">
                                    <option value="all">ALL</option>
                                    <option value="black">BLACK</option>
                                    <option value="white">WHITE</option>
                                    <option value="green">GREEN</option>
                                    <option value="yellow">YELLOW</option>
                                </select>
                            </div>
                            <div className="col-4 col-xl-2 d-flex flex-column">
                                <span className='fw-bold fs-5'>SORT BY</span>
                                <select id="for-sortby">
                                    <option value="default">DEFAULT</option>
                                </select>
                            </div>
                        </div>
                        <div className="filter-sec-for-sml d-lg-none w-100 d-flex justify-content-between btn" data-bs-toggle="modal" data-bs-target="#FilterModal" style={{ border: "2px solid #d7c6af", padding: "12px" }}>
                            <span className='fs-3 fw-bold'>FILTER PRODUCTS</span>
                            <div className="position-relative">
                                <IconContext.Provider value={{ size: "2em" }}>
                                    <FaFilter />
                                </IconContext.Provider>
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill text-dark" style={{ background: "#d7c6af" }}>
                                    0
                                </span>
                            </div>

                        </div>
                        <div className="products-con row w-100">
                            {data.slice(firscardindex, lastcardindex).map((item, index) => (
                                <div key={index} className="col-12 col-md-6 col-lg-4 col-xxl-3 d-flex justify-content-center my-2">
                                    <ShopProductCard itemHovered={itemHovered} title={item.title} img={item.img} imghover={item.imghover} price={item.price} color={item.color} props={item.props} uuid={item.uuid} />


                                    <div className="modal fade" id={`shopcardmodal-${slugify(item.uuid, { lower: true })}`} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true" >
                                        <div className="modal-dialog modal-lg modal-dialog-centered">
                                            <div className="modal-content" style={{ background: "#ebe3d6" }}>
                                                <div className="modal-header" style={{ borderBottom: "none" }}> 
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                                </div>
                                                <div className="modal-body d-flex flex-row">
                                                    <div className="left-sec p-5 w-50">
                                                        <Slider {...shopcard_settings}>
                                                            <div style={{ width: "100%" }}>
                                                                <img src={item.img} width="100%" alt="" />
                                                            </div>
                                                            <div style={{ width: "100%" }}>
                                                                <img src={item.imghover} width="100%" alt="" />
                                                            </div>
                                                        </Slider>
                                                    </div>
                                                    <div className="right-sec w-50 ps-4 pe-3">
                                                        <p className='fs-2 fw-bold'>{item.title}</p>
                                                        <p className='fs-5'>${item.price}</p>
                                                        <p className='fs-6'>{item.desc}</p>
                                                        <div className='d-flex flex-row gap-3 align-items-center'>
                                                            <span className='fs-6 fw-bold'>Color : </span>
                                                            <div className='rounded-5' style={{ width: "25px", height: "25px", background: item.color, border:"1px solid black" }}></div>
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
                                                        <button className='btn shopcard-modal-addtocart-btn fs-5 fw-bold'>Add to cart</button>
                                                    </div>
                                                </div>
                                                <div className="modal-footer d-flex justify-content-center mb-4" style={{ borderTop: "none" }}>
                                                    <button className='btn shopcard-modal-moredet-btn fs-5 fw-bold'>View Full Details</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            ))}
                        </div>
                        <div className="pagination my-4 container justify-content-end">
                            {pages.map(item => (
                                <button key={item} onClick={() => { setCurrentPage(item) }} className='btn fs-5' style={{ color: currentPage === item ? '#b49360' : 'black' }}>{item}</button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* modals */}
            <div className="modal fade p-0 m-0" id="FilterModal" tabIndex={-1} aria-labelledby="exampleModalLabel" style={{ width: "100%" }}>
                <div className="modal-dialog modal-fullscreen" style={{ width: "100%" }}>
                    <div className="modal-content" style={{ background: '#f0ebe3' }}>
                        <div className="modal-header" style={{ borderBottom: "none" }}>
                            <button type="button" className="btn-close fs-2" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body d-flex justify-content-center align-items-center">
                            <div className='row justify-content-center align-items-center w-75 g-2'>
                                <div className="col-12 col-md-6 d-flex flex-column selectionss">
                                    <span className='fw-bold fs-5'>COLLECTION</span>
                                    <select id="for-collection">
                                        <option value="ALL" defaultChecked>ALL</option>
                                        <option value="TACTICAL">TACTICAL</option>
                                        <option value="ADVENTURE">ADVENTURE</option>
                                        <option value="INDUSTRIAL">INDUSTRIAL</option>
                                    </select>
                                </div>
                                <div className="col-12 col-md-6 d-flex flex-column selectionss ">
                                    <span className='fw-bold fs-5'>ACTIVITY</span>
                                    <select id="for-activity">
                                        <option value="ALL" defaultChecked>ALL</option>
                                        <option value="RUNNING">RUNNING</option>
                                        <option value="HIKING">HIKING</option>
                                        <option value="FISHING">FISHING</option>
                                        <option value="DIVING">DIVING</option>
                                        <option value="CAMPING">CAMPING</option>
                                    </select>
                                </div>
                                <div className="col-12 col-md-6 d-flex flex-column selectionss">
                                    <span className='fw-bold fs-5'>CATEGORIES</span>
                                    <select id="for-categories">
                                        <option value="all" defaultChecked>ALL</option>
                                        <option value="headlamps">HEADLAMPS</option>
                                        <option value="handhelds">HANDHELDS</option>
                                        <option value="helmet lights">HELMET LIGHTS</option>
                                        <option value="lanterns">LANTERNS</option>
                                        <option value="marker lights">MARKER LIGHTS</option>
                                        <option value="accessories">ACCESSORIES</option>
                                    </select>
                                </div>
                                <div className="col-12 col-md-6 d-flex flex-column selectionss">
                                    <span className='fw-bold fs-5'>WATERPROOF</span>
                                    <select id="for-waterproof">
                                        <option value="all" defaultChecked>ALL</option>
                                        <option value="IPX8">IPX8</option>
                                        <option value="IPX7">IPX7</option>
                                        <option value="IPX6">IPX6</option>
                                        <option value="IPX4">IPX4</option>
                                        <option value="IPX68">IPX68</option>
                                    </select>
                                </div>
                                <div className="col-12 col-md-6 d-flex flex-column selectionss">
                                    <span className='fw-bold fs-5'>COLOR</span>
                                    <select id="for-color">
                                        <option value="all">ALL</option>
                                        <option value="black">BLACK</option>
                                        <option value="white">WHITE</option>
                                        <option value="green">GREEN</option>
                                        <option value="yellow">YELLOW</option>
                                    </select>
                                </div>
                                <div className="col-12 col-md-6 d-flex flex-column selectionss">
                                    <span className='fw-bold fs-5'>SORT BY</span>
                                    <select id="for-sortby">
                                        <option value="default">DEFAULT</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Shop