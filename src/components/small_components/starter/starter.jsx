import "./starter.scss"

const Starter = () => {
    return (
        <article className="starter">
            <div className="option-login">
                <h4>Welcome!</h4>
                <button>login</button>
            </div>
            <div className="option-register">
                <h4>Do not have account?</h4>
                <button>Register</button>  
            </div>
        </article>
    )
}

export default Starter