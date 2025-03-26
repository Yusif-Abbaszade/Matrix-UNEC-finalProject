import React, { useContext, useEffect } from 'react'
import { IconContext } from 'react-icons'
import { FaTrashCan } from 'react-icons/fa6'
import { LiaTimesSolid } from 'react-icons/lia'
import { useSelector } from 'react-redux'
import { NavbarContext } from '../context/NavbarContext'
import { FaEdit } from "react-icons/fa";
import slugify from 'slugify'
import supabase from '../utils/supabase'
import Swal from 'sweetalert2'
import AuthNavbar from '../layout/AuthNavbar'
const Dashboard = () => {

    const [navbarTheme, setNavbarTheme] = useContext(NavbarContext);

    useEffect(() => {
        document.getElementsByTagName('body')[0].style.backgroundColor = '#ebe3d6';
        setNavbarTheme('black')
    }, [])

    const items = useSelector(p => p.products);

    const handleDashboardEdit = async (differ, id) => {
        const title = document.querySelector(`#editmodaldashboard-${differ} #dashboard-title`).value;
        const img = document.querySelector(`#editmodaldashboard-${differ} #dashboard-img`).value;
        const imghover = document.querySelector(`#editmodaldashboard-${differ} #dashboard-imghover`).value;
        const category = document.querySelector(`#editmodaldashboard-${differ} #dashboard-category`).value;
        const color = document.querySelector(`#editmodaldashboard-${differ} #dashboard-color`).value;
        const price = document.querySelector(`#editmodaldashboard-${differ} #dashboard-price`).value;
        const desc = document.querySelector(`#editmodaldashboard-${differ} #dashboard-desc`).value;
        const waterproof = document.querySelector(`#editmodaldashboard-${differ} #dashboard-props-waterproof`).value;
        const weight = document.querySelector(`#editmodaldashboard-${differ} #dashboard-props-weight`).value;
        const timestamp = document.querySelector(`#editmodaldashboard-${differ} #dashboard-props-timestamp`).value;
        const lumen = document.querySelector(`#editmodaldashboard-${differ} #dashboard-props-lumen`).value;
        const activity = document.querySelector(`#editmodaldashboard-${differ} #dashboard-activity`).value;
        const collection = document.querySelector(`#editmodaldashboard-${differ} #dashboard-collection`).value;
        const bestsellers = document.querySelector(`#editmodaldashboard-${differ} #dashboard-bestsellers`).value;
        const newProduct = {
            title: title,
            img: img,
            imghover: imghover,
            category: category,
            color: color,
            price: price,
            desc: desc,
            props: {
                waterproof: waterproof,
                weight: weight,
                timestamp: timestamp,
                lumen: lumen
            },
            activity: activity,
            collection: collection,
            bestsellers: bestsellers
        }
        const { error } = await supabase
            .from('Products')
            .update(newProduct)
            .match({ title: title })
            .eq('uuid', id);
        if (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            })
        } else {
            Swal.fire({
                icon: 'info',
                title: 'Success',
                text: 'Item Updated Successfully',
            })
            location.reload();
        }
    }

    const handleDashboardRemoveProduct = async (uuid) => {
        const response = await supabase
            .from('Products')
            .delete()
            .eq('uuid', uuid)
        Swal.fire({
            icon: 'info',
            title: 'Success',
            text: 'Item Deleted Successfully',
        })
        location.reload();
    }
    const handleDashboardAddProduct = async () => {
        const title = document.querySelector(`#addproductmodaldashboard #dashboard-title`).value;
        const img = document.querySelector(`#addproductmodaldashboard #dashboard-img`).value;
        const imghover = document.querySelector(`#addproductmodaldashboard #dashboard-imghover`).value;
        const category = document.querySelector(`#addproductmodaldashboard #dashboard-category`).value;
        const color = document.querySelector(`#addproductmodaldashboard #dashboard-color`).value;
        const price = document.querySelector(`#addproductmodaldashboard #dashboard-price`).value;
        const desc = document.querySelector(`#addproductmodaldashboard #dashboard-desc`).value;
        const waterproof = document.querySelector(`#addproductmodaldashboard #dashboard-props-waterproof`).value;
        const weight = document.querySelector(`#addproductmodaldashboard #dashboard-props-weight`).value;
        const timestamp = document.querySelector(`#addproductmodaldashboard #dashboard-props-timestamp`).value;
        const lumen = document.querySelector(`#addproductmodaldashboard #dashboard-props-lumen`).value;
        const activity = document.querySelector(`#addproductmodaldashboard #dashboard-activity`).value;
        const collection = document.querySelector(`#addproductmodaldashboard #dashboard-collection`).value;
        const bestsellers = document.querySelector(`#addproductmodaldashboard #dashboard-bestsellers`).value;
        const newProduct = {
            title: title,
            img: img,
            imghover: imghover,
            category: category,
            color: color,
            price: price,
            desc: desc,
            props: {
                waterproof: waterproof,
                weight: weight,
                timestamp: timestamp,
                lumen: lumen
            },
            activity: activity,
            collection: collection,
            bestsellers: bestsellers
        }
        const { error } = await supabase
            .from('Products')
            .insert(newProduct)
        console.log(error)
        if (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            })
        } else {
            Swal.fire({
                icon: 'info',
                title: 'Success',
                text: 'Item Added Successfully',
            })
            location.reload();
        }
    }
    return (
        <div>
            <AuthNavbar />
            <p className='fs-1 fw-bolder my-5 text-center'>Dashboard</p>
            <div className="container-fluid d-flex justify-content-center">
                <div className="container cart-page d-flex flex-column ">
                    <table>
                        <tbody>
                            {items.map((item, index) => (
                                <tr key={index}>
                                    <td>
                                        <button className="btn me-2" onClick={() => { handleDashboardRemoveProduct(item.uuid) }}>
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
                                    <td>
                                        <button className='btn btn-warning' data-bs-toggle="modal" data-bs-target={`#editmodaldashboard-${slugify(item.title, { lower: true })}`}>
                                            <IconContext.Provider value={{ color: '#000', size: '1.1em' }}>
                                                <FaEdit />
                                            </IconContext.Provider>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='d-flex justify-content-center add-product-sec'>
                <button className='btn btn-dark px-5 py-3 fs-2' data-bs-toggle="modal" data-bs-target={'#addproductmodaldashboard'}>Add Product</button>
            </div>
            <div className="modal fade editmodaldashboard" id={`addproductmodaldashboard`} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content" style={{ backgroundColor: '#EBE3D6' }}>
                        <div className="modal-header" style={{ borderBottom: 'none' }}>
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Add Product</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <p className='fw-bolder fs-5'>Title : </p>
                            <input type="text" id={'dashboard-title'} />
                            <p className='fw-bolder fs-5'>Image url : </p>
                            <input type="text" id={'dashboard-img'} />
                            <p className='fw-bolder fs-5'>Image 2 url : </p>
                            <input type="text" id={'dashboard-imghover'} />
                            <p className='fw-bolder fs-5'>Category : </p>
                            <select id={'dashboard-category'}>
                                <option value="headlamps">HEADLAMPS</option>
                                <option value="handhelds">HANDHELDS</option>
                                <option value="helmet lights">HELMET LIGHTS</option>
                                <option value="lanterns">LANTERNS</option>
                                <option value="marker lights">MARKER LIGHTS</option>
                                <option value="accessories">ACCESSORIES</option>
                            </select>
                            <p className='fw-bolder fs-5'>Color : </p>
                            <select className="for-color" id={'dashboard-color'}>
                                <option value="black">BLACK</option>
                                <option value="white">WHITE</option>
                                <option value="green">GREEN</option>
                                <option value="yellow">YELLOW</option>
                            </select>
                            <p className='fw-bolder fs-5'>Price : </p>
                            <input type="text" id={'dashboard-price'} />
                            <p className='fw-bolder fs-5'>Description : </p>
                            <input type="text" id={'dashboard-desc'} />
                            <p className='fw-bolder fs-5'>Props : </p>
                            <div className="row">
                                <div className="col-3">
                                    <p>WaterProof</p>
                                    <select id={'dashboard-props-waterproof'}>
                                        <option >IPX8</option>
                                        <option >IPX7</option>
                                        <option >IPX6</option>
                                        <option >IPX4</option>
                                        <option >IPX68</option>
                                    </select>
                                </div>
                                <div className="col-3">
                                    <p>Weight</p>
                                    <input type="text" id={'dashboard-props-weight'} />
                                </div>
                                <div className="col-3">
                                    <p>TimeStamp</p>
                                    <input type="text" id={'dashboard-props-timestamp'} />
                                </div>
                                <div className="col-3">
                                    <p>Lumen</p>
                                    <input type="text" id={'dashboard-props-lumen'} />
                                </div>
                            </div>
                            <p className='fw-bolder fs-5'>Activity : </p>
                            <select id={'dashboard-activity'}>
                                <option value="running">RUNNING</option>
                                <option value="hiking">HIKING</option>
                                <option value="fishing">FISHING</option>
                                <option value="diving">DIVING</option>
                                <option value="camping">CAMPING</option>
                            </select>
                            <p className='fw-bolder fs-5'>Collection : </p>
                            <select className="for-collection" id={'dashboard-collection'}>
                                <option value="tactical">TACTICAL</option>
                                <option value="adventure">ADVENTURE</option>
                                <option value="industrial">INDUSTRIAL</option>
                            </select>
                            <p className='fw-bolder fs-5'>Is Bestseller : </p>
                            <select className="for-collection" id={`dashboard-bestsellers`}>
                                <option value="true">true</option>
                                <option value="false">false</option>
                            </select>
                        </div>
                        <div className="modal-footer" style={{ borderTop: 'none' }}>
                            <button type="button" data-bs-dismiss="modal" className="btn btn-dark" onClick={() =>handleDashboardAddProduct() }>Add Product</button>
                        </div>
                    </div>
                </div>
            </div>
            {items.map((item, index) => (
                <div className="modal fade editmodaldashboard" key={index} id={`editmodaldashboard-${slugify(item.title, { lower: true })}`} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content" style={{ backgroundColor: '#EBE3D6' }}>
                            <div className="modal-header" style={{ borderBottom: 'none' }}>
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Edit product</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                <p className='fw-bolder fs-5'>Title : </p>
                                <input type="text" defaultValue={item.title} id={'dashboard-title'} />
                                <p className='fw-bolder fs-5'>Image url : </p>
                                <input type="text" defaultValue={item.img} id={'dashboard-img'} />
                                <p className='fw-bolder fs-5'>Image 2 url : </p>
                                <input type="text" defaultValue={item.imghover} id={'dashboard-imghover'} />
                                <p className='fw-bolder fs-5'>Category : </p>
                                <select id={'dashboard-category'}>
                                    <option value="headlamps">HEADLAMPS</option>
                                    <option value="handhelds">HANDHELDS</option>
                                    <option value="helmet lights">HELMET LIGHTS</option>
                                    <option value="lanterns">LANTERNS</option>
                                    <option value="marker lights">MARKER LIGHTS</option>
                                    <option value="accessories">ACCESSORIES</option>
                                </select>
                                <p className='fw-bolder fs-5'>Color : </p>
                                <select className="for-color" id={'dashboard-color'}>
                                    <option value="black">BLACK</option>
                                    <option value="white">WHITE</option>
                                    <option value="green">GREEN</option>
                                    <option value="yellow">YELLOW</option>
                                </select>
                                <p className='fw-bolder fs-5'>Price : </p>
                                <input type="text" defaultValue={item.price} id={'dashboard-price'} />
                                <p className='fw-bolder fs-5'>Description : </p>
                                <input type="text" defaultValue={item.desc} id={'dashboard-desc'} />
                                <p className='fw-bolder fs-5'>Props : </p>
                                <div className="row">
                                    <div className="col-3">
                                        <p>WaterProof</p>
                                        <select id={'dashboard-props-waterproof'}>
                                            <option >IPX8</option>
                                            <option >IPX7</option>
                                            <option >IPX6</option>
                                            <option >IPX4</option>
                                            <option >IPX68</option>
                                        </select>
                                    </div>
                                    <div className="col-3">
                                        <p>Weight</p>
                                        <input type="text" defaultValue={item.props.weight} id={'dashboard-props-weight'} />
                                    </div>
                                    <div className="col-3">
                                        <p>TimeStamp</p>
                                        <input type="text" defaultValue={item.props.timestamp} id={'dashboard-props-timestamp'} />
                                    </div>
                                    <div className="col-3">
                                        <p>Lumen</p>
                                        <input type="text" defaultValue={item.props.lumen} id={'dashboard-props-lumen'} />
                                    </div>
                                </div>
                                <p className='fw-bolder fs-5'>Activity : </p>
                                <select id={'dashboard-activity'}>
                                    <option value="running">RUNNING</option>
                                    <option value="hiking">HIKING</option>
                                    <option value="fishing">FISHING</option>
                                    <option value="diving">DIVING</option>
                                    <option value="camping">CAMPING</option>
                                </select>
                                <p className='fw-bolder fs-5'>Collection : </p>
                                <select className="for-collection" id={'dashboard-collection'}>
                                    <option value="tactical">TACTICAL</option>
                                    <option value="adventure">ADVENTURE</option>
                                    <option value="industrial">INDUSTRIAL</option>
                                </select>
                                <p className='fw-bolder fs-5'>Is Bestseller : </p>
                                <select className="for-collection" id={`dashboard-bestsellers`}>
                                    <option value="true">true</option>
                                    <option value="false">false</option>
                                </select>
                            </div>
                            <div className="modal-footer" style={{ borderTop: 'none' }}>
                                <button type="button" data-bs-dismiss="modal" className="btn btn-dark" onClick={() => handleDashboardEdit(slugify(item.title, { lower: true }), item.uuid)}>Save Changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Dashboard