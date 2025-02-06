import Carousel from "react-grid-carousel"
import { useSelector } from "react-redux"
import ProductCardForHome from "./ProductCardForHome"
import { useEffect, useState } from "react"

const BSCarTry = () => {
    const data = useSelector(p => p.products)
    const [itemHovered, setItemHovered] = useState('');

    useEffect(() => {
        [...document.querySelectorAll('.productcardforhome .imgsc img')].map((item, index) => {
            item.onmouseover = () => {
                setItemHovered(item.getAttribute('src'))
            }
            item.onmouseleave = () => {
                setItemHovered('')
            }
        })
    }, [])
    return (
        <div style={{ minHeight: "100vh", background: "white" }}>
            <Carousel cols={6} rows={1} gap={0}>
                {data.filter(item => item.bestsellers).map((item, index) => (
                    <Carousel.Item key={index}>
                        <ProductCardForHome title={item.title} price={item.price} img={item.img} imghover={item.imghover} itemHovered={itemHovered} props={item.props} />
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    )
}

export default BSCarTry