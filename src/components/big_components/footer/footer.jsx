import "./footer.scss"
import Logo from "../../small_components/logo/logo"
import LocationLink from "../../small_components/location_link/location_link"

const Footer = () => {
    return (
        <footer>
            <section>
                <div className="footer-logo-container">
                    <Logo/>
                </div>
                <div className="footer-location-container">
                    <LocationLink/>
                </div>
            </section>
        </footer>
    )
}

export default Footer