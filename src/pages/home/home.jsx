import "./home.scss"
import Banner from "../../components/small_components/banner/banner"
import QuickChoiceButton from "../../components/small_components/quick_choice_button/quick_choice_button"
import ProductCard from "../../components/small_components/product_card/product_card"
import Header from "../../components/big_components/header/header"
import Footer from "../../components/big_components/footer/footer"
import React, { useState } from 'react'
import SaleCard from "../../components/small_components/sale_card/sale_card"
import sale1 from '../../../public/img/home-product/chirstmaxsale.svg'
import sale2 from '../../../public/img/home-product/sale30.svg'
import sale3 from '../../../public/img/home-product/hatkho.jpg'
import sale4 from '../../../public/img/home-product/lac.png'
import sale5 from '../../../public/img/home-product/xucxich.png'
import sale6 from '../../../public/img/home-product/thuoc.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Value from '../../assets/img/value.png'
import blog1 from '../../assets/img/blog1.svg'
import blog2 from '../../assets/img/blog2.svg'
import blog3 from '../../assets/img/blog3.svg'
import mem1 from '../../assets/img/mem1.svg'
import mem2 from '../../assets/img/mem2.svg'
import mem3 from '../../assets/img/mem3.svg'
import mem4 from '../../assets/img/mem4.svg'
import mem5 from '../../assets/img/mem5.svg'

const Home = () => {
  
    const [displayedProducts, setDisplayedProducts] = useState(10)
    const products = [
        { img: "public/img/home-product/cat1.webp", name: "This is product item", price: 200, description: "Description" },
        { img: "public/img/home-product/cat1.webp", name: "This is product item", price: 200, description: "Description" },
        { img: "public/img/home-product/cat1.webp", name: "This is product item", price: 200, description: "Description" },
        { img: "public/img/home-product/cat1.webp", name: "This is product item", price: 200, description: "Description" },
        { img: "public/img/home-product/cat1.webp", name: "This is product item", price: 200, description: "Description" },
        { img: "public/img/home-product/cat1.webp", name: "This is product item", price: 200, description: "Description" },
        { img: "public/img/home-product/cat1.webp", name: "This is product item", price: 200, description: "Description" },
        { img: "public/img/home-product/cat1.webp", name: "This is product item", price: 200, description: "Description" },
        { img: "public/img/home-product/cat1.webp", name: "This is product item", price: 200, description: "Description" },
        { img: "public/img/home-product/cat1.webp", name: "This is product item", price: 200, description: "Description" },
        { img: "public/img/home-product/cat1.webp", name: "This is product item", price: 200, description: "Description" },
        { img: "public/img/home-product/cat1.webp", name: "This is product item", price: 200, description: "Description" },
        { img: "public/img/home-product/cat1.webp", name: "This is product item", price: 200, description: "Description" },
        { img: "public/img/home-product/cat1.webp", name: "This is product item", price: 200, description: "Description" },
        { img: "public/img/home-product/cat1.webp", name: "This is product item", price: 200, description: "Description" },
        { img: "public/img/home-product/cat1.webp", name: "This is product item", price: 200, description: "Description" },
        { img: "public/img/home-product/cat1.webp", name: "This is product item", price: 200, description: "Description" },
        { img: "public/img/home-product/cat1.webp", name: "This is product item", price: 200, description: "Description" },
    ]
    const showMoreProducts = () => {
        // Tăng số lượng sản phẩm hiển thị khi nhấn "Xem thêm"
        setDisplayedProducts(displayedProducts + 8)
    }

    const showLessProducts = () => {
        // Giảm số lượng sản phẩm hiển thị khi nhấn "Thu gọn"
        setDisplayedProducts(10) // Quay lại số lượng sản phẩm hiển thị ban đầu
    }


    const Card = (props) => {
        return (
            <article className="card">
                <img src={props.img} alt="" />
                <h4>{props.name}</h4>
                <p>{props.price}</p>
                <article className="button-list">
                    <button className="add-to-cart">
                        <FontAwesomeIcon icon="cart-shopping"/>
                    </button>
                    <button className="buy">
                        Mua ngay
                    </button>
                </article>
            </article>
        )
    }


    const Blog = (props) => {
        return (
            <article className="blog">
                <img src={props.img} alt="" />
                <h4>{props.title}</h4>
                <p>{props.detail}</p>
            </article>
        )
    }

    return (
        <>
            <Header showNav={true}/>
            <main className="home">
                <section className="banner-container">
                    <Banner/>
                </section>
                <section className="main-content">
                    <article className="sale">
                        <img src={sale1} alt="" />
                        <img src={sale2} alt="" />
                    </article>
                    <h3 className="sale-title">Khuyến mãi</h3>
                    <article className="sale2">
                        <Card img={sale3} name="Thức ăn hạt khô KitchenFlavor Nature Gourmet cho chó" price="40000đ"/>
                        <Card img={sale4} name="Vòng cổ vải kèm chuông nhiều hoạ tiết" price="40000đ"/>
                        <Card img={sale5} name="Xúc xích nhiều vị cho chó mèo thanh 15g" price="40000đ"/>
                        <Card img={sale6} name="Canxi Mỹ PetAg Calcium Phosphorus cho chó mèo" price="40000đ"/>
                    </article>
                    <h3 className="new-title">Sản phẩm mới</h3>
                    <article className="new">
                        <Card img={sale3} name="Thức ăn hạt khô KitchenFlavor Nature Gourmet cho chó" price="40000đ"/>
                        <Card img={sale4} name="Vòng cổ vải kèm chuông nhiều hoạ tiết" price="40000đ"/>
                        <Card img={sale5} name="Xúc xích nhiều vị cho chó mèo thanh 15g" price="40000đ"/>
                        <Card img={sale6} name="Bánh sữa dê bổ sung dinh dưỡng cho mèo" price="40000đ"/>
                    </article>
                    <h3 className="love-title">Được ưa thích</h3>
                    <article className="love">
                        <Card img={sale3} name="Thức ăn hạt khô KitchenFlavor Nature Gourmet cho chóo" price="40000đ"/>
                        <Card img={sale4} name="Vòng cổ vải kèm chuông nhiều hoạ tiết" price="40000đ"/>
                        <Card img={sale5} name="Xúc xích nhiều vị cho chó mèo thanh 15g" price="40000đ"/>
                        <Card img={sale6} name="Canxi Mỹ PetAg Calcium Phosphorus cho chó mèo" price="40000đ"/>
                    </article>
                </section>
                <article className="value">
                    <img src={Value} alt="" />
                </article>
                <h3 className="blog-title">Blog</h3>
                <article className="blog-container">
                    <Blog img={blog1} title="Cấp cứu chó bị sốc nhiệt tại nhà" detail="Khi quyết định nuôi thú cưng, đặc biệt là chó, bạn cần tìm hiểu những thông tin cơ..."/>
                    <Blog img={blog2} title="Những lưu ý khi tắm cho cho mèo tại nhà" detail="Có nhiều bạn băn khoăn có nên tắm cho chó mèo không? Bao lâu tắm một lần và dùng c..."/>
                    <Blog img={blog3} title="Chuẩn bị nuôi thú cưng, cần chuẩn bị  những gì?" detail="Chuẩn bị nuôi thú cưng, sen cần chuẩn bị những món đồ gì?Nuôi thú cưng không hề đơ..."/>
                </article>
                <h3 className="memory-title">Khoảnh khắc</h3>
                <section className="memory">
                    <img src={mem1} alt="" />
                    <img src={mem2} alt="" />
                    <img src={mem3} alt="" />
                    <img src={mem4} alt="" />
                    <img src={mem5} alt="" />
                </section>
            </main>
            <Footer/>
        </>
    )
}

export default Home