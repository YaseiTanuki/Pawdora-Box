import "./banner.scss"

//Banner image is not included in github source code
import BannerImage from "../../../assets/img/banner.jpg"
import BannerImage2 from "../../../assets/img/banner2.jpg"

const Banner = () => {
    return(
        <section className="banner">
            <a href=""><img src={BannerImage} alt="Banner image"/></a>
            <a href=""><img src={BannerImage2} alt="Banner image 2"/></a>
        </section>
    )
}

export default Banner