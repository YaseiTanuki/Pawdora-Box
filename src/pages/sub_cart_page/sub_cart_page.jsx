import DeliveryInfo from "../../components/small_components/delivery_info/delivery_info"
import './sub_cart_page.scss'

import Footer from "../../components/big_components/footer/footer"
import Header from "../../components/big_components/header/header"
import { useContext } from "react"
import PayContext from "../../../hooks/pay_context"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const SubCartPage = () => {

    const {payProduct, setPayProduct} = useContext(PayContext)

    const CartProductDisplay = (props) => {
        return(
            <article className="cart-item">
                <img src={props.img} alt="" />
                <article className="detail-container">
                    <article className="product-name">
                        <h4>{props.name}</h4>
                        <button><FontAwesomeIcon icon="trash" /></button>
                    </article>
                    <article className="price">
                        <h3>{props.price}đ</h3>
                    </article>
                </article>
            </article>
        )
      }
    return (
        <section className="sub-cart-page">
            <Header/>
            <section className="cart-list-container">
                <h3>Giỏ hàng</h3>
                <ul className="cart-list">
                    {payProduct.map((item) => (
                        <li><CartProductDisplay img={item.img} name={item.name} price={item.price}/></li>
                    ))}
                </ul>
            </section>
            <article className="delivery">
                <DeliveryInfo/>
            </article>
            <Footer/>
        </section>
    )
}

export default SubCartPage