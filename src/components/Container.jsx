import "../styles/container.css"

export default function Container (props) {
    return (
        <div className="Header--container">
            <div className="Header" style={props.applyStyles}></div>
        </div>
    )
}