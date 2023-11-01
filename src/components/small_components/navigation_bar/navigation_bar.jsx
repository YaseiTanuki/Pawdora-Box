import "./navigation_bar.scss"
import { NavLink } from "react-router-dom"

const NavigationBar = () => {
    return (
        <nav>
            <ul>
                <li><NavLink className="NavLink" to="/">Home</NavLink></li>
                <li><NavLink className="NavLink" to="/cat">Cat</NavLink></li>
            </ul>
        </nav>
    )
}

export default NavigationBar