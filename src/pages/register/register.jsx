
import Header from "../../components/big_components/header/header"
import Footer from "../../components/big_components/footer/footer"
import "./register.scss"
import Register from "../../components/small_components/login/register/register"

const RegisterPage = () => {
    return (
        <>
            <Header/>
            <main className="register">
                <div className="register-container"><Register/></div>
            </main>
            <Footer/>
        </>
    )
}

export default RegisterPage