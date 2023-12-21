import "./delivery_info.scss"

const DeliveryInfo = (props) => {
    return (
        <article className="delivery-info">
            <form action="">
                <input type="text" placeholder="Ho va Ten"/>
                <input type="text" placeholder="Email"/>
                <input type="text" placeholder="So Dien Thoai"/>
                <input type="text" placeholder="Tinh / Thanh pho"/>
                <input type="text" placeholder="Quan"/>
                <input type="text" placeholder="Xa"/>
                <input type="text" placeholder="So nha"/>
                <label htmlFor="">Phuong thuc thanh toan</label>
                <select name="" id="">
                    <option value="Hehe"></option>
                </select>
            </form>
        </article>
    )
}

export default DeliveryInfo