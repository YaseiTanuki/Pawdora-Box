import "./register.scss"
import { NavLink } from 'react-router-dom'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';


const Register = () => {
    const [showPassword, setShowPassword] = useState(false)

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }
    return (
        <article className="register-window">
            <div className="header_register">
                <p className="Logo">Pawdora Box</p>
                <h1>ĐĂNG KÝ</h1>
            </div>
            <form action="">
                <div className="input-container">
                    <FontAwesomeIcon icon={faUser} className="user-icon" />
                    <input type="text" placeholder="Họ và tên" />
                </div>

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
                <div className="password-input-container">
                    <FontAwesomeIcon icon={faLock} className="lock-icon" />
                    <input  placeholder="Nhập lại mật khẩu" type={showPassword ? "text" : "password"} />
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
                    <span> Đăng nhập ngay</span>
                </NavLink>
            </p>
        </article>
    )
}

export default Register