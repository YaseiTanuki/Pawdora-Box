import "./social_media.scss"
import facebookIcon from "../../../assets/img/facebook.svg"
import instaIcon from "../../../assets/img/insta.svg"
import tiktokIcon from "../../../assets/img/tiktok.svg"


const SocialMedia = () => {
    return (
        <ul className="social-media-list">
            <li><a href=""><img src={facebookIcon} alt="" /></a></li>
            <li><a href=""><img src={instaIcon} alt="" /></a></li>
            <li><a href=""><img src={tiktokIcon} alt="" /></a></li>
        </ul>
    )
}

export default SocialMedia