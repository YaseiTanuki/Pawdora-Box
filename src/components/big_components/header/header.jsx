import "./header.scss"
import NavigationBar from "../../small_components/navigation_bar/navigation_bar"
import Logo from "../../small_components/logo/logo"
import LoginButton from "../../small_components/login/login_button/login_button"
import SearchBar from "../../small_components/search_bar/search_bar"
import CartButton from "../../small_components/cart/cart_button/cart_button"
import LocationLink from "../../small_components/location_link/location_link"

const Header = (props) => {
    return (
        <header>
            <section className="header-location-link">
                <LocationLink/>
            </section>
            <section className="header-content">
                <section className="site-name">
                    <Logo showSlogan={true} style="logo"/>
                    <SearchBar/>
                    <section className="button-container">
                        <article className="login-button-container">
                            <LoginButton/>
                        </article>
                        <article className="cart-button-container">
                            <CartButton/>
                        </article>
                        
                    </section>
                    
                </section>
                { props.showNav ? 
                    (<section className="navigation">
                        <NavigationBar/>
                    </section>) : <></>
                }
            </section>
        </header>
    )
}

export default Header