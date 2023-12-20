import "./delivery_info.scss"

const DeliveryInfo = (props) => {
    return (
        <article className="delivery-info">
            <h3>Họ và tên</h3>
            <p>{props.name}</p>
            <h3>Địa chỉ</h3>
            <p>{props.address}</p>
            <h3>Số điện thoại</h3>
            <p>{props.phoneNumber}</p>
            <h3>Ghi chú</h3>
            <p>{props.note}</p>
        </article>
    )
}

export default DeliveryInfo