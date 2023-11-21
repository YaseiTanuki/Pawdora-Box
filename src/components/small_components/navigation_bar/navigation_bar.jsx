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
                <li>
                    <Popup trigger={<NavLink className="NavLink" to="#">CAT <FontAwesomeIcon icon="caret-down"/></NavLink>} >
                        <CatSubMenu/>
                    </Popup>
                </li>
                <li><NavLink className="NavLink" to="#">DOG <FontAwesomeIcon icon="caret-down"/></NavLink></li>
                <li><NavLink className="NavLink" to="#">HAMSTER <FontAwesomeIcon icon="caret-down"/></NavLink></li>
                <li><NavLink className="NavLink" to="#">RABBIT <FontAwesomeIcon icon="caret-down"/></NavLink></li>
                <li><NavLink className="NavLink" to="#">BIRD <FontAwesomeIcon icon="caret-down"/></NavLink></li>
            </ul>
        </nav>
    )
}

export default NavigationBar