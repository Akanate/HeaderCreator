import "../styles/container.css"

export default function Container (props) {
    return (
        <div className="Border--container">
            <div className="Border" style={props.applyStyles}></div>
        </div>
    )
}