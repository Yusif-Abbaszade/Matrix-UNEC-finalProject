import { useEffect, useState } from "react";
import Slider from "react-slick";
import CatCard from "./CatCard";


const collections_1_bgimg = 'https://princetontec.com/wp-content/uploads/2024/06/JJB_9303-ps-edit-size-scaled.jpg';
const collections_2_bgimg = 'https://princetontec.com/wp-content/uploads/2024/06/PTecMay2022-11-ps-edit-size-scaled.jpg'
const collections_3_bgimg = 'https://princetontec.com/wp-content/uploads/2024/06/JJB_3767-Edit-scaled.jpg'




function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <img
            src="https://cdn-icons-png.flaticon.com/512/32/32213.png"
            className={className}
            style={{ display: "block", top: "105%", right: "5%", filter: "grayscale(1) invert(1)" }}
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
            style={{ display: "block", top: "105%", left: "85%", filter: "grayscale(1) invert(1)" }}
            onClick={onClick}
        />
    );
}




const ExploreCollectionsCarousel = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const [updateCount, setUpdateCount] = useState(0);
    const [slideCount, setSlideCount] = useState(3);

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 3,
        afterChange: () => setUpdateCount(updateCount + 1),
        beforeChange: (current, next) => setSlideIndex(next),
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 5000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 1220,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 840,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint:500,
                settings:{
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows:false
                }
            }
        ]
    }
    useEffect(() => {
        if (window.innerWidth <= 840) { setSlideCount(3) }
        else if (window.innerWidth <= 1220) { setSlideCount(2) }
        else { setSlideCount(1) }
    }, [window.innerWidth])
    return (
        <div className="slider-container container-fluid" style={{ width: "90%", margin: "0 auto" }}>
            <Slider {...settings}>
                <CatCard width={"18rem"} height={"27rem"} text={'TACTICAL'} bgimg={collections_1_bgimg} />
                <CatCard width={"18rem"} height={"27rem"} text={'ADVENTURE'} bgimg={collections_2_bgimg} />
                <CatCard width={"18rem"} height={"27rem"} text={'INDUSTRIAL'} bgimg={collections_3_bgimg} />
            </Slider>
            <div className="explore-progress-sc d-flex flex-row">
                <div className="progress w-75" style={{ height: "5px", marginTop: "19px" }} role="progressbar" aria-label="Basic example" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>
                    <div className="progress-bar" style={{ background: "#b49360", width: `${(slideIndex + 1) * (100 / slideCount)}%` }} />
                </div>
                <div className="buttons w-25">
                </div>
            </div>
        </div>
    )
}

export default ExploreCollectionsCarousel