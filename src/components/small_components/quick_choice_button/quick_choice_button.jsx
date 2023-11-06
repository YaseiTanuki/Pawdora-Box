import "./quick-choice-button.scss"

const QuickChoiceButton = (props) => {
    return (
        <a className="quick-choice-button">
            {props.name}
        </a>
    )
}

export default QuickChoiceButton