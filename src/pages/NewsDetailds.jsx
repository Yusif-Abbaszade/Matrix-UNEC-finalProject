import { useContext, useEffect } from 'react';
import { NavbarContext } from '../context/NavbarContext';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import slugify from 'slugify';
import { ThemeContext } from '../context/ThemeContext';

const NewsDetailds = () => {
    const [navbarTheme, setNavbarTheme] = useContext(NavbarContext);
    const { theme } = useContext(ThemeContext);
    const { newslug } = useParams();
    const newsdata = useSelector(p => p.news);
    const data = newsdata.find(i => slugify(i.title, { lower: true }) === newslug);
    useEffect(() => {
        if (theme === 'light') {
            document.getElementsByTagName('body')[0].style.backgroundColor = '#000';
            document.querySelector('.newsdetails-page').style.color = 'white';
            setNavbarTheme('light');
        } else {
            document.getElementsByTagName('body')[0].style.backgroundColor = '#F0EBE3';
            document.querySelector('.newsdetails-page').style.color = 'black';
            setNavbarTheme('light');
        }
    }, [theme])
    return (
        <div className="newsdetails-page">
            <div className="blacksc" style={{ height: "30vh", width: "100%", backgroundColor: "black", position: "absolute", top: "0", zIndex: "-999" }}></div>
            <div className='headersc-text' style={{ height: "30vh", width: "100%", background: "black" }}>
                <div className="container pt-5">
                    <p style={{ color: "#7B6441" }} className='fs-5 fw-bold'>{data.creationDate}</p>
                    <p className='fs-1 fw-bolder text-light'>{data.title}</p>
                </div>
            </div>
            <div className="head-overlay" style={{ height: "100vh", background: `url(${data.bgimg})`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
                <div className="top-blur"></div>
            </div>
            <div className="container texts-sec">
                <p>{data.maintext}</p>
                {data.context.map((item, index) => (
                    <div key={index}>
                        <p className='fs-2 fw-bolder my-5'>{item.header}</p>
                        <p>{item.text}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default NewsDetailds