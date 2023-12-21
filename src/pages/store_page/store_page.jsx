import "./store_page.scss"
import Header from "../../components/big_components/header/header"
import Footer from "../../components/big_components/footer/footer"
import Map from "../../assets/img/map.svg"

const StorePage = () => {

    const storeList = [
        {id: 1, name: "Chi nhánh Nguyễn Thiện Thuật", address: "16/55 Nguyễn Thiện Thuật, Phường 2, Quận 3, Tp. Hồ Chí Minh", phone: "0345627345", time: "8am - 5pm"},
        {id: 1, name: "Chi nhánh Nguyễn Thiện Thuật", address: "16/55 Nguyễn Thiện Thuật, Phường 2, Quận 3, Tp. Hồ Chí Minh", phone: "0345627345", time: "8am - 5pm"},
        {id: 1, name: "Chi nhánh Nguyễn Thiện Thuật", address: "16/55 Nguyễn Thiện Thuật, Phường 2, Quận 3, Tp. Hồ Chí Minh", phone: "0345627345", time: "8am - 5pm"}
    ]

    const Store = (props) => {
        return (
            <article className="store">
                <h5>{props.name}</h5>
                <p>Địa chỉ: </p><p>{props.address}</p><br />
                <p>Số điện thoại: </p><p>{props.phone}</p><br />
                <p>Giờ mở cửa: </p><p>{props.time}</p><br />
            </article>
        )
    }

    return (
        <>
            <Header showNav={true}/>
            <section className="store-page">
            <section className="store-list-container">
                <h3>Tìm cửa hàng gần nhất</h3>
                <ul className="store-list">
                    {storeList.map((store) => (
                        <li><Store name={store.name} address={store.address} phone={store.phone} time={store.time}/></li>
                    ))}
                </ul>
            </section>
            <section className="map-container">
                <img src={Map} alt="" />
            </section>
            </section>
            <Footer/>
        </>
    )
}

export default StorePage