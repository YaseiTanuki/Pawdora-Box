import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./location_link.scss"

const LocationLink = () => {
    return (
        <div className="full-width-border">
            <a href=""><FontAwesomeIcon icon="location-dot" fixedWidth/>Shop Location</a>
        </div>
    )
}

export default LocationLink