import "./logo.scss"
import { NavLink } from "react-router-dom"

const Logo = () => {
    return (
        <NavLink to="/" className="logo">Pawdora Box</NavLink>
    )
}

export default Logo