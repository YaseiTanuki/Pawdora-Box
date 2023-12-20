
import Header from "../../components/big_components/header/header"
import "./register.scss"
import Register from "../../components/small_components/login/register/register"

const RegisterPage = () => {
    return (
        <>
            <Header/>
            <main className="register">
                <div className="register-container"><Register/></div>
            </main>
        </>
    )
}

export default RegisterPage