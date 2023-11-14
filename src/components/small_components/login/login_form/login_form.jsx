import "./login_form.scss"

const LoginForm = () => {
    return (
        <article className="login-window">
            <h1>LOGIN</h1>
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