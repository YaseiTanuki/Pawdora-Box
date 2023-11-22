import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./cart_button.scss"
import Popup from "reactjs-popup"


const CartButton = () => {
    return (
        <Popup trigger={<button className="cart-button"><FontAwesomeIcon icon="cart-shopping"/></button>}>
            
        </Popup>
       
    )
}

export default CartButton