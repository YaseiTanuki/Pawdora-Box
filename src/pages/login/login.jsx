import LoginForm from "../../components/small_components/login/login_form/login_form";
import Header from "../../components/big_components/header/header";
import Footer from "../../components/big_components/footer/footer";
import "./login.scss"

const LoginPage = () => {
    return (
        <>
            <Header/>
            <main className="login">
                <div className="login-form-container"><LoginForm/></div>
            </main>
            <Footer/>
        </>
    )
}

export default LoginPage