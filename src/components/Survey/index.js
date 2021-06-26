import "./index.scss";

function Survey({percentUsers, text, className}) {
    return (
        <div className="Survey">
            <h2 className="percentUsers">{percentUsers}</h2>
            <span className={className}>{text}</span>
        </div>
    )
}

export default Survey;