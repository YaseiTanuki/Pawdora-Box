import "./starter.scss"
import { useNavigate } from "react-router-dom"

const Starter = () => {

    const navigate = useNavigate()

    const navigateToLoginPage = () => {
        navigate("/login")
    }

    return (
        <article className="starter">
            <div className="option-login">
                <h4>Welcome!</h4>
                <button onClick={navigateToLoginPage}>login</button>
            </div>
            <div className="option-register">
                <h4>Do not have account?</h4>
                <button>Register</button>  
            </div>
        </article>
    )
}

export default Starter