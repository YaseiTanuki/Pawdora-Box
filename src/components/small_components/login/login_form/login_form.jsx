import "./login_form.scss"
import { NavLink } from 'react-router-dom'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [rememberAccount, setRememberAccount] = useState(false)

    const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
    }
    const handleForgotPassword = () => {
        console.log("Forgot Password clicked");
    }
    const handleRememberAccount = () => {
        setRememberAccount(!rememberAccount);
    }

    return (
        <article className="login-window">
            <div className="header-login">
                <p className="Logo">Pawdora Box</p>
                <h1>ĐĂNG NHẬP</h1>
            </div>
            <form action="">
            <div className="input-container">
                <FontAwesomeIcon icon={faEnvelope} className="email-icon" />
                <input type="email" placeholder="Email" />
            </div>
                <div className="password-input-container">
                    <FontAwesomeIcon icon={faLock} className="lock-icon" />
                    <input placeholder="Mật khẩu" type={showPassword ? "text" : "password"} />
                    <FontAwesomeIcon
                        icon={showPassword ? faEye : faEyeSlash}
                        onClick={togglePasswordVisibility}
                        className="eye-icon"/>
                </div>
                <div className="options-row">
                    <div className="remember-account">
                        <input
                            type="checkbox"
                            id="rememberAccount"
                            checked={rememberAccount}
                            onChange={handleRememberAccount}/>
                        <label htmlFor="rememberAccount">Nhớ tài khoản</label>
                    </div>
                    <div className="forgot-password">
                        <a href="#" onClick={handleForgotPassword}>
                            Quên mật khẩu?
                        </a>
                    </div> 
                </div>  
            </form>
            <NavLink to="/">
                    <button type="submit">Đăng nhập</button>
            </NavLink>
            <p className="notaccount">Bạn chưa có tài khoản? &nbsp;
                <NavLink to="/register" className="NavLink">
                    <span> Đăng ký ngay</span>
                </NavLink>
            </p>
        </article>
    )
}

export default LoginForm