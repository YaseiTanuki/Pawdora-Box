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
                    <Logo showSlogan={false} style="small-logo"/>
                </div>
            </section>

            <section className="footer-info">
                <FooterInfo/>
            </section>
        </footer>
    )
}

export default Footer