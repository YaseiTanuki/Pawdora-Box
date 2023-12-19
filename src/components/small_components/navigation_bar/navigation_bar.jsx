import "./navigation_bar.scss"
import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Popup from "reactjs-popup"

const NavigationBar = () => {

    const CatSubMenu = () => {
        return (
            <article className="cat-sub-menu">
                <ul>
                    <li>Cat Food</li>
                    <li>Cat Toy</li>
                    <li>Cat Drink</li>
                </ul>
            </article>
        )
    }

    return (

        <nav>
            <ul>
                <li><NavLink className="NavLink" to="/">Trang chủ</NavLink></li>
                <li><NavLink className="NavLink" to="/dog">Chó</NavLink></li>
                <li><NavLink className="NavLink" to="#">Mèo</NavLink></li>
                <li><NavLink className="NavLink" to="#">Hasmter</NavLink></li>
                <li><NavLink className="NavLink" to="#">Thỏ</NavLink></li>
                <li><NavLink className="NavLink" to="#">Chim</NavLink></li>
                <li><NavLink className="NavLink" to="#">Dịch vụ</NavLink></li>
                <li><button className="sale-button">Khuyến mãi</button></li>
            </ul>
        </nav>
    )
}

export default NavigationBar