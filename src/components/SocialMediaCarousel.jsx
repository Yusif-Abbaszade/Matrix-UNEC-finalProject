import Carousel from "react-multi-carousel"
import Slider from "react-slick"
import CatCard from "./CatCard"
import { useSelector } from "react-redux"
import SocialMediaCard from "./SocialMediaCard"

const SocialMediaCarousel = () => {
    const socialmedia = useSelector(p => p.socialmedia)
    const settings = {
        customPaging: () => {
            return (
                <div className="mt-5" style={{opacity:".5" ,width: "250%", height: "5px", background: "#d7c6b0" }}></div>
            )
        },
        dots: true,
        dotsClass: "slick-dots slick thumb",
        infinite: false,
        speed: 500,
        slidesToShow: 0,
        slidesToScroll: 1,
        arrows:false,
        responsive: [
            {
                breakpoint: 5000,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                    infinite: false,
                    dots: true
                }
            },
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 1220,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 840,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots:false,
                    arrows:true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots:false,
                    arrows:true
                }
            }
        ]
    }
    return (
        <div className="social-media-carousel text-light my-5 " style={{width:"90%"}}>
            <Slider {...settings}>
                {socialmedia.filter(item=>item.show).map((item, index) => (
                    <SocialMediaCard key={index} bgimg={item.img} link={item.link} />
                ))}
            </Slider>
        </div>
    )
}

export default SocialMediaCarousel