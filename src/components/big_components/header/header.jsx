import "./header.scss"
import LocationLink from "../../small_components/location_link/location_link";
import NavigationBar from "../../small_components/navigation_bar/navigation_bar";
import Logo from "../../small_components/logo/logo";

const Header = () => {
    return (
        <header>
            <Logo/>
            <NavigationBar/>
        </header>
    )
}

export default Header