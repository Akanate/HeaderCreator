import "../styles/main.css"
import React, { useState, useEffect } from "react"
import { HexColorPicker } from 'react-colorful';

export default function Main() {
    const [boxShadowColor, setBoxShadowColor] = useState('#aabbcc')
    const [styles, setStyles] = useState({
        boxShadow: "1px 1px 1px 1px",
        shadowColor: "#aaaaa",
        borderStyle: "None",
        borderWidth: "5px",
        borderColor: "#ffffff",
        backgroundColor: "#aabbcc",
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
            Box Shadow: <input type="range" defaultValue="0" min="0" max="11" step="0.01" onChange={e => setStyles(prevStyle => {
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
                Border-width<input type="range" defaultValue="0" min="0" max="20" onChange={e => setStyles(prevStyle => {
                    return {
                        ...prevStyle,
                        borderWidth: `${e.target.value}px`
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
            
            <div className="Border" style={{
                boxShadow: `${styles.boxShadow} ${styles.shadowColor}`,
                borderStyle: styles.borderStyle,
                borderWidth: styles.borderWidth,
                borderColor: styles.borderColor,
                backgroundColor: styles.backgroundColor,
                width: styles.width,
                height: styles.height
            }}>
                Header Preview
            </div>
            <div className="CSS">
                CSS
                <hr />
                <p>box-shadow: {styles.boxShadow} {styles.shadowColor}</p>
                <p>border-style: {styles.borderStyle}</p>
                <p>border-width: {styles.borderWidth}</p>
                <p>border-color: {styles.borderColor}</p>
                <p>background-color: {styles.backgroundColor}</p>
            </div>
        </>
        
    )
}