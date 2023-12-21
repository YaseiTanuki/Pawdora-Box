import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./location_link.scss"

const LocationLink = () => {
    return (
        <a className="location-link" href=""><FontAwesomeIcon icon="location-dot" fixedWidth/>Tìm kiếm cửa hàng</a>
    )
}

export default LocationLink