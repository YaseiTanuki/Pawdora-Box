import "./register.scss"
import { NavLink } from 'react-router-dom'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'


const Register = () => {
    const [showPassword, setShowPassword] = useState(false)

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }
    return (
        <article className="register-window">
            <div className="header_register">
                <p className="logo">Pawdora Box</p>
                <h1>Đăng ký</h1>
            </div>
            <form action="">
                <label htmlFor="user-name">Họ và tên:</label><br />
                <input type="text" /><br />
                <label htmlFor="phone">Số điện thoại:</label><br />
                <input type="text" /><br />
                <label htmlFor="email">Email:</label><br />
                <input type="email" /><br />
                <label htmlFor="password">Mật khẩu:</label><br />
                <div className="password-input-container">
                    <input type={showPassword ? "text" : "password"} />
                    <FontAwesomeIcon
                        icon={showPassword ? faEye : faEyeSlash}
                        onClick={togglePasswordVisibility}
                        className="eye-icon"/>
                </div>
                <label for="psw-repeat">Nhập lại mật khẩu: </label><br />
                <div className="password-input-container">
                    <input type={showPassword ? "text" : "password"} />
                    <FontAwesomeIcon
                        icon={showPassword ? faEye : faEyeSlash}
                        onClick={togglePasswordVisibility}
                        className="eye-icon"/>
                </div>
            </form>
            <NavLink to="/">
                    <button type="submit">Đăng ký</button>
            </NavLink>
            <p className="notaccount">Bạn đã có tài khoản? &nbsp;
                <NavLink to="/login" className="NavLink">
                    <span> Đăng nhập</span>
                </NavLink>
            </p>
        </article>
    )
}

export default Register