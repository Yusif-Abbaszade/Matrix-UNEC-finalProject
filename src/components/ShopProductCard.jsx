import { IconContext } from "react-icons";
import { CiSun, CiTimer } from "react-icons/ci";
import { FaWater } from "react-icons/fa";
import { LiaFeatherAltSolid } from "react-icons/lia";
import { useSelector } from "react-redux";

const ShopProductCard = ({title, price, img, imghover, itemHovered, props}) => {
    return (
        <div className="shopproductcard" style={{ width: '100%', maxWidth:"22rem" }}>
            <p className="productname fw-bold mb-5 mt-3 pt-3 ms-3" style={{ fontSize: "25px" }}>{title}</p>
            <p className="productprice float-end h6 me-2">${price}</p>
            <div className="container d-flex justify-content-center imgsc">
                <img src={img===itemHovered?imghover:img} width={"100%"} alt="" />
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
                        <p>Run Time</p>
                    </li>
                    <li>
                        <IconContext.Provider value={{ color: "#d7c6af", size: "2em" }}>
                            <FaWater />
                        </IconContext.Provider>
                        <p className="counts">{props.waterproof}</p>
                        <p>Water Resistant</p>
                    </li>
                    <li>
                        <IconContext.Provider value={{ color: "#d7c6af", size: "2em" }}>
                            <LiaFeatherAltSolid />
                        </IconContext.Provider>
                        <p className="counts">{props.weight}</p>
                        <p>Weight</p>
                    </li>
                </ul>
                <div className="quick-view-sec">
                    Quick View
                </div>
            </div>
        </div>
    )
}

export default ShopProductCard