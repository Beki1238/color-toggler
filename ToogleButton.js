import React, { useState } from 'react'
import "../style.css"

const ToogleButton = () => {
    const [backgroundcolor, setBackgroundcolor]= useState("white");
    const [textColor, setTextColor] = useState("#1b1b1b");
    const [buttonStyle, setButtonStyle] = useState("white");

    const handleClick =()=>{
        setBackgroundcolor(backgroundcolor === 'white'? '#1b1b1b': 'white')
        setTextColor(textColor === '#1b1b1b'? '#ffa31a' : '#1b1b1b')
        setButtonStyle(backgroundcolor === 'white'? '#1b1b1b': 'white')
    }
  return (
    <div style={{background:backgroundcolor, color: textColor}}>
        <button 
        onClick={handleClick}
        style={{buttonStyle, color:textColor, border: `2px,solid,${textColor}`}}
        >
            {backgroundcolor === '#1b1b1b'? "white themes": "black themes"}
        </button>

        <section className='content'>
            <h1>tesheX our Teacher</h1>
        </section>

    </div>
  )
}

export default ToogleButton