import React, { useContext, useEffect } from 'react'
import { IconContext } from 'react-icons'
import { FaTrashCan } from 'react-icons/fa6'
import { LiaTimesSolid } from 'react-icons/lia'
import { useSelector } from 'react-redux'
import { NavbarContext } from '../context/NavbarContext'

const Dashboard = () => {

    const [navbarTheme, setNavbarTheme] = useContext(NavbarContext);

    useEffect(() => {
        document.getElementsByTagName('body')[0].style.backgroundColor = '#ebe3d6';
        setNavbarTheme('black')
    }, [])

    const items = useSelector(p => p.products);
    console.log(items);
    return (
        <div className="container-fluid d-flex justify-content-center">
            <div className="container cart-page d-flex flex-column ">
                <table>
                    <tbody>
                        {items.map((item, index) => (
                            <tr key={index}>
                                <td>
                                    <button className="btn me-2" onClick={() => { }}>
                                        <IconContext.Provider value={{ color: '#B49360', size: '1em' }}>
                                            <LiaTimesSolid />
                                        </IconContext.Provider>
                                    </button>
                                </td>
                                <td>
                                    <img style={{ width: "75px", height: "75px" }} src={item.img} alt="" />
                                </td>
                                <td className="ps-4 card-item-body" >
                                    <p className="fs-3 fw-bolder">{item.title}</p>
                                    <div style={{ width: "100%", height: "1px", background: "#B49360" }} />
                                    <p className="m-0">Color: <span className="fw-bolder ms-2">{item.color}</span></p>
                                    <p className="m-0">Category: <span className="fw-bolder ms-2">{item.category}</span></p>
                                </td>
                                <td className="ms-5 float-end price-quantity d-flex flex-column align-items-center" style={{ minWidth: "110px" }}>
                                    <span className="mb-2">${item.price}</span>
                                    <div className="quantity-sec">
                                        <button className="btn border-black rounded-0 py-1" onClick={() => { }}>-</button>
                                        <span className="mx-2">{1}</span>
                                        <button className="btn border-black rounded-0 py-1" onClick={() => { }}>+</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Dashboard