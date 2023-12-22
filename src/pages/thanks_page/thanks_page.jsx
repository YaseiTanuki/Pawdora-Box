import Header from "../../components/big_components/header/header"
import Footer from "../../components/big_components/footer/footer"
import './thanks_page.scss'
import { useNavigate } from "react-router-dom"
import process3 from"../../assets/img/process3.png"

const ThanksPage = () => {

    const navigate = useNavigate()

    const toHome = () => {
        navigate("/")
    }
    return (
        <section className="thanks-page">
            <Header showNav={true}/>
            <div className="process">
                    <img src={process3} alt="" />
                </div>
            <div>
                <article className="message">
                    <div><h1>Cảm ơn bạn đã đặt hàng</h1></div>
                    <div><p>Bạn sẽ sớm nhận được email xác nhận và thông tin theo dõi trong hộp thư đến của mình.</p></div>
                    <div><button onClick={toHome}>Tiếp tục mua sắm</button></div>
                </article>
            </div>
            <Footer/>
        </section>
    )
}

export default ThanksPage