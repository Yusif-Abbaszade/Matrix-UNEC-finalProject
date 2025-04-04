import { IconContext } from "react-icons"
import { FaShieldVirus } from "react-icons/fa"
import { LiaFlagUsaSolid } from "react-icons/lia"
import { RxCornerBottomRight, RxCornerTopLeft } from "react-icons/rx"
import ExploreCollectionsCarousel from "../components/ExploreCollectionsCarousel"
import BestsellersCarousel from "../components/BestsellersCarousel"
import { useSelector } from "react-redux"
import CatCard from "../components/CatCard"
import ExploreActivityCarousel from "../components/ExploreActivityCarousel"
import SocialMediaCarousel from "../components/SocialMediaCarousel"
import { useContext, useEffect } from "react"
import { NavbarContext } from "../context/NavbarContext"
import { motion } from "motion/react"
import LangUtil from "../utils/LangUtil"

const Home = () => {
  const categories = useSelector(p => p.categories)
  const [navbarTheme, setNavbarTheme] = useContext(NavbarContext);
  useEffect(() => {
    document.getElementsByTagName('body')[0].style.background = 'black'
    setNavbarTheme('light')
  }, [])
  return (
    <div>
      <div className="bg-abs-home"></div>
      <div className="container-fluid home-con">
        <div className="container maincon-home text-light">
          <h5 className="fs-5"><LangUtil az={'Görünməyən Üstünlük.'} en={'The Unseen Advantage.'} /></h5>
          <h1 style={{ fontWeight: 'bold' }} className="fs-1">Charge X IR Max</h1>
          <button className="btn fw-bold fs-5"><LangUtil en={'Check It Out'} az={'Yoxlayın'} /></button>
        </div>
        <div className="properties-sec">
          <ul className="list-unstyled d-flex justify-content-around text-center row">
            <li className="col-4 text-light d-flex align-items-center gap-2 flex-column">
              <svg width={"32px"} height={"32px"} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 46.9 45.2"><path d="M11.7,23.6v1.8H0s5.4,6.1,11.7,6.7v1.8h2.6v2.6l-4.8,4.1v4.6h24.1v-4.7l-4.9-4.2v-1.6c.7-1.1,3.6-4.8,9.9-6.5l1-.3v-4.5H11.7v.2ZM26.1,33.7l-.2.3v3.6l4.9,4.2v.6H12.3v-.5l4.8-4.1v-6.7h-2.6v-4.7h21.1c-6.7,2.4-9.4,7.1-9.5,7.3Z" style={{ fill: '#fff', strokeWidth: 0 }} /><path d="M30.1,10.5l2-4.7,1.1-2.6-2.6-1.1-3-1.2-2.2-.9-1.2,2-2,3.3v.2c-.1,0-.2.2-.2.2l-.5,1.2-.9-.4-2.1,4.9,1,.4-.5,1.2-1,2.6,2.5,1.1,3.4,1.5,2.6,1.1,1.1-2.6.5-1.3,16.7,6.8,2.1-4.9-16.7-6.8s-.1,0-.1,0ZM27.5,9.4l-2.1,4.9-.5,1.2-3.4-1.5.5-1.2.7-1.6,1.9-4.5,2-3.3,3,1.2-2,4.7-.1.1Z" style={{ fill: '#fff', strokeWidth: 0 }} /><rect x="4.1" y="18.6" width="7.2" height="2.8" style={{ fill: '#fff', strokeWidth: 0 }} /><rect x="11.18" y="4.79" width="2.8" height="7.2" transform="translate(-2.25 11.35) rotate(-45)" style={{ fill: '#fff', strokeWidth: 0 }} /><rect x="7.54" y="10.03" width="2.8" height="7.2" transform="translate(-7.1 16.53) rotate(-67)" style={{ fill: '#fff', strokeWidth: 0 }} /></svg>
              <b className="fs-6">EST. 1975</b>
            </li>
            <li className="col-4 text-light d-flex align-items-center gap-2 flex-column">

              <IconContext.Provider value={{ size: "32px" }}>
                <LiaFlagUsaSolid />
              </IconContext.Provider>
              <b className="fs-6"><LangUtil en={'USA-made'} az={'ABŞ istehsalıdır'} /></b>
            </li>
            <li className="col-4 text-light d-flex align-items-center gap-2 flex-column">
              <IconContext.Provider value={{ size: "32px" }}>
                <FaShieldVirus />
              </IconContext.Provider>
              <b className="fs-6"><LangUtil en={'Trusted by the Armed Forces'} az={'Silahlı Qüvvələr tərəfindən güvənilir'} /></b>
            </li>
          </ul>
        </div>
      </div>
      <div data-aos="zoom-in-up" className="explore-collections-sec container d-flex justify-content-center align-items-center, flex-column">
        <p className="fw-bold h1 text-light mb-5"><LangUtil en={'EXPLORE'} az={'KƏŞFEDİN'} /> <span style={{ color: "#d7c6af", fontWeight: "bold" }}><LangUtil en={'COLLECTIONS'} az={'KOLLEKSİYALAR'} /></span></p>
        <ExploreCollectionsCarousel />
      </div>
      <motion.div initial={{ opacity: 0, translateY: "400px" }} whileInView={{ opacity: 1, translateX: 0, translateY: 0 }} transition={{ duration: 1 }} className="best-sellers-sec mt-5">
        <div className="breakdance-px breakdance-px-bestsellers" />
        <div className="row best-sellers-products">
          <p className="fw-bold d-flex align-items-center gap-3 h1 text-dark ms-5"><span style={{ color: "#b49360", fontWeight: "bold" }}><LangUtil en={'BEST'} az={'ƏN ÇOX'} /> </span> <LangUtil en={'SELLERS'} az={'SATILANLAR'} /></p>
          <BestsellersCarousel />
        </div>
      </motion.div>
      <div data-aos="zoom-in-right" className="explore-categories-sec container-fluid text-light my-5">
        <p className="h1 fw-bold"><LangUtil en={'EXPLORE'} az={'KƏŞFEDİN'} /> <span style={{ fontWeight: "bold", color: "#d7c6af" }}><LangUtil en={'CATEGORIES'} az={'KATEQORİYALAR'} /></span></p>
        <div className="row my-5">
          {categories.map((item, index) => (
            <div key={index} className="col-12 col-sm-6 col-xl-4 col-xxl-2">
              <CatCard navigatelink={'/shop'} height={"40vh"} bgimg={item.img} text={item.title.toUpperCase()} />
            </div>
          ))}
        </div>
      </div>
      <div data-aos="zoom-in-left" className="explore-activity-sec container d-flex justify-content-center align-items-center, flex-column">
        <p className="fw-bold h1 text-light mb-5"><LangUtil en={'EXPLORE BY'} az={'KƏŞFEDİN'} /> <span style={{ color: "#d7c6af", fontWeight: "bold" }}><LangUtil en={'ACTIVITY'} az={'FƏALİYYƏT'} /></span></p>
        <ExploreActivityCarousel />
      </div>
      <div data-aos="fade-right" className="social-media-sec d-flex flex-column justify-content-center align-items-center">
        <div className="main-link">
          <IconContext.Provider value={{ color: "white", size: "3em", className: "social-RxCornerTopLeft", style: { marginBottom: "40px" } }} >
            <RxCornerTopLeft />
          </IconContext.Provider>
          <a href="#" className="text-decoration-none text-light fw-bold followussocialmedialink"><LangUtil en={'FOLLOW US ON SOCIAL MEDIA'} az={'SOSİAL MEDİADA İZLƏYİN'} /></a>
          <IconContext.Provider value={{ color: "white", size: "3em", className: "social-RxCornerBottomRight", style: { marginTop: "35px" } }}>
            <RxCornerBottomRight />
          </IconContext.Provider>
        </div>
        <SocialMediaCarousel />
      </div>
    </div>
  )
}

export default Home