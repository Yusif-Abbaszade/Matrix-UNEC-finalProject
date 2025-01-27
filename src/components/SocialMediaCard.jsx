const SocialMediaCard = ({bgimg, link}) => {
  return (
    <a href={link} target="_blank" className="social-media-card" style={{display:"block" ,width:"250px", height:"250px" ,backgroundImage: `url(${bgimg})`, objectFit: "cover", backgroundRepeat: "no-repeat", backgroundSize:"cover", marginLeft:"30px"}}></a>
  )
}

export default SocialMediaCard