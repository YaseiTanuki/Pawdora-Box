import Header from "../../components/big_components/header/header"
import "./cart.scss"
import Cart from './../../components/small_components/cart/cart/cart'
import Footer from "../../components/big_components/footer/footer"

const CartPage = () => {
    return (
        <>
            <Header/>
            <main className="cart">
                <div className="cart-container"><Cart/></div>
            </main>
            <Footer/>
        </>
    )
}

export default CartPage