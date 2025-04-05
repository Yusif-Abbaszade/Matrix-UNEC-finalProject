import { useContext, useEffect } from "react"
import { NavbarContext } from "../context/NavbarContext"
import { Link } from "react-router-dom";

const NotFoundPage = () => {
    const [navbarTheme, setNavbarTheme] = useContext(NavbarContext);
    useEffect(() => {
        document.getElementsByTagName('body')[0].style.backgroundColor = '#ebe3d6'
        setNavbarTheme('black')
    }, [])
    const waweText = ['O', 'o', 'p', 's', '!', 'P', 'a', 'g', 'e', 'n', 'o', 't', 'f', 'o', 'u', 'n', 'd', '!'];
    return (
        <div className="container text-center">
            <div className="text-center fs-1 fw-bold mt-5 mb-4 wavetext-container">
                {waweText.map((char, index) => (
                    <span key={index}>{char}</span>
                ))}
            </div>
            <img className="notfoundimg" src="https://cdn4.iconfinder.com/data/icons/zwo-data-internet-vol-1/25/page_error_404_not_found-512.png" alt="" />
            <p className="text-center fs-5 mb-4">It seems like whatever you were looking for does not exist. Maybe try a search?</p>
            <Link to={'/'} className="btn backtohomebtn mb-5">Back To Homepage</Link>
        </div>
    )
}

export default NotFoundPage