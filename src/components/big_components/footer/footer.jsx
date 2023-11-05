import "./footer.scss"
import Logo from "../../small_components/logo/logo"
import LocationLink from "../../small_components/location_link/location_link"
import FooterInfo from "../../small_components/footer_info/footer_info"
import SocialMedia from "../../small_components/social_media/social_media"

const Footer = () => {
    return (
        <footer>
            <section className="footer-overall">
                <div className="footer-logo-container">
                    <Logo/>
                </div>
                <div className="footer-location-container">
                    <LocationLink/>
                </div>
            </section>

            <section className="footer-info">
                <FooterInfo/>
            </section>

            <section className="footer-support">
                <div className="footer-social-media-container">
                    <SocialMedia/>
                </div>
            </section>
        </footer>
    )
}

export default Footer