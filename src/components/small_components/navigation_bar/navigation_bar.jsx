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
                <li><NavLink className="NavLink" to="/">HOME</NavLink></li>
                <li><NavLink className="NavLink" to="#">CAT</NavLink></li>
                <li><NavLink className="NavLink" to="#">DOG</NavLink></li>
                <li><NavLink className="NavLink" to="#">HAMSTER</NavLink></li>
                <li><NavLink className="NavLink" to="#">RABBIT</NavLink></li>
                <li><NavLink className="NavLink" to="#">BIRD</NavLink></li>
            </ul>
        </nav>
    )
}

export default NavigationBar