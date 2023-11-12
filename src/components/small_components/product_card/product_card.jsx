import "./product-card.scss"

const ProductCard = (props) => {
    return (
        <div className="product-card">
            <img src={props.img} alt="product image" />
            <h4 title="product name">{props.name}</h4>
            <data value={props.price}>{props.price}$</data>
        </div>
    )
}

export default ProductCard