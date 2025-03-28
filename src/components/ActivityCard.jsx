import { useNavigate } from "react-router-dom"

const ActivityCard = ({ title, img, navigatelink }) => {
    const navigate = useNavigate();
    return (
        <div className="d-flex align-items-end text-light activitycard" onClick={()=>{navigate(navigatelink)}} style={{ width: "17rem", height: "56vh", writingMode: "vertical-rl", background: `url(${img})`, backgroundSize:"cover", fontSize:"5em", margin:"0 auto" }}>{title.toUpperCase()}</div>
    )
}

export default ActivityCard