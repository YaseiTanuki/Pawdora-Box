import "./starter.scss"
import { NavLink } from "react-router-dom"

const Starter = () => {

    return (
        <article className="starter">
            <div className="option-login">
                <h4>Welcome!</h4>
                <NavLink to="/login">Login</NavLink>
            </div>
            <div className="option-register">
                <h4>Do not have account?</h4>
                <NavLink to="/register">Register</NavLink>
            </div>
        </article>
    )
}

export default Starter