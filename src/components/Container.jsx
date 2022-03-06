import "../styles/container.css"

export default function Container (props) {
    return (
        <div className="HeaderContainer--container">
            <div className="HeaderContainer" style={props.applyStyles}></div>
        </div>
    )
}