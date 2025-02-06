import { useEffect } from "react"

const Warranty = () => {
    useEffect(() => {
        document.getElementsByTagName('body')[0].style.backgroundColor = '#f0ebe3'
    }, [])
    return (
        <div className="warranty-sec">
            <div className="background-for-warranty-overlay d-flex align-items-center">
                <p className="ms-5 h1 fw-bold text-light" style={{ fontSize: "40px" }}>WE’RE HERE TO HELP</p>
            </div>
            <div className="container px-5 warranty-main">
                <h1 className="fw-bold">WARRANTY</h1>
                <p className="fs-5">To file a warranty claim for your Princeton Tec product, please click here for our Warranty Support form. If you cannot use this form, feel free to email <span className="fw-bold">(support@princetontec.com)</span> or call <span className="fw-bold">(1-800-257-9080)</span> our Customer Service team for assistance. To find the details of the specific warranty that covers your product, please see the breakdowns below.</p>
                <ul className="fs-5 mt-5">
                    <li>If we determine that your light needs to be sent back to us for repairs or replacement, we will give you a Return Merchandise Authorization (RMA) number. Note: no warranty work can be completed without first obtaining an RMA number from Princeton Tec. (Sorry!)</li>
                    <li className="mt-3">Once you receive your RMA number, ship the defective product back to Princeton Tec at the address provided.</li>
                    <li className="mt-3">If possible, we will repair the light. Otherwise, we will replace your light with an identical product or, if the product is no longer available, a comparable product. We will then ship the repaired or replaced light back to you. Average turnaround times during non-peak seasons are 2-3 weeks. Our Customer Service team is located at Princeton Tec HQ, live and in person, Monday through Friday, 8:30 am through 5 pm (EST).</li>
                </ul>
                <ul className="fs-5 list-unstyled">
                    <li>
                        <p className="fw-bold">USA– International 1-Year Warranty WARRANTY</p>
                        <p>– Princeton Tec warrants this product to be free from defects in workmanship and materials under normal use for one year. This warranty covers all of the component parts of the product except batteries and incandescent bulbs. This warranty does not cover deterioration due to normal wear or damage due to misuse, alteration, negligence, accidents, or unauthorized repair. Princeton Tec will repair or replace parts which are defective in workmanship or materials.</p>
                        <p>Your authorized Princeton Tec Dealer and Princeton Tec are the only facilities authorized to repair the product. After (3) unsuccessful attempts (within the warranty period) to repair the product, you have the right to elect replacement of the product or a refund of the purchase price less allowance for use of the product. NO INCIDENTAL OR CONSEQUENTIAL DAMAGES ARE INCLUDED IN THIS WARRANTY. (Some states do not allow the exclusion or limitation of incidental or consequential damages, so the above limitations or exclusions may not apply to you.) This warranty gives you specific legal rights, and you may also have other rights which vary from state to state.</p>
                    </li>
                    <li>
                        <p className="fw-bold">USA– International 3-Year Warranty WARRANTY</p>
                        <p>– Princeton Tec warrants this product to be free from defects in workmanship and materials under normal use for three years. This warranty covers all of the component parts of the product except batteries and incandescent bulbs. This warranty does not cover deterioration due to normal wear or damage due to misuse, alteration, negligence, accidents, or unauthorized repair. Princeton Tec will repair or replace parts which are defective in workmanship or materials.</p>
                        <p>Your authorized Princeton Tec Dealer and Princeton Tec are the only facilities authorized to repair the product. After (3) unsuccessful attempts (within the warranty period) to repair the product, you have the right to elect replacement of the product or a refund of the purchase price less allowance for use of the product. NO INCIDENTAL OR CONSEQUENTIAL DAMAGES ARE INCLUDED IN THIS WARRANTY. (Some states do not allow the exclusion or limitation of incidental or consequential damages, so the above limitations or exclusions may not apply to you.) This warranty gives you specific legal rights, and you may also have other rights which vary from state to state.</p>
                    </li>
                    <li>
                        <p className="fw-bold">USA– International 5-Year Warranty WARRANTY</p>
                        <p>– Princeton Tec warrants this product to be free from defects in workmanship and materials under normal use for 5 years. This warranty covers all of the component parts of the product except batteries and incandescent bulbs. This warranty does not cover deterioration due to normal wear or damage due to misuse, alteration, negligence, accidents, or unauthorized repair. Princeton Tec will repair or replace parts which are defective in workmanship or materials.</p>
                        <p>Your authorized Princeton Tec Dealer and Princeton Tec are the only facilities authorized to repair the product. After (3) unsuccessful attempts (within the warranty period) to repair the product, you have the right to elect replacement of the product or a refund of the purchase price less allowance for use of the product. NO INCIDENTAL OR CONSEQUENTIAL DAMAGES ARE INCLUDED IN THIS WARRANTY. (Some states do not allow the exclusion or limitation of incidental or consequential damages, so the above limitations or exclusions may not apply to you.) This warranty gives you specific legal rights, and you may also have other rights which vary from state to state.</p>
                    </li>
                    <li>
                        <p className="fw-bold">USA Lifetime Warranty – International 10-Year Warranty</p>
                        <p>Due to International regulations, Princeton Tec’s lifetime warranty can only be offered to customers in the USA. Princeton Tec offers a 10-year warranty to our customers outside the USA. FULL WARRANTY – Princeton Tec warrants this product to be free from defects in workmanship and materials under normal use for as long as you own this product. This warranty covers all of the component parts of the product except batteries and incandescent bulbs. This warranty does not cover deterioration due to normal wear or damage due to misuse, alteration, negligence, accidents, or unauthorized repair. Princeton Tec will repair or replace parts which are defective In workmanship or materials.</p>
                        <p>Your authorized Princeton Tec Dealer and Princeton Tec are the only facilities authorized to repair the product. After (3) unsuccessful attempts to repair the product, you have the right to elect replacement of the product or a refund of the purchase price less allowance for use of the product. NO INCIDENTAL OR CONSEQUENTIAL DAMAGES ARE INCLUDED IN THIS WARRANTY. (Some states do not allow the exclusion or limitation of incidental or consequential damages, so the above limitations or exclusions may not apply to you.) This warranty gives you specific legal rights, and you may also have other rights which vary from state to state.</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Warranty