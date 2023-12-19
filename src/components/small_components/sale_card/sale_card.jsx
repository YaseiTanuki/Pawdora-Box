import "./sale_card.scss"

const SaleCard = (props) => {
    return (
        <article className="sale-card">
            <img src={props.img} alt="Sale product" />
            <p>{props.description}</p>
            <p>{props.time}</p>
        </article>
    )
}

export default SaleCard