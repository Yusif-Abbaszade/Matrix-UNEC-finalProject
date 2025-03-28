import React, { useContext, useEffect, useState } from 'react'
import { IconContext } from 'react-icons'
import { RxCornerBottomLeft, RxCornerTopRight } from 'react-icons/rx'
import { useSelector } from 'react-redux'
import ShopProductCard from '../components/ShopProductCard'
import { FaFilter, FaHeart, FaRegHeart, FaWater } from 'react-icons/fa'
import { NavbarContext } from '../context/NavbarContext'
import slugify from 'slugify'
import Slider from "react-slick";
import { CiSun, CiTimer } from 'react-icons/ci'
import { LiaFeatherAltSolid } from 'react-icons/lia'
import { useCart } from 'react-use-cart'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from "motion/react"
import { WishlistContext } from '../context/WishlistContext'
import LangUtil from '../utils/LangUtil'; // Import LangUtil


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

    const { inWishlist, removeWishlistItem, addWishlistItem } = useContext(WishlistContext);

    const navigate = useNavigate();
    const [navbarTheme, setNavbarTheme] = useContext(NavbarContext);
    const data = useSelector(p => p.products);
    let filtData = data;
    const [filteredData, setFilteredData] = useState(data);
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
    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
        addItem
    } = useCart();

    for (let i = 1; i <= Math.ceil(filteredData.length / cardsPerPage); ++i) {
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
        document.getElementsByTagName('body')[0].style.backgroundColor = '#ebe3d6';
        setNavbarTheme('black')
    }, [])

    const handleFilterSecForSml = () => {
        console.log('It Works for sml');
        setCurrentPage(1);
        const collection = document.querySelector('.fsfsmodal .for-collection').value;
        const activity = document.querySelector('.fsfsmodal .for-activity').value;
        const categories = document.querySelector('.fsfsmodal .for-categories').value;
        const waterproof = document.querySelector('.fsfsmodal .for-waterproof').value;
        const color = document.querySelector('.fsfsmodal .for-color').value;
        const sortby = document.querySelector('.fsfsmodal .for-sortby').value;
        // console.log(collection, activity, categories, waterproof, color, sortby);

        // filtData = (data.filter(item => ((item.collection === collection || collection === 'all') && (item.activity === activity || activity === 'all') && (item.category === categories || categories === 'all') && (item.props.waterproof === waterproof || waterproof === 'all') && (item.color === color || color === 'all'))))
        // filtData.sort((a, b) => a.title.localeCompare(b.title));
        // setFilteredData(filtData);
        filtData = (data.filter(item => ((item.collection === collection || collection === 'all') && (item.activity === activity || activity === 'all') && (item.category === categories || categories === 'all') && (item.props.waterproof === waterproof || waterproof === 'all') && (item.color === color || color === 'all'))))
        if (sortby === 'AtoZ') {
            filtData.sort((a, b) => a.title.localeCompare(b.title));
        } else if (sortby === 'ZtoA') {
            filtData.sort((a, b) => b.title.localeCompare(a.title));
        } else if (sortby === 'bylowprice') {
            filtData.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        } else if (sortby === 'byhighprice') {
            filtData.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
        }

        setFilteredData(filtData);
    };
    const handleFilterSecForBig = () => {
        console.log('It Works for big');
        setCurrentPage(1);
        const collection = document.querySelector('.filter-sec .for-collection').value;
        const activity = document.querySelector('.filter-sec .for-activity').value;
        const categories = document.querySelector('.filter-sec .for-categories').value;
        const waterproof = document.querySelector('.filter-sec .for-waterproof').value;
        const color = document.querySelector('.filter-sec .for-color').value;
        const sortby = document.querySelector('.filter-sec .for-sortby').value;
        // console.log(collection, activity, categories, waterproof, color, sortby);
        // setFilteredData(data.filter(item => ((item.collection === collection || collection === 'all') && (item.activity === activity || activity === 'all') && (item.category == categories || categories === 'all') && (item.props.waterproof === waterproof || waterproof === 'all') && (item.color === color || color === 'all'))))
        filtData = (data.filter(item => ((item.collection === collection || collection === 'all') && (item.activity === activity || activity === 'all') && (item.category === categories || categories === 'all') && (item.props.waterproof === waterproof || waterproof === 'all') && (item.color === color || color === 'all'))))
        if (sortby === 'AtoZ') {
            filtData.sort((a, b) => a.title.localeCompare(b.title));
        } else if (sortby === 'ZtoA') {
            filtData.sort((a, b) => b.title.localeCompare(a.title));
        } else if (sortby === 'bylowprice') {
            filtData.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        } else if (sortby === 'byhighprice') {
            filtData.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
        }

        setFilteredData(filtData);
    };

    // useEffect(() => {
    //     if (window.innerWidth <= 992) {
    //         const collection = document.querySelector('.fsfsmodal .for-collection').value;
    //         const activity = document.querySelector('.fsfsmodal .for-activity').value;
    //         const categories = document.querySelector('.fsfsmodal .for-categories').value;
    //         const waterproof = document.querySelector('.fsfsmodal .for-waterproof').value;
    //         const color = document.querySelector('.fsfsmodal .for-color').value;
    //         const sortby = document.querySelector('.fsfsmodal .for-sortby').value;
    //         setFilteredData(data.filter(item => ((item.collection === collection || collection === 'all') && (item.activity === activity || activity === 'all') && (item.categories === categories || categories === 'all') && (item.props.waterproof === waterproof || waterproof === 'all') && (item.props.color === color || color === 'all'))))
    //         console.log(filteredData);
    //     } else {
    // const collection = document.querySelector('.filter-sec .for-collection').value;
    // const activity = document.querySelector('.filter-sec .for-activity').value;
    // const categories = document.querySelector('.filter-sec .for-categories').value;
    // const waterproof = document.querySelector('.filter-sec .for-waterproof').value;
    // const color = document.querySelector('.filter-sec .for-color').value;
    // const sortby = document.querySelector('.filter-sec .for-sortby').value;
    //         setFilteredData(data.filter(item => ((item.collection === collection || collection === 'all') && (item.activity === activity || activity === 'all') && (item.categories === categories || categories === 'all') && (item.props.waterproof === waterproof || waterproof === 'all') && (item.props.color === color || color === 'all'))))
    //         console.log(filteredData);
    //     }
    // }, [])




    return (
        <div style={{ overflow: "hidden" }}>
            <div className="shop-sec" style={{ overflow: "hidden" }}>
                <div className="shop-header">
                    <div className='shoptxtmain d-flex'>
                        <IconContext.Provider value={{ size: "2.5em", className: "shop-RxCornerBottomLeft" }}>
                            <RxCornerBottomLeft />
                        </IconContext.Provider>
                        <p className='fs-1'><LangUtil en={'ALL PRODUCTS'} az={'BÜTÜN MƏHSULLAR'} /></p>
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
                                <span className='fw-bold fs-5'><LangUtil en={'COLLECTION'} az={'KOLLEKSİYA'} /></span>
                                <select className="for-collection" onChange={handleFilterSecForBig}>
                                    <option value="all" defaultChecked>ALL</option>
                                    <option value="tactical">TACTICAL</option>
                                    <option value="adventure">ADVENTURE</option>
                                    <option value="industrial">INDUSTRIAL</option>
                                </select>
                            </div>
                            <div className="col-4 col-xl-2 d-flex flex-column">
                                <span className='fw-bold fs-5'><LangUtil en={'ACTIVITY'} az={'FƏALİYYƏT'} /></span>
                                <select className="for-activity" onChange={handleFilterSecForBig}>
                                    <option value="all" defaultChecked>ALL</option>
                                    <option value="running">RUNNING</option>
                                    <option value="hiking">HIKING</option>
                                    <option value="fishing">FISHING</option>
                                    <option value="diving">DIVING</option>
                                    <option value="camping">CAMPING</option>
                                </select>
                            </div>
                            <div className="col-4 col-xl-2 d-flex flex-column">
                                <span className='fw-bold fs-5'><LangUtil en={'CATEGORIES'} az={'KATEQORİYALAR'} /></span>
                                <select className="for-categories" onChange={handleFilterSecForBig}>
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
                                <span className='fw-bold fs-5'><LangUtil en={'WATERPROOF'} az={'SUYA DAVAMLI'} /></span>
                                <select className="for-waterproof" onChange={handleFilterSecForBig}>
                                    <option value="all" defaultChecked>ALL</option>
                                    <option value="IPX8">IPX8</option>
                                    <option value="IPX7">IPX7</option>
                                    <option value="IPX6">IPX6</option>
                                    <option value="IPX4">IPX4</option>
                                    <option value="IP68">IP68</option>
                                </select>
                            </div>
                            <div className="col-4 col-xl-2 d-flex flex-column">
                                <span className='fw-bold fs-5'><LangUtil en={'COLOR'} az={'RƏNG'} /></span>
                                <select className="for-color" onChange={handleFilterSecForBig}>
                                    <option value="all" defaultChecked>ALL</option>
                                    <option value="black">BLACK</option>
                                    <option value="white">WHITE</option>
                                    <option value="green">GREEN</option>
                                    <option value="yellow">YELLOW</option>
                                </select>
                            </div>
                            <div className="col-4 col-xl-2 d-flex flex-column">
                                <span className='fw-bold fs-5'><LangUtil en={'SORT BY'} az={'SIRALA'} /></span>
                                <select className="for-sortby" onChange={handleFilterSecForBig}>
                                    <option value="default">DEFAULT</option>
                                    <option value="AtoZ">A-Z</option>
                                    <option value="ZtoA">Z-A</option>
                                    <option value="byhighprice">HIGH PRICE</option>
                                    <option value="bylowprice">LOW PRICE</option>
                                </select>
                            </div>
                        </div>
                        <div className="filter-sec-for-sml d-lg-none w-100 d-flex justify-content-between btn" data-bs-toggle="modal" data-bs-target="#FilterModal" style={{ border: "2px solid #d7c6af", padding: "12px" }}>
                            <span className='fs-3 fw-bold'><LangUtil en={'FILTER PRODUCTS'} az={'MƏHSULLARI FİLTRLƏ'} /></span>
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
                            {filteredData.slice(firscardindex, lastcardindex).map((item, index) => (
                                <motion.div initial={{ opacity: 0, translateY: "250px" }} whileInView={{ opacity: 1, translateX: 0, translateY: 0 }} transition={{ duration: 1 }} key={index} className="col-12 col-md-6 col-lg-4 col-xxl-3 d-flex justify-content-center my-2" >
                                    <ShopProductCard itemHovered={itemHovered} title={item.title} img={item.img} imghover={item.imghover} price={item.price} color={item.color} props={item.props} uuid={item.uuid} />


                                    <div className="modal fade" id={`shopcardmodal-${slugify(item.uuid, { lower: true })}`} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true" >
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
                                                                <p><LangUtil en={'Run Time'} az={'İşləmə Vaxtı'} /></p>
                                                            </li>
                                                            <li>
                                                                <IconContext.Provider value={{ color: "#88782D", size: "2em" }}>
                                                                    <FaWater />
                                                                </IconContext.Provider>
                                                                <p className="counts m-0 fw-bold">{item.props.waterproof}</p>
                                                                <p><LangUtil en={'Water Resistant'} az={'Suya Davamlılıq'} /></p>
                                                            </li>
                                                            <li>
                                                                <IconContext.Provider value={{ color: "#88782D", size: "2em" }}>
                                                                    <LiaFeatherAltSolid />
                                                                </IconContext.Provider>
                                                                <p className="counts m-0 fw-bold">{item.props.weight}</p>
                                                                <p><LangUtil en={'Weight'} az={'Çəki'} /></p>
                                                            </li>
                                                        </ul>
                                                        <button onClick={() => { addItem({ ...item, id: item.uuid }, 1) }} className='btn shopcard-modal-addtocart-btn fs-5 fw-bold'>
                                                            <LangUtil en={'Add to cart'} az={'Səbətə əlavə et'} />
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="modal-footer d-flex justify-content-center mb-4" style={{ borderTop: "none" }}>
                                                    <button className='btn shopcard-modal-moredet-btn fs-5 fw-bold' onClick={() => { navigate(`/shop/${slugify(item.title, { lower: true })}`) }} data-bs-toggle='modal' data-bs-target={`#shopcardmodal-${slugify(item.uuid, { lower: true })}`}>
                                                        <LangUtil en={'View Full Details'} az={'Tam Məlumatlara Bax'} />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </motion.div>
                            ))}
                        </div>
                        <div className="pagination my-4 container justify-content-end">
                            {pages.map(item => (
                                <button key={item} onClick={() => { setCurrentPage(item) }} className='btn fs-5' style={{ color: currentPage === item ? '#b49360' : 'black' }}>{item}</button>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="shop-foot"></div>
            </div>

            {/* modals */}
            <div className="modal fade p-0 m-0" id="FilterModal" tabIndex={-1} aria-labelledby="exampleModalLabel" style={{ width: "100%" }}>
                <div className="modal-dialog modal-fullscreen" style={{ width: "100%" }}>
                    <div className="modal-content" style={{ background: '#f0ebe3' }}>
                        <div className="modal-header" style={{ borderBottom: "none" }}>
                            <button type="button" className="btn-close fs-2" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body fsfsmodal d-flex justify-content-center align-items-center">
                            <div className='row justify-content-center align-items-center w-75 g-2'>
                                <div className="col-12 col-md-6 d-flex flex-column selectionss">
                                    <span className='fw-bold fs-5'><LangUtil en={'COLLECTION'} az={'KOLLEKSİYA'} /></span>
                                    <select className="for-collection" onChange={handleFilterSecForSml}>
                                        <option value="all" defaultChecked>ALL</option>
                                        <option value="tactical">TACTICAL</option>
                                        <option value="adventure">ADVENTURE</option>
                                        <option value="industrial">INDUSTRIAL</option>
                                    </select>
                                </div>
                                <div className="col-12 col-md-6 d-flex flex-column selectionss ">
                                    <span className='fw-bold fs-5'><LangUtil en={'ACTIVITY'} az={'FƏALİYYƏT'} /></span>
                                    <select className="for-activity" onChange={handleFilterSecForSml}>
                                        <option value="all" defaultChecked>ALL</option>
                                        <option value="running">RUNNING</option>
                                        <option value="hiking">HIKING</option>                                       <option value="fishing">FISHING</option>
                                        <option value="diving">DIVING</option>
                                        <option value="camping">CAMPING</option>
                                    </select>
                                </div>
                                <div className="col-12 col-md-6 d-flex flex-column selectionss">
                                    <span className='fw-bold fs-5'><LangUtil en={'CATEGORIES'} az={'KATEQORİYALAR'} /></span>
                                    <select className="for-categories" onChange={handleFilterSecForSml}>
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
                                    <span className='fw-bold fs-5'><LangUtil en={'WATERPROOF'} az={'SUYA DAVAMLI'} /></span>
                                    <select className="for-waterproof" onChange={handleFilterSecForSml}>
                                        <option value="all" defaultChecked>ALL</option>
                                        <option value="IPX8">IPX8</option>
                                        <option value="IPX7">IPX7</option>
                                        <option value="IPX6">IPX6</option>
                                        <option value="IPX4">IPX4</option>
                                        <option value="IPX68">IPX68</option>
                                    </select>
                                </div>
                                <div className="col-12 col-md-6 d-flex flex-column selectionss">
                                    <span className='fw-bold fs-5'><LangUtil en={'COLOR'} az={'RƏNG'} /></span>
                                    <select className="for-color" onChange={handleFilterSecForSml}>
                                        <option value="all">ALL</option>
                                        <option value="black">BLACK</option>
                                        <option value="white">WHITE</option>
                                        <option value="green">GREEN</option>
                                        <option value="yellow">YELLOW</option>
                                    </select>
                                </div>
                                <div className="col-12 col-md-6 d-flex flex-column selectionss">
                                    <span className='fw-bold fs-5'><LangUtil en={'SORT BY'} az={'SIRALA'} /></span>
                                    <select className="for-sortby" onChange={handleFilterSecForSml}>
                                        <option value="default">DEFAULT</option>
                                        <option value="AtoZ">A-Z</option>
                                        <option value="ZtoA">Z-A</option>
                                        <option value="byhighprice">HIGH PRICE</option>
                                        <option value="bylowprice">LOW PRICE</option>
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