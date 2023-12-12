import "./bill_info.scss"

const BillInfo = (props) => {
    return (
        <article className="bill-info">
            <div>
                <h2>Tên sản phẩm</h2>
                <h2>Giá</h2>
                <h2>Số lượng</h2>
            </div>
            <div>
                <p>Thức ăn mèo YUMI</p>
                <p>100 000đ</p>
                <p>1</p>
            </div>
        </article>
    )
}

export default BillInfo