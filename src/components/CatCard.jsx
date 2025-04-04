import { IconContext } from "react-icons"
import { RxCornerBottomRight, RxCornerTopLeft } from "react-icons/rx"
import { Link, useNavigate } from "react-router-dom"

const CatCard = ({ width, height, bgimg, text, navigatelink }) => {
    const navigate = useNavigate();
    return (
        <div className="catcard d-flex justify-content-center align-items-center" onClick={()=>{navigate(navigatelink)}} style={{ width: width, height: height, backgroundImage: `url(${bgimg})`, objectFit: "cover", backgroundRepeat: "no-repeat" }}>
            <div className="text text-light">
                <IconContext.Provider value={{ size: "2em", color: "white", className:"RxCornerTopLeft"}}>
                    <RxCornerTopLeft />
                </IconContext.Provider>
                <Link to='/' className="catcard-text"><b>{text}</b></Link>
                <IconContext.Provider value={{ size: "2em", color: "white", className:"RxCornerBottomRight"}}>
                    <RxCornerBottomRight />
                </IconContext.Provider>
            </div>
        </div>
    )
}

export default CatCard