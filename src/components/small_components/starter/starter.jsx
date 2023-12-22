import "./starter.scss"
import { NavLink } from "react-router-dom"

const Starter = () => {

    return (
        <article className="starter">
            <div className="option-login">
                <h4>Welcome!</h4>
                <NavLink to="/login">Đăng nhập</NavLink>
            </div>
            <div className="option-register">
                <h4>Bạn chưa có tài khoản?</h4>
                <NavLink to="/register">Đăng ký</NavLink>
            </div>
        </article>
    )
}

export default Starter