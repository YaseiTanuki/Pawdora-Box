import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./login_button.scss"
import Starter from "../../starter/starter"
import Popup from "reactjs-popup"

const LoginButton = () => {
    return (
        <Popup trigger={<button className="login-button"><FontAwesomeIcon icon="user"/></button>}>
            <Starter/>
        </Popup>
    )
}

export default LoginButton