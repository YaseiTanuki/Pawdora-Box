import "./logo.scss"
import { NavLink } from "react-router-dom"

const Logo = (props) => {
    return (
        <article className={props.style}>
            <NavLink to="/" className="site-name">Pawdora Box</NavLink>
            {props.showSlogan ? <p>Mỗi hộp Pawdora chứa đựng yêu thương <br /> và sự thoải mái cho thú cưng của bạn!</p>
            : <></>}
        </article>
    )
}

export default Logo