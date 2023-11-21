import "./login_form.scss"
import { NavLink } from 'react-router-dom'

const LoginForm = () => {
    return (
        <article className="login-window">
            <div className="header_login">
                <p className="logo1">Pawdora Box</p>
                <h1>LOGIN</h1>
            </div>
            <form action="">
                <label htmlFor="user-name">User name:</label><br />
                <input type="text" /><br />
                <label htmlFor="password">Password:</label><br />
                <input type="text" />
            </form>
            <NavLink to="/">
                    <button type="submit">Login</button>
            </NavLink>
        </article>
    )
}

export default LoginForm