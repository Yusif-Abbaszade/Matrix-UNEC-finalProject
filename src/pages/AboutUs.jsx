import React from 'react'
import { IconContext } from 'react-icons'
import { GrBottomCorner, GrTopCorner } from 'react-icons/gr'
import { RxCornerBottomRight, RxCornerTopLeft } from 'react-icons/rx'
import SocialMediaCarousel from '../components/SocialMediaCarousel'

const AboutUs = () => {
  return (
    <div className='aboutus-page'>
      <div className="header-bg-overlay"></div>
      <div className="header-sc d-flex justify-content-center align-items-center flex-row">
        <IconContext.Provider value={{ color: "#d7c6af", size: "7em", className: "GrTopCorner" }}>
          <GrTopCorner />
        </IconContext.Provider>
        <div className='d-flex flex-column justify-content-center align-items-center'>
          <p className='txt1'>PRINCETON TEC</p>
          <p className='txt2'>SINCE 1975</p>
        </div>
        <IconContext.Provider value={{ color: "#d7c6af", size: "7em", className: "GrBottomCorner" }}>
          <GrBottomCorner />
        </IconContext.Provider>
      </div>
      <div className="container our-mission-your-mission">
        <div className="row">
          <div className="col-12 col-lg-5">
            <p className='h1 fw-bold'>OUR <span style={{ color: "#d7c6af", fontWeight: "bold" }}>MISSION</span></p>
            <p className='h1 fw-bold'>IS <span style={{ color: "#d7c6af", fontWeight: "bold" }}>YOUR MISSION</span></p>
          </div>
          <div className="col-12 col-lg-7">
            Since 1975, Princeton Tec has developed products for the professional and the outdoor sports enthusiast. Princeton Tec’s 49 year journey has pushed the limits of self-discovery and provided light for those who have explored all ends of the Earth. The spirit of adventure and history of meeting challenges continue to drive the growth and development of Princeton Tec and its products.
          </div>
        </div>
        <img src="https://princetontec.com/wp-content/uploads/2024/07/DSC01427-scaled.jpg" alt="" width={"100%"} className='mt-5' style={{ opacity: ".65" }} />
      </div>
      <div className="container-fluid features-sec" style={{ background: "#f0ebe3" }}>
        <div className="row">
          <div className="col-12 col-lg-6 img1-cont">
            <img src="https://princetontec.com/wp-content/uploads/2024/07/about-page-banner-1024x390.png" alt="" width={"100%"} />
          </div>
          <div className="col-12 col-lg-5 txt1">
            <p className='h1'>To Create Light where there is darkness</p>
            <p>Founded in 1975, Princeton Tec is a family owned and operated, entirely USA based manufacturer of premier personal lighting products. For almost 50 years, we have been committed to excellence in our innovation of cutting-edge tactical lighting technology and dedicated to our mission of serving the military, law enforcement, and all other everyday heroes. Our unwavering determination to push limits extends to our Industrial and Adventure lines, where our lighting products illuminate pathways for hard workers and outdoor enthusiasts across the globe. </p>
          </div>
          <div className="col-lg-1"></div>
        </div>
        <div className="row clrvrs" style={{ marginTop: "150px" }}>
          <div className="col-lg-1"></div>
          <div className="col-12 col-lg-4">
            <p className='txt5' style={{ marginTop: "40px" }}>What sets us apart is our dedication to being an entirely USA-made brand. From concept to completion, Princeton Tec prioritizes superior craftsmanship and attention to detail, ensuring that our personal lighting products reflect our commitment to excellence and uphold the highest standards of performance and reliability. Join us on our mission, as we continue to push limits that empower us to go further.</p>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-12 col-lg-6 img2-cont">
            <img src="https://princetontec.com/wp-content/uploads/2024/07/about-page-banner2.png" alt="" width={"100%"} />
          </div>
        </div>
      </div>
      <div className="know-us-sec pt-5">
        <div className="container">
          <p className='h1 text-dark text-center py-5'>GET TO KNOW US</p>
          <div className="accordion my-5" data-bs-theme='dark' id="accordionExample">
            <div className="accordion-item mb-3">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed fw-bold fs-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  MADE IN AMERICA
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  Princeton Tec’s HQ is located in Pennsauken NJ, USA, where all of our lights are constructed from concept to completion. We also have a plastic injection molding facility and tool shop down the road in Berlin. This allows us to personally ensure paramount quality as we prioritize attention to detail during the entire manufacturing process right here at home.
                </div>
              </div>
            </div>
            <div className="accordion-item mb-3">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed fw-bold fs-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  FAMILY OWNERSHIP
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  Princeton Tec was founded by Bill Stephens and still, almost 50 years later, the Stephens family owns and operates the company. In recent years, the third generation of the Stephens family began taking a hand in the business and now contribute to the evolution of Princeton Tec in an ever-changing market, all while maintaining the same values in their pursuits as their grandfather did back in 1975.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed fw-bold fs-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  HISTORY & EVOLUTION
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <p>
                    Princeton Tec was born with our founder's invention of the Bottom Timer, the industry's first ever automatic dive timer. From there, similar applications were used at Princeton Tec to create a fully waterproof divable flashlight, an innovative product noted for its affordability, opening up a whole new world for recreational divers across the globe. As we continued to engineer premier lighting products for underwater exploration, our foundational flashlight collection, Dive, was formed.
                  </p>
                  <p>
                    As our Dive collection flourished, we decided to expand the Princeton Tec brand into all areas of outdoor adventure, and designed excellent headlamps and handheld lights specifically crafted for the outdoor activities our products still support today.
                  </p>
                  <p>
                    Our Tactical line was cultivated as we returned to our roots of underwater illumination and began supplying the U.S. Military with strobe lights for Navy SEALs. The positive response to Princeton Tec products from military personnel inspired us to engineer personal lighting products fit for all branches of the military. Now, with our matured collection of Tactical products, we proudly serve the specialized needs of the military, first responders, and other everyday heroes with industry leading lighting products.
                  </p>
                  <p>
                    Princeton Tec continues to nurture our brand with the same spirit of innovation that got us to where we are today, as we persist in our pursuit to push limits and empower oursleves to go further.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="social-media-sec d-flex flex-column justify-content-center align-items-center">
        <div className="main-link">
          <IconContext.Provider value={{ color: "white", size: "3em", className: "social-RxCornerTopLeft", style: { marginBottom: "40px" } }} >
            <RxCornerTopLeft />
          </IconContext.Provider>
          <a href="#" className="text-decoration-none text-light fw-bold followussocialmedialink">FOLLOW US ON SOCIAL MEDIA</a>
          <IconContext.Provider value={{ color: "white", size: "3em", className: "social-RxCornerBottomRight", style: { marginTop: "35px" } }}>
            <RxCornerBottomRight />
          </IconContext.Provider>
        </div>
        <SocialMediaCarousel />
      </div>
    </div>
  )
}

export default AboutUs