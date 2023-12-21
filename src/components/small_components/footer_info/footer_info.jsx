import "./footer_info.scss"
import SocialMedia from "../social_media/social_media"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import paymentMethod from "../../../assets/img/payment.svg"


const FooterInfo = () => {
    return (
        <section className="finfo-container">
            <article className="finfo-about-us">
                <h4>VỀ CHÚNG TÔI</h4>
                
                <p>Điều khoản và điều kiện</p>
                <p>Chính sách và bảo mật</p>
                <p>FAQ</p>
            </article>
            <article className="finfo-shopping">
                <h4>MUA SẮM</h4>
                <p>Khuyến mãi</p>
                <p>Dịch vụ</p>
                <p>Đánh giá</p>
            </article>
            <article className="finfo-LINK">
                <h4>LIÊN KẾT</h4>
                <p>Trang chủ</p>
                <p>Sản phẩm</p>
                <p>Blog thú cưng</p>
            </article>
            <article className="finfo-contact">
                <h4>LIÊN HỆ</h4>
                <span ><FontAwesomeIcon className="icon-location" icon="location-dot"/> </span> 
                <p> <span> </span> <span> </span> 10 Khu phố 6, phường Linh Trung, Tp Thủ Đức, Tp Hồ Chí Minh, Việt Nam</p>
                <span><FontAwesomeIcon icon="phone"/></span>
                <p>0983xxxxxx</p> <br/>
                <span><FontAwesomeIcon icon="envelope"/></span>
                <p>pawdorabox@gmail.com</p>
                <h5>Theo dõi chúng tôi</h5>
                <SocialMedia/>
            </article>
        </section>
    )
}

export default FooterInfo