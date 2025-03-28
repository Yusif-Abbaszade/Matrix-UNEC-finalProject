import { useContext, useEffect } from "react"
import { NavbarContext } from "../context/NavbarContext";
import LangUtil from "../utils/LangUtil";

const Warranty = () => {
    const [navbarTheme, setNavbarTheme] = useContext(NavbarContext);
    useEffect(() => {
        document.getElementsByTagName('body')[0].style.backgroundColor = '#f0ebe3'
        setNavbarTheme('light')
    }, [])
    return (
        <div className="warranty-sec">
            <div className="background-for-warranty-overlay d-flex align-items-center">
                <p className="ms-5 h1 fw-bold text-light" style={{ fontSize: "40px" }}><LangUtil en={'WE’RE HERE TO HELP'} az={'KÖMƏK ETMƏK ÜÇÜN BURAYIQ'}  /></p>
            </div>
            <div className="container px-5 warranty-main">
                <h1 className="fw-bold"><LangUtil en={'CONTACT&WARRANTY'} az={'ƏLAQƏ&ZƏMANƏT'} /></h1>
                <p className="fs-5"><LangUtil en={'To file a warranty claim for your Princeton Tec product, please click here for our Warranty Support form. If you cannot use this form, feel free to email'} az={'Princeton Tec məhsulunuz üçün zəmanət iddiası təqdim etmək üçün Zəmanət Dəstəyi forması üçün bura klikləyin. Bu formadan istifadə edə bilmirsinizsə, e-poçt göndərməkdən çəkinməyin'} /> <span className="fw-bold">(support@princetontec.com)</span> or call <span className="fw-bold">(1-800-257-9080)</span> <LangUtil en={'our Customer Service team for assistance. To find the details of the specific warranty that covers your product, please see the breakdowns below.'} az={'yardım üçün Müştəri Xidmətləri komandamız. Məhsulunuzu əhatə edən spesifik zəmanətin təfərrüatlarını tapmaq üçün, lütfən, aşağıdakı nasazlıqlara baxın.'} /></p>
                <ul className="fs-5 mt-5">
                    <li><LangUtil en={'If we determine that your light needs to be sent back to us for repairs or replacement, we will give you a Return Merchandise Authorization (RMA) number. Note: no warranty work can be completed without first obtaining an RMA number from Princeton Tec. (Sorry!)'} az={'İşığınızın təmir və ya dəyişdirilməsi üçün bizə geri göndərilməsinin lazım olduğunu müəyyən etsək, biz sizə Malların Geri qaytarılması üçün icazə (RMA) nömrəsi verəcəyik. Qeyd: Princeton Tec-dən RMA nömrəsi almadan heç bir zəmanət işi tamamlana bilməz. (Bağışlayın!)'} /></li>
                    <li className="mt-3"><LangUtil en={'Once you receive your RMA number, ship the defective product back to Princeton Tec at the address provided.'} az={'RMA nömrənizi aldıqdan sonra qüsurlu məhsulu göstərilən ünvanda Princeton Tec-ə göndərin.'} /></li>
                    <li className="mt-3"><LangUtil en={'If possible, we will repair the light. Otherwise, we will replace your light with an identical product or, if the product is no longer available, a comparable product. We will then ship the repaired or replaced light back to you. Average turnaround times during non-peak seasons are 2-3 weeks. Our Customer Service team is located at Princeton Tec HQ, live and in person, Monday through Friday, 8:30 am through 5 pm (EST).'} az={'Mümkünsə, işığı təmir edəcəyik. Əks təqdirdə, işığınızı eyni məhsulla və ya məhsul artıq mövcud deyilsə, müqayisə edilə bilən məhsulla əvəz edəcəyik. Daha sonra təmir edilmiş və ya dəyişdirilmiş işığı sizə göndərəcəyik. Qeyri-pik mövsümlərdə orta dövriyyə müddəti 2-3 həftədir. Müştəri Xidmətləri komandamız Princeton Tec HQ-da, canlı və şəxsən, Bazar ertəsindən Cümə gününə qədər, səhər 8:30-dan axşam 5-ə qədər (EST) yerləşir.'} /></li>
                </ul>
                <ul className="fs-5 list-unstyled">
                    <li>
                        <p className="fw-bold"><LangUtil en={'USA– International 1-Year Warranty WARRANTY'} az={'ABŞ– Beynəlxalq 1-İllik Zəmanət'} /></p>
                        <p><LangUtil en={'Princeton Tec warrants this product to be free from defects in workmanship and materials under normal use for one year. This warranty covers all of the component parts of the product except batteries and incandescent bulbs. This warranty does not cover deterioration due to normal wear or damage due to misuse, alteration, negligence, accidents, or unauthorized repair. Princeton Tec will repair or replace parts which are defective in workmanship or materials.'} az={'Princeton Tec bu məhsulun normal istifadə zamanı bir il ərzində işçilik və material qüsurlarından azad olduğunu təmin edir. Bu zəmanət məhsulun batareyalar və közərmə lampaları istisna olmaqla bütün komponent hissələrini əhatə edir. Bu zəmanət normal aşınma və ya sui-istifadə, dəyişiklik, səhlənkarlıq, qəzalar və ya icazəsiz təmir nəticəsində yaranan zədələnməni əhatə etmir. Princeton Tec işçilik və ya material qüsurlu hissələri təmir edəcək və ya əvəz edəcək.'} /></p>
                        <p><LangUtil en={'Your authorized Princeton Tec Dealer and Princeton Tec are the only facilities authorized to repair the product. After (3) unsuccessful attempts (within the warranty period) to repair the product, you have the right to elect replacement of the product or a refund of the purchase price less allowance for use of the product. NO INCIDENTAL OR CONSEQUENTIAL DAMAGES ARE INCLUDED IN THIS WARRANTY. (Some states do not allow the exclusion or limitation of incidental or consequential damages, so the above limitations or exclusions may not apply to you.) This warranty gives you specific legal rights, and you may also have other rights which vary from state to state.'} az={'Sizin səlahiyyətli Princeton Tec Satıcınız və Princeton Tec məhsulu təmir etmək üçün yeganə səlahiyyətli müəssisələrdir. Məhsulun təmiri üçün (3) uğursuz cəhddən (zəmanət müddəti ərzində) sonra məhsulun dəyişdirilməsini və ya məhsulun istifadəsi üçün güzəştlər çıxılmaqla alış qiymətinin geri qaytarılmasını seçmək hüququnuz var. BU ZƏMANƏTƏ HEÇ BİR TƏSADÜFİ VƏ YA NƏTİCƏLİ ZƏRƏRLƏR DAXİL DEYİL. (Bəzi ştatlar təsadüfi və ya nəticəli zərərlərin istisna edilməsinə və ya məhdudlaşdırılmasına icazə vermir, ona görə də yuxarıdakı məhdudiyyətlər və ya istisnalar sizə şamil edilməyə bilər.) Bu zəmanət sizə xüsusi qanuni hüquqlar verir və sizdə də ola bilər. ştatdan ştata dəyişən digər hüquqlar.'} /></p>
                    </li>
                    <li>
                        <p className="fw-bold"><LangUtil en={'USA– International 3-Year Warranty WARRANTY'} az={'ABŞ– Beynəlxalq 3-İllik Zəmanət'} /></p>
                        <p><LangUtil en={'Princeton Tec warrants this product to be free from defects in workmanship and materials under normal use for three years. This warranty covers all of the component parts of the product except batteries and incandescent bulbs. This warranty does not cover deterioration due to normal wear or damage due to misuse, alteration, negligence, accidents, or unauthorized repair. Princeton Tec will repair or replace parts which are defective in workmanship or materials.'} az={'Princeton Tec bu məhsulun normal istifadə zamanı üç il ərzində işçilik və material qüsurlarından azad olduğunu təmin edir. Bu zəmanət məhsulun batareyalar və közərmə lampaları istisna olmaqla bütün komponent hissələrini əhatə edir. Bu zəmanət normal aşınma və ya sui-istifadə, dəyişiklik, səhlənkarlıq, qəzalar və ya icazəsiz təmir nəticəsində yaranan zədələnməni əhatə etmir. Princeton Tec işçilik və ya material qüsurlu hissələri təmir edəcək və ya əvəz edəcək.'} /></p>
                        <p><LangUtil en={'Your authorized Princeton Tec Dealer and Princeton Tec are the only facilities authorized to repair the product. After (3) unsuccessful attempts (within the warranty period) to repair the product, you have the right to elect replacement of the product or a refund of the purchase price less allowance for use of the product. NO INCIDENTAL OR CONSEQUENTIAL DAMAGES ARE INCLUDED IN THIS WARRANTY. (Some states do not allow the exclusion or limitation of incidental or consequential damages, so the above limitations or exclusions may not apply to you.) This warranty gives you specific legal rights, and you may also have other rights which vary from state to state.'} az={'Sizin səlahiyyətli Princeton Tec Satıcınız və Princeton Tec məhsulu təmir etmək üçün yeganə səlahiyyətli müəssisələrdir. Məhsulun təmiri üçün (3) uğursuz cəhddən (zəmanət müddəti ərzində) sonra məhsulun dəyişdirilməsini və ya məhsulun istifadəsi üçün güzəştlər çıxılmaqla alış qiymətinin geri qaytarılmasını seçmək hüququnuz var. BU ZƏMANƏTƏ HEÇ BİR TƏSADÜFİ VƏ YA NƏTİCƏLİ ZƏRƏRLƏR DAXİL DEYİL. (Bəzi ştatlar təsadüfi və ya nəticəli zərərlərin istisna edilməsinə və ya məhdudlaşdırılmasına icazə vermir, ona görə də yuxarıdakı məhdudiyyətlər və ya istisnalar sizə şamil edilməyə bilər.) Bu zəmanət sizə xüsusi qanuni hüquqlar verir və sizdə də ola bilər. ştatdan ştata dəyişən digər hüquqlar.'} /></p>
                    </li>
                    <li>
                        <p className="fw-bold"><LangUtil en={'USA– International 5-Year Warranty WARRANTY'} az={'ABŞ– Beynəlxalq 5-İllik Zəmanət'} /></p>
                        <p><LangUtil en={'Princeton Tec warrants this product to be free from defects in workmanship and materials under normal use for 5 years. This warranty covers all of the component parts of the product except batteries and incandescent bulbs. This warranty does not cover deterioration due to normal wear or damage due to misuse, alteration, negligence, accidents, or unauthorized repair. Princeton Tec will repair or replace parts which are defective in workmanship or materials.'} az={'Princeton Tec bu məhsulun normal istifadə zamanı beş il ərzində işçilik və material qüsurlarından azad olduğunu təmin edir. Bu zəmanət məhsulun batareyalar və közərmə lampaları istisna olmaqla bütün komponent hissələrini əhatə edir. Bu zəmanət normal aşınma və ya sui-istifadə, dəyişiklik, səhlənkarlıq, qəzalar və ya icazəsiz təmir nəticəsində yaranan zədələnməni əhatə etmir. Princeton Tec işçilik və ya material qüsurlu hissələri təmir edəcək və ya əvəz edəcək.'} /></p>
                        <p><LangUtil en={'Your authorized Princeton Tec Dealer and Princeton Tec are the only facilities authorized to repair the product. After (3) unsuccessful attempts (within the warranty period) to repair the product, you have the right to elect replacement of the product or a refund of the purchase price less allowance for use of the product. NO INCIDENTAL OR CONSEQUENTIAL DAMAGES ARE INCLUDED IN THIS WARRANTY. (Some states do not allow the exclusion or limitation of incidental or consequential damages, so the above limitations or exclusions may not apply to you.) This warranty gives you specific legal rights, and you may also have other rights which vary from state to state.'} az={'Sizin səlahiyyətli Princeton Tec Satıcınız və Princeton Tec məhsulu təmir etmək üçün yeganə səlahiyyətli müəssisələrdir. Məhsulun təmiri üçün (3) uğursuz cəhddən (zəmanət müddəti ərzində) sonra məhsulun dəyişdirilməsini və ya məhsulun istifadəsi üçün güzəştlər çıxılmaqla alış qiymətinin geri qaytarılmasını seçmək hüququnuz var. BU ZƏMANƏTƏ HEÇ BİR TƏSADÜFİ VƏ YA NƏTİCƏLİ ZƏRƏRLƏR DAXİL DEYİL. (Bəzi ştatlar təsadüfi və ya nəticəli zərərlərin istisna edilməsinə və ya məhdudlaşdırılmasına icazə vermir, ona görə də yuxarıdakı məhdudiyyətlər və ya istisnalar sizə şamil edilməyə bilər.) Bu zəmanət sizə xüsusi qanuni hüquqlar verir və sizdə də ola bilər. ştatdan ştata dəyişən digər hüquqlar.'} /></p>
                    </li>
                    <li>
                        <p className="fw-bold"><LangUtil en={'USA Lifetime Warranty – International 10-Year Warranty'} az={'ABŞ Ömürlük Zəmanət – Beynəlxalq 10-İllik Zəmanət'} /></p>
                        <p><LangUtil en={'Due to International regulations, Princeton Tec’s lifetime warranty can only be offered to customers in the USA. Princeton Tec offers a 10-year warranty to our customers outside the USA. FULL WARRANTY – Princeton Tec warrants this product to be free from defects in workmanship and materials under normal use for as long as you own this product. This warranty covers all of the component parts of the product except batteries and incandescent bulbs. This warranty does not cover deterioration due to normal wear or damage due to misuse, alteration, negligence, accidents, or unauthorized repair. Princeton Tec will repair or replace parts which are defective In workmanship or materials.'} az={'Beynəlxalq qaydalara görə, Princeton Tec-in ömürlük zəmanəti yalnız ABŞ-dakı müştərilərə təklif edilə bilər. Princeton Tec ABŞ-dan kənarda olan müştərilərimizə 10 illik zəmanət təklif edir. TAM ZƏMANƏT – Princeton Tec bu məhsulun normal istifadə zamanı işçilik və material qüsurlarından azad olduğunu təmin edir. Bu zəmanət məhsulun batareyalar və közərmə lampaları istisna olmaqla bütün komponent hissələrini əhatə edir. Bu zəmanət normal aşınma və ya sui-istifadə, dəyişiklik, səhlənkarlıq, qəzalar və ya icazəsiz təmir nəticəsində yaranan zədələnməni əhatə etmir. Princeton Tec işçilik və ya material qüsurlu hissələri təmir edəcək və ya əvəz edəcək.'} /></p>
                        <p><LangUtil en={'Your authorized Princeton Tec Dealer and Princeton Tec are the only facilities authorized to repair the product. After (3) unsuccessful attempts to repair the product, you have the right to elect replacement of the product or a refund of the purchase price less allowance for use of the product. NO INCIDENTAL OR CONSEQUENTIAL DAMAGES ARE INCLUDED IN THIS WARRANTY. (Some states do not allow the exclusion or limitation of incidental or consequential damages, so the above limitations or exclusions may not apply to you.) This warranty gives you specific legal rights, and you may also have other rights which vary from state to state.'} az={'Sizin səlahiyyətli Princeton Tec Satıcınız və Princeton Tec məhsulu təmir etmək üçün yeganə səlahiyyətli müəssisələrdir. Məhsulun təmiri üçün (3) uğursuz cəhddən sonra məhsulun dəyişdirilməsini və ya məhsulun istifadəsi üçün güzəştlər çıxılmaqla alış qiymətinin geri qaytarılmasını seçmək hüququnuz var. BU ZƏMANƏTƏ HEÇ BİR TƏSADÜFİ VƏ YA NƏTİCƏLİ ZƏRƏRLƏR DAXİL DEYİL. (Bəzi ştatlar təsadüfi və ya nəticəli zərərlərin istisna edilməsinə və ya məhdudlaşdırılmasına icazə vermir, ona görə də yuxarıdakı məhdudiyyətlər və ya istisnalar sizə şamil edilməyə bilər.) Bu zəmanət sizə xüsusi qanuni hüquqlar verir və sizdə də ola bilər. ştatdan ştata dəyişən digər hüquqlar.'} /></p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Warranty