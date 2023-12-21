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
                <li><NavLink className="NavLink" to="/">TRANG CHỦ</NavLink></li>
                <li><NavLink className="NavLink" to="/dog">CHÓ</NavLink></li>
                <li><NavLink className="NavLink" to="#">MÈO</NavLink></li>
                <li><NavLink className="NavLink" to="#">HAMSTER</NavLink></li>
                <li><NavLink className="NavLink" to="#">THỎ</NavLink></li>
                <li><NavLink className="NavLink" to="#">CHIM</NavLink></li>
                <li><NavLink className="NavLink" to="#">DỊCH VỤ</NavLink></li>
                <li><button className="sale-button">SALE</button></li>
            </ul>
        </nav>
    )
}

export default NavigationBar