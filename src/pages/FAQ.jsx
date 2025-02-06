import { useEffect } from "react"

const FAQ = () => {

    useEffect(() => {
        document.getElementsByTagName('body')[0].style.backgroundColor = '#e8dfd0'
    }, [])

    return (
        <div className="faq-sec" style={{ background: "#e8dfd0" }}>
            <div className="background-for-faq-overlay d-flex align-items-center">
                <p className="ms-5 h1 fw-bold text-light" style={{ fontSize: "40px" }}>WE’RE HERE TO HELP</p>
            </div>
            <div className="container main-faq">
                <p className="fw-bold" style={{ fontSize: "40px" }}><div className="fw-bold">FREQUENTLY ASKED</div><div className="fw-bold" style={{ color: "#b49360" }}>QUESTIONS</div></p>
                <div className="accordion my-5" data-bs-theme='dark' id="accordionExample">
                    <div className="accordion-item mb-3">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed fw-bold fs-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                How do I file a warranty claim?
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                If you’re experiencing a rare issue with a faulty product, or your light has met an untimely end due to no user damage, scroll down this page further or click here.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item mb-3">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed fw-bold fs-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Where can I find my new product’s manual?
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                All of our product manuals are located here. Can’t find your specific product? Reach out to our customer service team at questions@princetontec.com.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item mb-3">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed fw-bold fs-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Can I purchase from your website from outside the U.S.?
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                We currently don’t ship outside of the USA, but you can check with our many distributers or find a retailer here.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item mb-3">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed fw-bold fs-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                What do IPX ratings mean?
                            </button>
                        </h2>
                        <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p className="mb-4">
                                    Our IPX ratings denote the level of water resistance each of our lights have. Here’s a complete breakdown of the IPX ratings associated with our products:
                                </p>
                                <p>
                                    IPX4: Protected against splashing water and light rain.
                                </p>
                                <p>
                                    IPX6: Protected against high pressure water and heavy rain.
                                </p>
                                <p>
                                    IPX7: Withstands complete submersion in water up to 1 meter in depth for up to 30 minutes.
                                </p>
                                <p>
                                    IPX8: Withstands complete and continuous submersion in water in depths greater than 1 meter.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item mb-3">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed fw-bold fs-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                How do I join the affiliate program?
                            </button>
                        </h2>
                        <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                To join the Princeton Tec affiliate program, fill out the application here.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item mb-3">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed fw-bold fs-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                Why won’t my light turn on?
                            </button>
                        </h2>
                        <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                If you’ve already swapped batteries/ensured a full charge, be sure your light hasn’t been “locked out.” Some of our lights feature a lockout to avoid accidental activation. See your products’ manuals here to review how to deactivate the lockout. If this doesn’t help, reach out to our customer service team at questions@princetontec.com.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQ