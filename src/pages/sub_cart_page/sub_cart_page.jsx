import DeliveryInfo from "../../components/small_components/delivery_info/delivery_info"
import './sub_cart_page.scss'
import { useState } from "react"
import Footer from "../../components/big_components/footer/footer"
import Header from "../../components/big_components/header/header"
import { useContext } from "react"
import PayContext from "../../../hooks/pay_context"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const SubCartPage = () => {

    const {payProduct, setPayProduct} = useContext(PayContext)

    const Dealer = () =>{
        return (
            <article className="dealer">
                <input type="text" placeholder="Mã giảm giá"/>
                <button>Sử dụng</button>
            </article>
        )
    }

    const [totalPrice, setTotalPrice] = useState(0)
    let total = 0
    for(let j = 0; j < payProduct.length; j++)
    {
        total = total + payProduct[j].price
    }

    if(totalPrice!= total)
        setTotalPrice(total);

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
            <h3>Giỏ hàng</h3>
            <section className="cart-list-container">
                <ul className="cart-list">
                    {payProduct.map((item) => (
                        <li><CartProductDisplay img={item.img} name={item.name} price={item.price}/></li>
                    ))}
                </ul>
                <Dealer/>
                <article>
                    <div className="fee">
                        <p>Tạm tính: </p>
                        <p>đ{totalPrice}</p>
                    </div>
                    <div className="fee">
                        <p>Phí vận chuyển: </p>
                        <p>đ30000</p>
                    </div>
                    <div className="fee2">
                        <p>Tổng: </p>
                        <p className="red">đ{totalPrice+30000}</p>
                    </div>
                </article>
            </section>
            <article className="delivery">
                <DeliveryInfo/>
            </article>
            <Footer/>
        </section>
    )
}

export default SubCartPage