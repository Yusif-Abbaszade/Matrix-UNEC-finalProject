import { IconContext } from "react-icons";
import { CiSun, CiTimer } from "react-icons/ci";
import { FaWater } from "react-icons/fa";
import { LiaFeatherAltSolid } from "react-icons/lia";
import { useSelector } from "react-redux";
import slugify from "slugify";
import LangUtil from "../utils/LangUtil";


const ProductCardForHome = ({ title, price, img, imghover, itemHovered, props, uuid }) => {
    return (
        <div className="shopproductcard productcardforhome"  style={{ width: '100%', maxWidth: "22rem" }}>
            <p className="productname fw-bold mb-5 mt-3 pt-3 ms-3" style={{ fontSize: "25px" }}>{title}</p>
            <p className="productprice float-end h6 me-2">${price}</p>
            <div className="container d-flex justify-content-center imgsc">
                <img src={img === itemHovered ? imghover : img} width={"100%"} alt="" />
            </div>
            <div className="bottomsec container-fluid">
                <ul className="list-unstyled d-flex justify-content-between">
                    <li>
                        <IconContext.Provider value={{ color: "#d7c6af", size: "2em" }}>
                            <CiSun />
                        </IconContext.Provider>
                        <p className="counts">{props.lumen}</p>
                        <p><LangUtil en={'Lumens'} az={'Lümen'} /></p>
                    </li>
                    <li>
                        <IconContext.Provider value={{ color: "#d7c6af", size: "2em" }}>
                            <CiTimer />
                        </IconContext.Provider>
                        <p className="counts">{props.timestamp}</p>
                        <p><LangUtil en={'Run Time'} az={'İş vaxtı'} /></p>
                    </li>
                    <li>
                        <IconContext.Provider value={{ color: "#d7c6af", size: "2em" }}>
                            <FaWater />
                        </IconContext.Provider>
                        <p className="counts">{props.waterproof}</p>
                        <p><LangUtil en={'Water Resistant'} az={'Suya davamlı'} /></p>
                    </li>
                    <li>
                        <IconContext.Provider value={{ color: "#d7c6af", size: "2em" }}>
                            <LiaFeatherAltSolid />
                        </IconContext.Provider>
                        <p className="counts">{props.weight}</p>
                        <p><LangUtil en={'Weight'} az={'Çəki'} /></p>
                    </li>
                </ul>
                <div className="quick-view-sec"  data-bs-toggle="modal" data-bs-target={`#shopcardmodal-${slugify(uuid, { lower: true })}`} style={{cursor:"pointer",overflowX:"hidden"}} >
                    <LangUtil  en={'Quick View'} az={'Sürətli Baxış'}/>
                </div>
            </div>
        </div>
    )
}

export default ProductCardForHome