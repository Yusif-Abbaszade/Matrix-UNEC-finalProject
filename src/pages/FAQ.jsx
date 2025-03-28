import { useContext, useEffect } from "react"
import { NavbarContext } from "../context/NavbarContext";
import LangUtil from "../utils/LangUtil"; // Assuming LangUtil is located in utils folder

const FAQ = () => {
const [navbarTheme, setNavbarTheme] = useContext(NavbarContext);
    useEffect(() => {
        document.getElementsByTagName('body')[0].style.backgroundColor = '#e8dfd0'
        setNavbarTheme('light');
    }, [])

    return (
        <div className="faq-sec" style={{ background: "#e8dfd0" }}>
            <div className="background-for-faq-overlay d-flex align-items-center">
                <p className="ms-5 h1 fw-bold text-light" style={{ fontSize: "40px" }}>
                    <LangUtil en={"WE’RE HERE TO HELP"} az={"BİZ BURADAYIQ KÖMƏK ETMƏK ÜÇÜN"} />
                </p>
            </div>
            <div className="container main-faq">
                <p className="fw-bold" style={{ fontSize: "40px" }}>
                    <div className="fw-bold">
                        <LangUtil en={"FREQUENTLY ASKED"} az={"TEZ-TEZ VERİLƏN"} />
                    </div>
                    <div className="fw-bold" style={{ color: "#b49360" }}>
                        <LangUtil en={"QUESTIONS"} az={"SUALLAR"} />
                    </div>
                </p>
                <div className="accordion my-5" data-bs-theme='dark' id="accordionExample">
                    <div className="accordion-item mb-3">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed fw-bold fs-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <LangUtil en={"How do I file a warranty claim?"} az={"Zəmanət iddiasını necə təqdim edə bilərəm?"} />
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <LangUtil 
                                    en={"If you’re experiencing a rare issue with a faulty product, or your light has met an untimely end due to no user damage, scroll down this page further or click here."} 
                                    az={"Əgər nasaz məhsulla bağlı nadir bir problem yaşayırsınızsa və ya işığınız istifadəçi zədəsi olmadan vaxtsız olaraq sıradan çıxıbsa, bu səhifəni aşağı sürüşdürün və ya bura klikləyin."} 
                                />
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item mb-3">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed fw-bold fs-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <LangUtil en={"Where can I find my new product’s manual?"} az={"Yeni məhsulumun təlimatını haradan tapa bilərəm?"} />
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <LangUtil 
                                    en={"All of our product manuals are located here. Can’t find your specific product? Reach out to our customer service team at questions@princetontec.com."} 
                                    az={"Bütün məhsul təlimatlarımız buradadır. Xüsusi məhsulunuzu tapa bilmirsiniz? questions@princetontec.com ünvanında müştəri xidmətləri komandamızla əlaqə saxlayın."} 
                                />
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item mb-3">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed fw-bold fs-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <LangUtil en={"Can I purchase from your website from outside the U.S.?"} az={"ABŞ-dan kənarda vebsaytınızdan alış-veriş edə bilərəmmi?"} />
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <LangUtil 
                                    en={"We currently don’t ship outside of the USA, but you can check with our many distributers or find a retailer here."} 
                                    az={"Hazırda ABŞ-dan kənara göndərmirik, lakin bir çox distribyutorlarımızla əlaqə saxlaya və ya buradan pərakəndə satıcı tapa bilərsiniz."} 
                                />
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item mb-3">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed fw-bold fs-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                <LangUtil en={"What do IPX ratings mean?"} az={"IPX reytinqləri nə deməkdir?"} />
                            </button>
                        </h2>
                        <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p className="mb-4">
                                    <LangUtil 
                                        en={"Our IPX ratings denote the level of water resistance each of our lights have. Here’s a complete breakdown of the IPX ratings associated with our products:"} 
                                        az={"IPX reytinqlərimiz işıqlarımızın hər birinin suya davamlılıq səviyyəsini göstərir. Məhsullarımızla əlaqəli IPX reytinqlərinin tam təfərrüatı:"} 
                                    />
                                </p>
                                <p>
                                    <LangUtil 
                                        en={"IPX4: Protected against splashing water and light rain."} 
                                        az={"IPX4: Su sıçraması və yüngül yağışa qarşı qorunur."} 
                                    />
                                </p>
                                <p>
                                    <LangUtil 
                                        en={"IPX6: Protected against high pressure water and heavy rain."} 
                                        az={"IPX6: Yüksək təzyiqli suya və güclü yağışa qarşı qorunur."} 
                                    />
                                </p>
                                <p>
                                    <LangUtil 
                                        en={"IPX7: Withstands complete submersion in water up to 1 meter in depth for up to 30 minutes."} 
                                        az={"IPX7: 1 metr dərinliyə qədər suda tam batmağa 30 dəqiqəyə qədər davam gətirir."} 
                                    />
                                </p>
                                <p>
                                    <LangUtil 
                                        en={"IPX8: Withstands complete and continuous submersion in water in depths greater than 1 meter."} 
                                        az={"IPX8: 1 metrdən çox dərinlikdə suda tam və davamlı batmağa davam gətirir."} 
                                    />
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item mb-3">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed fw-bold fs-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                <LangUtil en={"How do I join the affiliate program?"} az={"Tərəfdaşlıq proqramına necə qoşula bilərəm?"} />
                            </button>
                        </h2>
                        <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <LangUtil 
                                    en={"To join the Princeton Tec affiliate program, fill out the application here."} 
                                    az={"Princeton Tec tərəfdaşlıq proqramına qoşulmaq üçün ərizəni buradan doldurun."} 
                                />
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item mb-3">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed fw-bold fs-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                <LangUtil en={"Why won’t my light turn on?"} az={"Niyə işığım yanmır?"} />
                            </button>
                        </h2>
                        <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <LangUtil 
                                    en={"If you’ve already swapped batteries/ensured a full charge, be sure your light hasn’t been “locked out.” Some of our lights feature a lockout to avoid accidental activation. See your products’ manuals here to review how to deactivate the lockout. If this doesn’t help, reach out to our customer service team at questions@princetontec.com."} 
                                    az={"Əgər artıq batareyaları dəyişdirmisinizsə/tam doldurulmasını təmin etmisinizsə, işığınızın “kilidlənmədiyinə” əmin olun. Bəzi işıqlarımız təsadüfi aktivləşmənin qarşısını almaq üçün kilidləmə funksiyasına malikdir. Kilidləməni necə deaktiv edəcəyinizi nəzərdən keçirmək üçün məhsul təlimatlarınıza buradan baxın. Bu kömək etmirsə, questions@princetontec.com ünvanında müştəri xidmətləri komandamızla əlaqə saxlayın."} 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQ