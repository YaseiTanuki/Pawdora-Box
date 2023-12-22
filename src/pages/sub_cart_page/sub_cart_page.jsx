import DeliveryInfo from "../../components/small_components/delivery_info/delivery_info"
import './sub_cart_page.scss'
import { useState } from "react"
import Footer from "../../components/big_components/footer/footer"
import Header from "../../components/big_components/header/header"
import { useContext } from "react"
import PayContext from "../../../hooks/pay_context"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import process2 from "../../assets/img/process2.png"

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
            return (
                <article className="cart-item">
                    <img src={props.img} alt="" />
                    <article className="detail-container">
                        <article className="product-name">
                            <h4>{props.name}</h4>
                            <button><FontAwesomeIcon icon="trash" /></button>
                        </article>
                        <article className="price">
                            <h3>{formatPrice(props.price)}</h3>
                        </article>
                    </article>
                </article>
            );
        };
        const formatPrice = (amount) => {
            return `đ${new Intl.NumberFormat('vi-VN').format(amount)}`;
          };
    return (
        <section className="sub-cart-page">
            <Header showNav={true}/>
            <div className="process">
                <img src={process2} alt="" />
            </div>
            <h3>Thanh toán</h3>
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
                        <p>{formatPrice(totalPrice)}</p>
                    </div>
                    <div className="fee3">
                        <p>Phí vận chuyển: </p>
                        <p>{formatPrice(30000)}</p>
                    </div>
                    <div className="fee2">
                        <p>Tổng cổng </p>
                        <p className="red">{formatPrice(totalPrice + 30000)}</p>
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