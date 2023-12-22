import "./register.scss"
import { NavLink } from 'react-router-dom'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { useNavigate  } from 'react-router-dom';


const Register = () => {
    const navigate = useNavigate();
    const handleLogin = () => {
        const authenticatedUser = {
            id: 1,
            username: 'Umichan',
            fullName: 'Trần Thị Hải',
            email: '21522037@gm.uit.edu.vn',
            
          };
      
          navigate('/user-info', { state: { user: authenticatedUser } });
        }
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
            <button type="submit" onClick={handleLogin}>
                Đăng ký
            </button>
            <p className="notaccount">Bạn đã có tài khoản? &nbsp;
                <NavLink to="/login" className="NavLink">
                    <strong> Đăng nhập ngay</strong>
                </NavLink>
            </p>
        </article>
    )
}

export default Register