import "./header.scss"
import NavigationBar from "../../small_components/navigation_bar/navigation_bar";
import Logo from "../../small_components/logo/logo";
import LoginButton from "../../small_components/login/login_button/login_button";

const Header = () => {
    return (
        <header>
            <section className="site-name">
                <Logo/>
                <LoginButton/>
            </section>
            <NavigationBar/>
        </header>
    )
}

export default Header