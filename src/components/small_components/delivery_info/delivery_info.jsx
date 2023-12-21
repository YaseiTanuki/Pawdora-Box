import "./delivery_info.scss"
import { useNavigate } from "react-router-dom"

const DeliveryInfo = (props) => {

    const navigate = useNavigate()

    const toThanks = () => {
        navigate("/thanks")
    }

    return (
        <article className="delivery-info">
            <p>Thông tin giao hàng</p>
            <form action="">
                <input className="full" type="text" placeholder="Họ và Tên"/>
                <input type="text" placeholder="Email"/>
                <input type="text" placeholder="Số điện thoại"/>
                <input type="text" placeholder="Tỉnh / Thành phố"/>
                <input type="text" placeholder="Quận"/>
                <input type="text" placeholder="Xã"/>
                <input type="text" placeholder="Số nhà"/>
                <label htmlFor="">Phương thức thanh toán</label>
                <select className="full" name="" id="">
                    <option value="Hehe"></option>
                </select>
            </form>
            <button onClick={toThanks} className="end-button">Đặt hàng</button>
        </article>
    )
}

export default DeliveryInfo