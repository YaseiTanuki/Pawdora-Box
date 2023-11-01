import "./logo.scss"
import { NavLink } from "react-router-dom"

const Logo = () => {
    return (
        <div className="logo-container">
            <NavLink className="logo">Pawdora Box</NavLink>
        </div>
    )
}

export default Logo