import LoginForm from "../../components/small_components/login/login_form/login_form"
import Header from "../../components/big_components/header/header"
import "./login.scss"

const LoginPage = () => {
    return (
        <div class="login-page">
            <Header/>
            <main className="login">
                <div className="login-form-container"><LoginForm/></div>
            </main>
        </div>
    )
}

export default LoginPage