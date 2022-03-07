import "../styles/main.css"
import React, { useState, useEffect } from "react"
import { HexColorPicker } from 'react-colorful';
import Container from "./Container"

export default function Main() {
    const [boxShadowColor, setBoxShadowColor] = useState('#aabbcc')
    const [htmlclass, setHtmlClass] = useState("")
    const [styles, setStyles] = useState({
        boxShadow: "0px 0px 0px 0px",
        shadowColor: "",
        borderStyle: "none",
        borderWidth: "0px",
        borderColor: "",
        backgroundColor: "#aabbcc",
        borderRadius: "0px",
        width: "500px",
        height: "100px"
    }) 

    useEffect(() => {
        setStyles(prevStyle => {
            return {
                ...prevStyle,
                shadowColor: boxShadowColor
            }
        })
    },[boxShadowColor])

    return (
        <>  
            <div className="BoxShadow">
            Box Shadow: <input type="range" defaultValue="0" min="0" max="30" step="0.01" onChange={e => setStyles(prevStyle => {
            return {
                ...prevStyle,
                boxShadow: `${e.target.value}px ${e.target.value}px ${e.target.value}px ${e.target.value}px`
            }
        })
    }>
            </input>
            </div>
            <div className="BorderStyle--container">
            Border Style: <select onChange={e => setStyles(prevStyle => {
                return {
                    ...prevStyle,
                    borderStyle: e.target.value
                }
            })} className="borderselection">
                <option value="none">None</option>
                <option value="ridge">Ridge</option>
                <option value="solid">Solid</option>
                <option value="dotted">Dotted</option>
                <option value="double">Double</option>
                <option value="inset">Inset</option>
                <option value="outset">Outset</option>
                <option value="hidden">Hidden</option>
            </select>
            </div>
            <div className="BorderRange--container">
                Border-width<input type="range" defaultValue="0" min="0" max="20" step="0.1" onChange={e => setStyles(prevStyle => {
                    return {
                        ...prevStyle,
                        borderWidth: `${e.target.value}px`
                    }
                })}></input>
            </div>

            <div className="BorderRadius--container">
                Border-radius <input type="range" defaultValue="0" min="0" max="25" onChange={e => setStyles(prevStyle => {
                    return {
                        ...prevStyle,
                        borderRadius: `${e.target.value}px`
                    }
                })}></input>    
            </div>
            <div className="BorderColorPicker--container">
                Border Color:<HexColorPicker color={styles.borderColor} onChange={e => setStyles(prevStyle => {
                    return {
                        ...prevStyle,
                        borderColor: e
                    }
                })}/>
            </div>

            <div className="classInput--container">
                <span>HTML class Name</span>
                <input className="classInput" onChange={e => setHtmlClass(e.target.value)}></input>    
            </div>

            <Container applyStyles={{
                boxShadow: `${styles.boxShadow} ${styles.shadowColor}`,
                borderStyle: styles.borderStyle,
                borderWidth: styles.borderWidth,
                borderColor: styles.borderColor,
                backgroundColor: styles.backgroundColor,
                borderRadius: styles.borderRadius,
                width: styles.width,
                height: styles.height
            }}/>
            
            <div className="BackgroundColorPicker--container">
                Background Color:<HexColorPicker color={styles.backgroundColor} onChange={e => setStyles(prevStyle => {
                    return {
                        ...prevStyle,
                        backgroundColor: e
                    }
                })}/>
            </div>

            <div className="BoxShadowColor--container">
                Box Shadow Color:<HexColorPicker color={styles.boxShadow} onChange={setBoxShadowColor}/>  
            </div>
            <div className="CSS-HTML">
                <div className="CSS">
                    CSS
                    <hr />
                    <p>{`.${htmlclass === "" ? "default": htmlclass} {`}</p>
                        {styles.boxShadow === "0px 0px 0px 0px" ? "": <p>box-shadow: {styles.boxShadow} {styles.shadowColor}</p>}
                        {styles.borderStyle === "none" ? "": <p>border-style: {styles.borderStyle}</p>}
                        {styles.borderWidth === "0px" ? "": <p>border-width: {styles.borderWidth}</p>}
                        {styles.borderColor === "" ? "": <p>border-color: {styles.borderColor}</p>}
                        {styles.backgroundColor === "" ? "": <p>background-color: {styles.backgroundColor}</p>}
                        {styles.borderRadius === "0px"  ? "": <p>border-radius: {styles.borderRadius}</p>}
                        <p>{"}"}</p>
                </div>
                <div className="HTML HTML-edge" >
                    HTML
                   <hr /> 
                   <p>{`<header class="${htmlclass === "" ? "default": htmlclass}"</header>`}</p>
                </div>
                
            </div>
        </>
        
    )
}
