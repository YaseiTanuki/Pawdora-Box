import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./cart_button.scss"
import React from "react"
import { NavLink } from "react-router-dom"


const CartButton = () => {
    return (
        <NavLink to="/cart" className="cart-button" activeClassName="active">
            <FontAwesomeIcon icon="cart-shopping" />
        </NavLink>
    )
}

export default CartButton