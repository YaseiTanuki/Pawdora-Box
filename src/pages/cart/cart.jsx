import { useContext, useEffect, useState } from "react"
import cartContext from "../../../hooks/cart_context"
import productImage from '../../../public/img/home-product/meo.png'
import main1_1 from '../../../public/img/home-product/meo.png'
import main1 from '../../../public/img/home-product/hatkho.jpg'
import Header from "../../components/big_components/header/header"
import Footer from "../../components/big_components/footer/footer"
import { productsData } from "../product_page/product_page"

const CartPage = () => {

    const {cartProduct, setCartProduct} = useContext(cartContext)

      const [cartList, setCartList] = useState([])
      const CartProductDisplay = (props) => {
        return(
            <h1>{props.id}</h1>
        )
      }

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

    return (
        <>
        <Header showNav={true}/>
        <section className="cart-page">
        <section className="cart-list-container">
            <h3>Giỏ hàng</h3>
            <ul className="cart-list">
                {cartList.map((item) => (
                    <li><CartProductDisplay id={item.id}/></li>
                ))}
            </ul>
        </section>
        </section>
        <Footer/>
    </>
    )
}

export default CartPage