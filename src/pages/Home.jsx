import { IconContext } from "react-icons"
import { FaAngleLeft, FaHandPointLeft, FaShieldVirus } from "react-icons/fa"
import { LiaFlagUsaSolid } from "react-icons/lia"
import CatCard from "../components/CatCard"
import 'react-multi-carousel/lib/styles.css'
import Slider from "react-slick"
import { useEffect, useState } from "react"

const collections_1_bgimg = 'https://princetontec.com/wp-content/uploads/2024/06/JJB_9303-ps-edit-size-scaled.jpg';
const collections_2_bgimg = 'https://princetontec.com/wp-content/uploads/2024/06/PTecMay2022-11-ps-edit-size-scaled.jpg'
const collections_3_bgimg = 'https://princetontec.com/wp-content/uploads/2024/06/JJB_3767-Edit-scaled.jpg'




function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  // setPrevnextProps([className, onClick]);
  return (
    <img
      src="https://cdn-icons-png.flaticon.com/512/32/32213.png"
      className={className}
      style={{ display: "block", top: "105%", right: "5%", filter:"grayscale(1) invert(1)"}}
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
      style={{ display: "block", top: "105%", left: "85%", filter:"grayscale(1) invert(1)" }}
      onClick={onClick}
    />
  );
}




const Home = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [updateCount, setUpdateCount] = useState(0);
  const [slideCount, setSlideCount] = useState(3);
  const [prevnextProps, setPrevnextProps] = useState([]);
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
          dots: true
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
      }
    ]
  }
  useEffect(() => {
    if (window.innerWidth <= 840) { setSlideCount(3) }
    else if (window.innerWidth <= 1220) { setSlideCount(2) }
    else { setSlideCount(1) }
  }, [window.innerWidth])
  return (
    <div>
      <div className="bg-abs-home"></div>
      <div className="container-fluid home-con">
        <div className="container maincon-home text-light">
          <h5 className="fs-5">The Unseen Advantage.</h5>
          <h1 style={{ fontWeight: 'bold' }} className="fs-1">Charge X IR Max</h1>
          <button className="btn fw-bold fs-5">Check It Out</button>
        </div>
        <div className="properties-sec">
          <ul className="list-unstyled d-flex justify-content-around">
            <li className="text-light d-flex align-items-center gap-2 flex-column">
              <svg width={"32px"} height={"32px"} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 46.9 45.2"><path d="M11.7,23.6v1.8H0s5.4,6.1,11.7,6.7v1.8h2.6v2.6l-4.8,4.1v4.6h24.1v-4.7l-4.9-4.2v-1.6c.7-1.1,3.6-4.8,9.9-6.5l1-.3v-4.5H11.7v.2ZM26.1,33.7l-.2.3v3.6l4.9,4.2v.6H12.3v-.5l4.8-4.1v-6.7h-2.6v-4.7h21.1c-6.7,2.4-9.4,7.1-9.5,7.3Z" style={{ fill: '#fff', strokeWidth: 0 }} /><path d="M30.1,10.5l2-4.7,1.1-2.6-2.6-1.1-3-1.2-2.2-.9-1.2,2-2,3.3v.2c-.1,0-.2.2-.2.2l-.5,1.2-.9-.4-2.1,4.9,1,.4-.5,1.2-1,2.6,2.5,1.1,3.4,1.5,2.6,1.1,1.1-2.6.5-1.3,16.7,6.8,2.1-4.9-16.7-6.8s-.1,0-.1,0ZM27.5,9.4l-2.1,4.9-.5,1.2-3.4-1.5.5-1.2.7-1.6,1.9-4.5,2-3.3,3,1.2-2,4.7-.1.1Z" style={{ fill: '#fff', strokeWidth: 0 }} /><rect x="4.1" y="18.6" width="7.2" height="2.8" style={{ fill: '#fff', strokeWidth: 0 }} /><rect x="11.18" y="4.79" width="2.8" height="7.2" transform="translate(-2.25 11.35) rotate(-45)" style={{ fill: '#fff', strokeWidth: 0 }} /><rect x="7.54" y="10.03" width="2.8" height="7.2" transform="translate(-7.1 16.53) rotate(-67)" style={{ fill: '#fff', strokeWidth: 0 }} /></svg>
              <b className="fs-6">EST. 1975</b>
            </li>
            <li className="text-light d-flex align-items-center gap-2 flex-column">

              <IconContext.Provider value={{ size: "32px" }}>
                <LiaFlagUsaSolid />
              </IconContext.Provider>
              <b className="fs-6">USA-made</b>
            </li>
            <li className="text-light d-flex align-items-center gap-2 flex-column">
              <IconContext.Provider value={{ size: "32px" }}>
                <FaShieldVirus />
              </IconContext.Provider>
              <b className="fs-6">Trusted by the Armed Forces</b>
            </li>
          </ul>
        </div>
      </div>
      <div className="explore-collections-sec container d-flex justify-content-center align-items-center, flex-column">
        <p className="fw-bold h1 text-light mb-5">Explore Collections</p>
        <div className="slider-container container-fluid" style={{width:"90%", margin:"0 auto"}}>
          <Slider {...settings}>
            <CatCard width={"18rem"} height={"27rem"} text={'TACTICAL'} bgimg={collections_1_bgimg} />
            <CatCard width={"18rem"} height={"27rem"} text={'ADVENTURE'} bgimg={collections_2_bgimg} />
            <CatCard width={"18rem"} height={"27rem"} text={'INDUSTRIAL'} bgimg={collections_3_bgimg} />
          </Slider>
          <div className="progress-sc d-flex flex-row">
            <div className="progress w-75" style={{ height: "5px", marginTop:"19px" }} role="progressbar" aria-label="Basic example" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>
              <div className="progress-bar" style={{ background: "#b49360", width: `${(slideIndex + 1) * (100 / slideCount)}%` }} />
            </div>
            <div className="buttons w-25">
            </div>
          </div>
        </div>
      </div>
      <div className="best-sellers-sec mt-5">
        <div className="breakdance-px breakdance-px-bestsellers">
        </div>
      </div>
    </div>
  )
}

export default Home