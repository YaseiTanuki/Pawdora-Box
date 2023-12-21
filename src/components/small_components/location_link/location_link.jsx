import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./location_link.scss"
import { NavLink } from "react-router-dom"

const LocationLink = () => {
    return (
        <NavLink to="/store" className="location-link" href=""><FontAwesomeIcon icon="location-dot" fixedWidth/>Tìm kiếm cửa hàng</NavLink>
    )
}

export default LocationLink