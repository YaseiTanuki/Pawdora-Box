import "./quick-choice-button.scss"

const QuickChoiceButton = (props) => {
    return (
        <button className="quick-choice-button">
            {props.name}
        </button>
    )
}

export default QuickChoiceButton