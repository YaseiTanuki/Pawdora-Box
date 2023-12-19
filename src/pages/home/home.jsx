import "./Home.scss"
import Banner from "../../components/small_components/banner/banner"
import QuickChoiceButton from "../../components/small_components/quick_choice_button/quick_choice_button"
import ProductCard from "../../components/small_components/product_card/product_card"
import Header from "../../components/big_components/header/header"
import Footer from "../../components/big_components/footer/footer"
import React, { useState } from 'react'
import SaleCard from "../../components/small_components/sale_card/sale_card"

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



    return (
        <>
            <Header showNav={true}/>
            <main className="home">
                <section className="banner-container">
                    <Banner/>
                </section>
                <section className="main-content">
                    <article className="quick-choice">
                        <ul className="quick-choice-list">
                            <li><QuickChoiceButton name="Thức ăn cho chó"/></li>
                            <li><QuickChoiceButton name="Thức ăn cho mèo"/></li>
                            <li><QuickChoiceButton name="Trừ bọ chét. ve"/></li>
                            <li><QuickChoiceButton name="Đồ chơi"/></li>
                        </ul>
                    </article>
                    <article className="sale-list">
                        <ul>
                            <li><SaleCard img="public/img/home-product/cat1.webp"/></li>
                        </ul>
                    </article>
                    <article className="new-product">
                        <ul className="product-list">
                            {products.slice(0, displayedProducts).map((product, index) => (
                                <li key={index}>
                                    <ProductCard img={product.img} name={product.name} price={product.price} description={product.description} />
                                </li>
                            ))}
                        </ul>
                        {displayedProducts < products.length ? (
                            <button onClick={showMoreProducts}>Xem thêm</button>
                        ) : (
                            <button onClick={showLessProducts}>Thu gọn</button>
                        )}
                    </article>
                </section>
            </main>
            <Footer/>
        </>
    )
}

export default Home