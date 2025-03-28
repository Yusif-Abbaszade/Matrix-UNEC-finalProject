import { IconContext } from "react-icons";
import { CiSun, CiTimer } from "react-icons/ci";
import { FaWater } from "react-icons/fa";
import { LiaFeatherAltSolid } from "react-icons/lia";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import slugify from "slugify";
import LangUtil from "../utils/LangUtil";


const ShopProductCard = ({ title, price, img, imghover, itemHovered, props, uuid }) => {
    const navigate = useNavigate();
    return (
        <div className="shopproductcard" style={{ width: '100%', maxWidth: "22rem" }}>
            <p className="productname fw-bold mb-5 mt-3 pt-3 ms-3" style={{ fontSize: "25px" }}>{title}</p>
            <p className="productprice float-end h6 me-2">${price}</p>
            <div className="container d-flex justify-content-center imgsc" onClick={()=>{navigate(`/shop/${slugify(title, {lower:true})}`)}} style={{cursor:"pointer"}}>
                <img src={img === itemHovered ? imghover : img} width={"100%"} alt="" />
            </div>
            <div className="bottomsec container-fluid">
                <ul className="list-unstyled d-flex justify-content-between">
                    <li>
                        <IconContext.Provider value={{ color: "#d7c6af", size: "2em" }}>
                            <CiSun />
                        </IconContext.Provider>
                        <p className="counts">{props.lumen}</p>
                        <p>Lumens</p>
                    </li>
                    <li>
                        <IconContext.Provider value={{ color: "#d7c6af", size: "2em" }}>
                            <CiTimer />
                        </IconContext.Provider>
                        <p className="counts">{props.timestamp}</p>
                        <p><LangUtil en={'Run Time'} az={'İşləmə Vaxtı'} /></p>
                    </li>
                    <li>
                        <IconContext.Provider value={{ color: "#d7c6af", size: "2em" }}>
                            <FaWater />
                        </IconContext.Provider>
                        <p className="counts">{props.waterproof}</p>
                        <p><LangUtil en={'Water Resistant'} az={'Suya Davamlılıq'} /></p>
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
                    <LangUtil en={'Quick View'} az={'Sürətli Baxış'} />
                </div>
            </div>
        </div>
    )
}

export default ShopProductCard