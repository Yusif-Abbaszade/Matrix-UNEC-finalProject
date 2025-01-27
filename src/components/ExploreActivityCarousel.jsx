import { useEffect, useState } from "react";
import Slider from "react-slick";
import CatCard from "./CatCard";
import { useSelector } from "react-redux";
import ActivityCard from "./ActivityCard";


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




const ExploreActivityCarousel = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const [updateCount, setUpdateCount] = useState(0);
    const [slideCount, setSlideCount] = useState(3);
    const activities = useSelector(p => p.activities)

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
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
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 0
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
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
        if (window.innerWidth <= 768) { setSlideCount(5) }
        else if (window.innerWidth <= 1000) { setSlideCount(4) }
        else if (window.innerWidth <= 1400) { setSlideCount(3) }
        else { setSlideCount(2) }
    }, [window.innerWidth])
    return (
        <div className="slider-container container-fluid" style={{ width: "90%", margin: "0 auto" }}>
            <Slider {...settings}>
                {activities.map((item, index) => (
                    <ActivityCard key={index} title={item.title} img={item.img} />
                ))}
            </Slider>
            <div className="progress-sc d-flex flex-row justify-content-center mt-2">
                <div className="progress" style={{ height: "5px", marginTop: "19px", width: "78%" }} role="progressbar" aria-label="Basic example" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>
                    <div className="progress-bar" style={{ background: "#b49360", width: `${(slideIndex + 1) * (100 / slideCount)}%` }} />
                </div>
                <div className="buttons" style={{ width: "10%" }}>
                </div>
            </div>
        </div>
    )
}

export default ExploreActivityCarousel