const ActivityCard = ({ title, img }) => {
    return (
        <div className="d-flex align-items-end text-light activitycard" style={{ width: "17rem", height: "56vh", writingMode: "vertical-rl", background: `url(${img})`, backgroundSize:"cover", fontSize:"5em" }}>{title.toUpperCase()}</div>
    )
}

export default ActivityCard