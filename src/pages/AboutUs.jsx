import React, { useContext, useEffect } from 'react'
import { IconContext } from 'react-icons'
import { GrBottomCorner, GrTopCorner } from 'react-icons/gr'
import { RxCornerBottomRight, RxCornerTopLeft } from 'react-icons/rx'
import SocialMediaCarousel from '../components/SocialMediaCarousel'
import { NavbarContext } from '../context/NavbarContext'
import LangUtil from '../utils/LangUtil'

const AboutUs = () => {
  const [navbarTheme, setNavbarTheme] = useContext(NavbarContext);
  useEffect(() => {
    document.getElementsByTagName('body')[0].style.backgroundColor = 'black'
    setNavbarTheme('light');
  }, [])
  return (
    <div className='aboutus-page'>
      <div className="header-bg-overlay"></div>
      <div className="header-sc d-flex justify-content-center align-items-center flex-row">
        <IconContext.Provider value={{ color: "#d7c6af", size: "7em", className: "GrTopCorner" }}>
          <GrTopCorner />
        </IconContext.Provider>
        <div className='d-flex flex-column justify-content-center align-items-center'>
          <p className='txt1'>PRINCETON TEC</p>
          <p className='txt2'><LangUtil en={'SINCE 1975'} az={'1975-ci ildən'} /></p>
        </div>
        <IconContext.Provider value={{ color: "#d7c6af", size: "7em", className: "GrBottomCorner" }}>
          <GrBottomCorner />
        </IconContext.Provider>
      </div>
      <div data-aos="zoom-in-up" className="container our-mission-your-mission">
        <div className="row">
          <div className="col-12 col-lg-5">
            <p className='h1 fw-bold'><LangUtil en={'OUR'} az={'BİZİM'} /> <span style={{ color: "#d7c6af", fontWeight: "bold" }}><LangUtil en={'MISSION'} az={'MİSSİYAMIZ'} /></span></p>
            <p className='h1 fw-bold'><LangUtil en={'IS'} az={'SİZİN'} /> <span style={{ color: "#d7c6af", fontWeight: "bold" }}><LangUtil  en={'YOUR MISSION'} az={'MİSSİYANIZDIR'}/></span></p>
          </div>
          <div className="col-12 col-lg-7">
            <LangUtil en={'Since 1975, Princeton Tec has developed products for the professional and the outdoor sports enthusiast. Princeton Tec’s 49 year journey has pushed the limits of self-discovery and provided light for those who have explored all ends of the Earth. The spirit of adventure and history of meeting challenges continue to drive the growth and development of Princeton Tec and its products.'} az={'1975-ci ildən bəri Princeton Tec peşəkar və açıq idman həvəskarları üçün məhsullar hazırlayır. Princeton Tec-in 49 illik səyahəti özünü kəşf etmək hüdudlarını aşdı və Yer kürəsinin bütün uclarını kəşf edənlərə işıq verdi. Macəra ruhu və çətinliklərlə qarşılaşma tarixi Princeton Tec və onun məhsullarının böyüməsini və inkişafına təkan verməkdə davam edir.'} />
          </div>
        </div>
        <img src="https://princetontec.com/wp-content/uploads/2024/07/DSC01427-scaled.jpg" alt="" width={"100%"} className='mt-5' style={{ opacity: ".65" }} />
      </div>
      <div className="container-fluid features-sec" style={{ background: "#f0ebe3" }}>
        <div className="row">
          <div className="col-12 col-lg-6 img1-cont" data-aos="fade-right" data-aos-duration="1000">
            <img src="https://princetontec.com/wp-content/uploads/2024/07/about-page-banner-1024x390.png" alt="" width={"100%"} />
          </div>
          <div className="col-12 col-lg-5 txt1" data-aos="fade-right" data-aos-duration="1000">
            <p className='h1'><LangUtil en={'To Create Light where there is darkness'} az={'Qaranlıq olan yerdə İşıq yaratmaq'} /></p>
            <p><LangUtil en={'Founded in 1975, Princeton Tec is a family owned and operated, entirely USA based manufacturer of premier personal lighting products. For almost 50 years, we have been committed to excellence in our innovation of cutting-edge tactical lighting technology and dedicated to our mission of serving the military, law enforcement, and all other everyday heroes. Our unwavering determination to push limits extends to our Industrial and Adventure lines, where our lighting products illuminate pathways for hard workers and outdoor enthusiasts across the globe.'} az={'1975-ci ildə əsası qoyulan Princeton Tec ailəyə məxsus və idarə olunan, tamamilə ABŞ-da əsas şəxsi işıqlandırma məhsullarının istehsalçısıdır. Demək olar ki, 50 ildir ki, biz qabaqcıl taktiki işıqlandırma texnologiyasında yeniliklərimizdə mükəmməlliyə sadiqik və orduya, hüquq-mühafizə orqanlarına və bütün digər gündəlik qəhrəmanlara xidmət etmək missiyamıza sadiqik. Sərhədləri aşmaq üçün sarsılmaz əzmimiz sənaye və macəra xətlərimizi əhatə edir, burada işıqlandırma məhsullarımız bütün dünyada zəhmətkeşlər və açıq hava həvəskarları üçün yolları işıqlandırır.'} /></p>
          </div>
          <div className="col-lg-1"></div>
        </div>
        <div className="row clrvrs" data-aos="fade-left" data-aos-duration="1000">
          <div className="col-lg-1"></div>
          <div className="col-12 col-lg-4">
            <p className='txt5' style={{ marginTop: "40px" }}><LangUtil en={'What sets us apart is our dedication to being an entirely USA-made brand. From concept to completion, Princeton Tec prioritizes superior craftsmanship and attention to detail, ensuring that our personal lighting products reflect our commitment to excellence and uphold the highest standards of performance and reliability. Join us on our mission, as we continue to push limits that empower us to go further.'} az={'Bizi fərqləndirən, tamamilə ABŞ istehsalı olan bir marka olmağa sadiqliyimizdir. Princeton Tec konsepsiyadan tamamlamaya qədər üstün sənətkarlığa və detallara diqqət yetirməyə üstünlük verir, şəxsi işıqlandırma məhsullarımızın mükəmməlliyə olan öhdəliyimizi əks etdirməsini və ən yüksək performans və etibarlılıq standartlarını dəstəkləməsini təmin edir. Bizə daha da irəli getməyə imkan verən məhdudiyyətləri zorlamağa davam etdiyimiz üçün missiyamıza qoşulun.'}/></p>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-12 col-lg-6 img2-cont">
            <img src="https://princetontec.com/wp-content/uploads/2024/07/about-page-banner2.png" alt="" width={"100%"} />
          </div>
        </div>
      </div>
      <div className="know-us-sec pt-5">
        <div className="container">
          <p className='h1 text-dark fw-bolder text-center py-5' data-aos="zoom-in-down" ><LangUtil en={'GET TO KNOW US'} az={'BİZİ TANIYIN'} /></p>
          <div className="accordion my-5" data-aos="zoom-in-up" data-bs-theme='dark' id="accordionExample">
            <div className="accordion-item mb-3">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed fw-bold fs-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  <LangUtil en={'MADE IN AMERICA'} az={'AMERİKA İSTEHSALI'} />
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <LangUtil en={'Princeton Tec’s HQ is located in Pennsauken NJ, USA, where all of our lights are constructed from concept to completion. We also have a plastic injection molding facility and tool shop down the road in Berlin. This allows us to personally ensure paramount quality as we prioritize attention to detail during the entire manufacturing process right here at home.'} az={'Princeton Tec-in qərargahı ABŞ-ın Pennsauken NJ-də yerləşir və burada bütün işıqlarımız konsepsiyadan sona qədər tikilir. Həmçinin Berlində plastik inyeksiya zavodumuz və alət mağazamız var. Bu, biz evdə bütün istehsal prosesi zamanı təfərrüata diqqəti prioritet hesab etdiyimiz üçün yüksək keyfiyyəti şəxsən təmin etməyə imkan verir.'} />
                </div>
              </div>
            </div>
            <div className="accordion-item mb-3">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed fw-bold fs-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  <LangUtil en={'FAMILY OWNERSHIP'} az={'AİLƏ MÜLKİYYƏTİ'} />
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <LangUtil en={'Princeton Tec was founded by Bill Stephens and still, almost 50 years later, the Stephens family owns and operates the company. In recent years, the third generation of the Stephens family began taking a hand in the business and now contribute to the evolution of Princeton Tec in an ever-changing market, all while maintaining the same values in their pursuits as their grandfather did back in 1975.'} az={'Princeton Tec Bill Stephens tərəfindən təsis edilib və hələ də, demək olar ki, 50 il sonra, Stivens ailəsi şirkətə sahibdir və idarə edir. Son illərdə Stephens ailəsinin üçüncü nəsli biznesdə əl tutmağa başladı və indi babalarının 1975-ci ildə etdiyi kimi eyni dəyərləri qoruyarkən, daim dəyişən bazarda Princeton Tec-in təkamülünə töhfə verirlər.'} />
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed fw-bold fs-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  <LangUtil en={'HISTORY & EVOLUTION'} az={'TARİX VƏ TƏKAMÜL'} />
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <p>
                    <LangUtil en={'Princeton Tec was born with our founders invention of the Bottom Timer, the industrys first ever automatic dive timer. From there, similar applications were used at Princeton Tec to create a fully waterproof divable flashlight, an innovative product noted for its affordability, opening up a whole new world for recreational divers across the globe. As we continued to engineer premier lighting products for underwater exploration, our foundational flashlight collection, Dive, was formed.'} az={'Princeton Tec, qurucumuzun sənayenin ilk avtomatik dalğıc taymeri olan Bottom Timer ixtirası ilə anadan olmuşdur. Oradan Princeton Tec-də oxşar tətbiqlərdən tamamilə suya davamlı divable fənər yaratmaq üçün istifadə edildi, bu, ucuzluğu ilə seçilən innovativ məhsul və bütün dünyada istirahət dalğıcları üçün tamamilə yeni bir dünya açdı. Sualtı kəşfiyyatlar üçün əsas işıqlandırma məhsullarının mühəndisliyini davam etdirdikcə, əsas fənər kolleksiyamız Dive yarandı.'} />
                  </p>
                  <p>
                    <LangUtil en={'As our Dive collection flourished, we decided to expand the Princeton Tec brand into all areas of outdoor adventure, and designed excellent headlamps and handheld lights specifically crafted for the outdoor activities our products still support today.'} az={'Dive kolleksiyamız inkişaf etdikcə, biz Princeton Tec brendini açıq hava macərasının bütün sahələrinə genişləndirmək qərarına gəldik və məhsullarımızın bu gün də dəstəklədiyi açıq hava fəaliyyəti üçün xüsusi hazırlanmış əla fənərlər və əl işıqları dizayn etdik.'} />
                  </p>
                  <p>
                    <LangUtil en={'Our Tactical line was cultivated as we returned to our roots of underwater illumination and began supplying the U.S. Military with strobe lights for Navy SEALs. The positive response to Princeton Tec products from military personnel inspired us to engineer personal lighting products fit for all branches of the military. Now, with our matured collection of Tactical products, we proudly serve the specialized needs of the military, first responders, and other everyday heroes with industry leading lighting products.'} az={'Sualtı işıqlandırmanın köklərinə qayıtdığımız və ABŞ Hərbi Dəniz Qüvvələrinin möhürləri üçün strob işıqları ilə təchiz etməyə başladığımız zaman Taktik xəttimiz yetişdirildi. Princeton Tec məhsullarına hərbi qulluqçuların müsbət cavabı bizi ordunun bütün sahələrinə uyğun fərdi işıqlandırma məhsulları hazırlamağa ruhlandırdı. İndi, yetişmiş Taktik məhsulları kolleksiyamızla, sənayenin aparıcı işıqlandırma məhsulları ilə ordunun, ilk müdaxilə edənlərin və digər gündəlik qəhrəmanların xüsusi ehtiyaclarına qürurla xidmət edirik.'} />
                  </p>
                  <p>
                    <LangUtil en={'Princeton Tec continues to nurture our brand with the same spirit of innovation that got us to where we are today, as we persist in our pursuit to push limits and empower oursleves to go further.'} az={'Princeton Tec, sərhədləri aşmaq və daha da irəli getmək üçün öz gücümüzü gücləndirmək üçün səylərimizi davam etdirdiyimiz üçün bizi bugünkü vəziyyətə gətirən eyni innovasiya ruhu ilə brendimizi inkişaf etdirməyə davam edir.'} />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div data-aos='fade-right' className="social-media-sec d-flex flex-column justify-content-center align-items-center">
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

export default AboutUs