import Slider from "react-slick";
import CatCard from "./CatCard";
import { useEffect, useState } from "react";
import ProductCardForHome from "./ProductCardForHome";
import { useSelector } from "react-redux";


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <img
            src="https://cdn-icons-png.flaticon.com/512/32/32213.png"
            className={className}
            style={{ display: "block", top: "105%", right: "5%"}}
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
            style={{ display: "block", top: "105%", left: "85%"}}
            onClick={onClick}
        />
    );
}



const BestsellersCarousel = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const [updateCount, setUpdateCount] = useState(0);
    const [slideCount, setSlideCount] = useState(3);
    const [itemHovered, setItemHovered] = useState('');
    const data = useSelector(p=>p.products);
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
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
                    // draggable:true
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
    useEffect(() => {
        if (window.innerWidth <= 840) { setSlideCount(8) }
        else if (window.innerWidth <= 1220) { setSlideCount(7) }
        else if (window.innerWidth <= 1600) { setSlideCount(6) }
        else { setSlideCount(5) }
    }, [window.innerWidth])


    useEffect(()=>{
        [...document.querySelectorAll('.productcardforhome .imgsc img')].map((item, index)=>{
            item.onmouseover = ()=>{
                setItemHovered(item.getAttribute('src'))
            }
            item.onmouseleave = ()=>{
                setItemHovered('')
            }
        })
    }, [])

    return (
        <div className="slider-container container-fluid" style={{ width: "100%", margin: "0", padding:"0" }}>
            <Slider {...settings} className="sldsc" draggable={true}>
                {data.filter(item=>item.bestsellers).map((item, index)=>(
                    <ProductCardForHome key={index} title={item.title} price={item.price} img={item.img} imghover={item.imghover} itemHovered={itemHovered} props={item.props} />
                ))}
            </Slider>
            <div className="progress-sc d-flex flex-row justify-content-center">
                <div className="progress" style={{ height: "5px", marginTop: "19px", width:"78%" }} role="progressbar" aria-label="Basic example" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>
                    <div className="progress-bar" style={{ background: "#b49360", width: `${(slideIndex + 1) * (100 / slideCount)}%` }} />
                </div>
                <div className="buttons" style={{width:"10%"}}>
                </div>
            </div>
        </div>
    )
}

export default BestsellersCarousel