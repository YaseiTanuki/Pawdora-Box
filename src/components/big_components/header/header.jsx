import "./header.scss"
import NavigationBar from "../../small_components/navigation_bar/navigation_bar";
import Logo from "../../small_components/logo/logo";
import LoginButton from "../../small_components/login/login_button/login_button";
import SearchBar from "../../small_components/search_bar/search_bar";

const Header = (props) => {
    return (
        <header>
            <section className="header-content">
                <section className="site-name">
                    <Logo/>
                    <SearchBar/>
                    <LoginButton/>
                </section>
                { props.showNav ? 
                <NavigationBar/> : <></>
                }
            </section>
        </header>
    )
}

export default Header