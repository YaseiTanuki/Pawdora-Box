import DeliveryInfo from "../../components/small_components/delivery_info/delivery_info"
import './sub_cart_page.scss'

import Footer from "../../components/big_components/footer/footer"
import Header from "../../components/big_components/header/header"
const SubCartPage = () => {
    return (
        <section className="sub-cart-page">
            <Header/>
            <article className="delivery">
                <DeliveryInfo/>
            </article>
            <Footer/>
        </section>
    )
}

export default SubCartPage