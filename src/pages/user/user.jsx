import Footer from "../../components/big_components/footer/footer"
import Header from "../../components/big_components/header/header"
import UserInfo from "../../components/small_components/user/user"
import "./user.scss"

const  UserPage= () => {
    return (
        <>
            <Header showNav={true} />
            <main className="user">
                <div className="user-container"><UserInfo/></div>
            </main>
            <Footer/>
        </>
    )
}

export default UserPage