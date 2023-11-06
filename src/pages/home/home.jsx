import "./Home.scss"
import Banner from "../../components/small_components/banner/banner"
import QuickChoiceButton from "../../components/small_components/quick_choice_button/quick_choice_button"

const Home = () => {
    return (
        <main className="home">
            <section className="banner-container">
                <Banner/>
            </section>
            <section className="main-content">
                <article className="quick-choice">
                    <ul className="quick-choice-list">
                        <li><QuickChoiceButton name="Dog Food"/></li>
                        <li><QuickChoiceButton name="Cat Food"/></li>
                        <li><QuickChoiceButton name="Dog Toy"/></li>
                        <li><QuickChoiceButton name="Cat Toy"/></li>
                        <li><QuickChoiceButton name="Pet Service"/></li>
                        <li><QuickChoiceButton name="Medical"/></li>
                    </ul>
                </article>
            </section>
        </main>
    )
}

export default Home