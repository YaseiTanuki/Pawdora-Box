import React from 'react';
import "./product-card.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProductCard = (props) => {
    return (
        <div className="product-card">
            <img src={props.img} alt="product image" />
            <h4 title="product name">{props.name}</h4>
            <data value={props.price}>{props.price}$</data>
            <p>{props.description}</p>
            <div className="product-cart-button">
                <button className="buy-now-button">Mua ngay</button>
                <button className="add-to-cart-button"><FontAwesomeIcon icon="cart-shopping" /></button>
            </div>
        </div>
    )
}

export default ProductCard