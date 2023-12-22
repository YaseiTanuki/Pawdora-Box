import { useContext, useEffect, useState } from "react"
import cartContext from "../../../hooks/cart_context"
import productImage from '../../../public/img/home-product/meo.png'
import main1_1 from '../../../public/img/home-product/meo.png'
import main1 from '../../../public/img/home-product/hatkho.jpg'
import Header from "../../components/big_components/header/header"
import Footer from "../../components/big_components/footer/footer"
import { productsData } from "../product_page/product_page"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import './cart.scss'
import { useNavigate } from "react-router-dom"
import PayContext from "../../../hooks/pay_context"
import process from "../../assets/img/process.png"

const CartPage = () => {


    const {cartProduct, setCartProduct} = useContext(cartContext)

    function removeProduct (id) {
        let removedList = cartList.filter(function(item) {
            return item.id !== id
        })

        console.log(id)
        console.log("before delete")
        console.log(removedList)
        if(removedList.length != cartList.length)
        {
            setCartList(removedList)
            console.log("deleted")
        }
    }

      const [cartList, setCartList] = useState([])
      const {payProduct, setPayProduct} = useContext(PayContext)
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

    for(let i = 0; i < cartProduct.length; i++)
    {
        let newList = cartList
        console.log(cartProduct[i])
        let myProduct = productsData.find(item => item.id == cartProduct[i])
        console.log(myProduct)
        if(cartList.filter(item => item.id == cartProduct[i]).length == 0)
        {
            console.log("Hello")
            newList.push(myProduct)
        }
        console.log(cartProduct)
        console.log(cartList)

        if(cartList.length != newList.length)
            setCartList(newList)
    }

    if(cartList != payProduct)
        setPayProduct(cartList)

    const [totalPrice, setTotalPrice] = useState(0)
    let total = 0
    for(let j = 0; j < cartList.length; j++)
    {
        total = total + cartList[j].price
    }

    if(totalPrice!= total)
        setTotalPrice(total);

    const navigate = useNavigate();

    const toPay = () => {
        navigate("/subcartpage")
    }
    const formatPrice = (amount) => {
        return `đ${new Intl.NumberFormat('vi-VN').format(amount)}`;
      };
    

    return (
        <>
        <Header showNav={true}/>
        <section className="cart-page">
            <div className="process">
                <img src={process} alt="" />
            </div>
            <h3>Giỏ hàng</h3>
            <section className="cart-list-container">
                <ul className="cart-list">
                    {cartList.map((item) => (
                        <li><CartProductDisplay img={item.img} name={item.name} price={item.price} id={item.id}/></li>
                    ))}
                </ul>
            </section>
            <section className="total">
                <article className="total-detail-container">
                <h1>
                    <span className="not-red">Tổng tiền:</span>{" "}
                    <span>{formatPrice(totalPrice)}</span>
                </h1>
                    <ul>
                        <li>Hỗ trợ đổi hàng trong vòng 7 ngày tại tất cả các cửa hàng trên toàn quốc.</li>
                        <li>Miễn phí ship với đơn hàng từ 500.000đ.</li>
                    </ul>
                    <button className="pay-button" onClick={toPay}>Thanh toán</button>
                </article>
            </section>
        </section>
        <Footer/>
    </>
    )
}

export default CartPage