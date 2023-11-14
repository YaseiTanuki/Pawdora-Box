import "./login_form.scss"

const LoginForm = () => {
    return (
        <article className="login-window">
            <form action="">
                <label htmlFor="user-name">User name:</label><br />
                <input type="text" /><br />
                <label htmlFor="password">Password:</label><br />
                <input type="text" />
            </form>
        </article>
    )
}

export default LoginForm