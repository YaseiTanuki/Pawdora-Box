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
import new1 from '../../../public/img/home-product/banhquy.png'
import new2 from '../../../public/img/home-product/khan.png'
import new3 from '../../../public/img/home-product/suatam.png'
import new4 from '../../../public/img/home-product/banchai.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Value from '../../assets/img/service.svg'
import blog1 from '../../assets/img/blog1.svg'
import blog2 from '../../assets/img/blog2.svg'
import blog3 from '../../assets/img/blog3.svg'
import mem1 from '../../assets/img/mem1.svg'
import mem2 from '../../assets/img/mem2.svg'
import mem3 from '../../assets/img/mem3.svg'
import mem4 from '../../assets/img/mem4.svg'
import mem5 from '../../assets/img/mem5.svg'
import { productsData } from "../product_page/product_page"

const Home = () => {
    
    const [displayedProducts, setDisplayedProducts] = useState(10)
    const [displayedSaleProducts, setDisplayedSaleProducts] = useState(4);
    const [displayedNewProducts, setDisplayedNewProducts] = useState(4);
    const [displayedLoveProducts, setDisplayedLoveProducts] = useState(4);
    const [showMoreSale, setShowMoreSale] = useState(true);
    const [showMoreNew, setShowMoreNew] = useState(true);
    const [showMoreLove, setShowMoreLove] = useState(true);
    const sale2Products = productsData.slice(0, 7); // ID từ 1 đến 4
    const newProducts = productsData.slice(8, 15); // ID từ 9 đến 15
    const loveProducts = productsData.slice(15, 22); // ID từ 16 đến 22
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

    const showMoreProducts = (type) => {
        switch (type) {
            case 'sale':
                setDisplayedSaleProducts(displayedSaleProducts + 4);
                if (displayedSaleProducts + 4 >= sale2Products.length) {
                    setShowMoreSale(false);
                }
                break;
            case 'new':
                setDisplayedNewProducts(displayedNewProducts + 4);
                if (displayedNewProducts + 4 >= newProducts.length) {
                    setShowMoreNew(false);
                }
                break;
            case 'love':
                setDisplayedLoveProducts(displayedLoveProducts + 4);
                if (displayedLoveProducts + 4 >= loveProducts.length) {
                    setShowMoreLove(false);
                }
                break;
            default:
                break;
        }
    }

    const showLessProducts = (type) => {
        switch (type) {
            case 'sale':
                setDisplayedSaleProducts(4);
                setShowMoreSale(true);
                break;
            case 'new':
                setDisplayedNewProducts(4);
                setShowMoreNew(true);
                break;
            case 'love':
                setDisplayedLoveProducts(4);
                setShowMoreLove(true);
                break;
            default:
                break;
        }
    }
    const formatPrice = (amount) => {
        return `đ${new Intl.NumberFormat('vi-VN').format(amount)}`;
      };

    return (
        <>
            <Header showNav={true}/>
            <main className="home">
                <section className="banner-container">
                    <Banner/>
                </section>
                <section className="main-content">
                    <article className="sale">
                        <img className="img1"src={sale1} alt="" />
                        <img src={sale2} alt="" />
                    </article>
                    <div className="km">
                    <h3 className="sale-title">Khuyến mãi</h3>
                    {showMoreSale ? (
                        <button className="show-more-button" onClick={() => showMoreProducts('sale')}>
                            Xem thêm <span>&#10093;</span>
                        </button>
                    ) : (
                        <button className="show-more-button" onClick={() => showLessProducts('sale')}>
                            <span>&#10092; </span>Thu gọn
                        </button>
                    )}</div>
                    <article className="sale2">
                        {sale2Products.slice(0, displayedSaleProducts).map((product, index) => (
                            <Card key={index} img={product.img} name={product.name} price={formatPrice(product.price)} />
                        ))}
                    </article>
                    
                    <div className="spm">
                    <h3 className="new-title">Sản phẩm mới</h3>
                    {showMoreNew ? (
                        <button className="show-more-button" onClick={() => showMoreProducts('new')}>
                            Xem thêm <span>&#10093;</span>
                        </button>
                    ) : (
                        <button className="show-more-button" onClick={() => showLessProducts('new')}>
                            <span>&#10092; </span>Thu gọn 
                        </button>
                    )}</div>
                    <article className="new">
                        {newProducts.slice(0, displayedNewProducts).map((product, index) => (
                            <Card key={index} img={product.img} name={product.name} price={formatPrice(product.price)} />
                        ))}
                    </article>
                    <div className="yt">
                    <h3 className="love-title">Được ưa thích</h3>
                    {showMoreLove ? (
                        <button className="show-more-button" onClick={() => showMoreProducts('love')}>
                            Xem thêm <span>&#10093;</span>
                        </button>
                    ) : (
                        <button className="show-more-button" onClick={() => showLessProducts('love')}>
                            <span>&#10092; </span>Thu gọn
                        </button>
                    )}</div>
                    <article className="love">
                        {loveProducts.slice(0, displayedLoveProducts).map((product, index) => (
                            <Card key={index} img={product.img} name={product.name} price={formatPrice(product.price)} />
                        ))}
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