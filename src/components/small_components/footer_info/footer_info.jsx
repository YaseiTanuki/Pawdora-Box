import "./footer_info.scss"
import SocialMedia from "../social_media/social_media"

const FooterInfo = () => {
    return (
        <section className="finfo-container">
            <article className="finfo-about-us">
                <h4>VỀ CHÚNG TUI</h4>
                <p>Blog thú cưng</p>
                <p>Điều khoản và điều kiện</p>
                <p>Chính sách và bảo mật</p>
            </article>
            <article className="finfo-shopping">
                <h4>MUA SẮM</h4>
                <p>Khuyến mãi</p>
                <p>Dịch vụ</p>
                <p>Đánh giá</p>
            </article>
            <article className="finfo-contact">
                <h4>LIÊN HỆ</h4>
                <h5>Địa chỉ</h5>
                <p>10 Khu phố 6, phường Linh Trung, Tp Thủ Đức, Tp Hồ Chí Minh, Việt Nam</p>
                <h5>Hotline</h5>
                <p>0983xxxxxx</p>
                <h5>Email</h5>
                <p>pawdorabox@gmail.com</p>
                <h5>Thời gian mở cửa</h5>
                <p>Thứ hai - Thứ sáu: 8am - 7pm</p>
                <p>Thứ bảy & Chủ nhật: 9am - 5pm</p>
                <h5>Theo dõi chúng tôi</h5>
                <SocialMedia/>
            </article>
            <article className="finfo-payment-method">
                <h4>THANH TOÁN AN TOÀN</h4>
                <article>
                    <img src="" alt="" />
                </article>
            </article>
        </section>
    )
}

export default FooterInfo