import "./Home.scss"
import Banner from "../../components/small_components/banner/banner"
import QuickChoiceButton from "../../components/small_components/quick_choice_button/quick_choice_button"
import ProductCard from "../../components/small_components/product_card/product_card"
import Header from "../../components/big_components/header/header"
import Footer from "../../components/big_components/footer/footer"

const Home = () => {
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
                            <li><QuickChoiceButton name="Dog Food"/></li>
                            <li><QuickChoiceButton name="Cat Food"/></li>
                            <li><QuickChoiceButton name="Dog Toy"/></li>
                            <li><QuickChoiceButton name="Cat Toy"/></li>
                            <li><QuickChoiceButton name="Pet Service"/></li>
                            <li><QuickChoiceButton name="Medical"/></li>
                        </ul>
                    </article>
                    <article className="new-product">
                        <ul className="product-list">
                            <li><ProductCard img="public/img/home-product/cat1.webp" name="This is product item" price="200"/></li>
                            <li><ProductCard img="public/img/home-product/cat1.webp" name="This is product item" price="200"/></li>
                            <li><ProductCard img="public/img/home-product/cat1.webp" name="This is product item" price="200"/></li>
                            <li><ProductCard img="public/img/home-product/cat1.webp" name="This is product item" price="200"/></li>
                            <li><ProductCard img="public/img/home-product/cat1.webp" name="This is product item" price="200"/></li>
                            <li><ProductCard img="public/img/home-product/cat1.webp" name="This is product item" price="200"/></li>
                            <li><ProductCard img="public/img/home-product/cat1.webp" name="This is product item" price="200"/></li>
                        </ul>
                    </article>
                </section>
            </main>
            <Footer/>
        </>
    )
}

export default Home