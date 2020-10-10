import React from 'react';
import '../css/TextDisplay.css'

const colors = {
    correct: "rgba(119, 219, 119, 0.1)",
    wrong: "rgba(255, 0, 0, 0.1)",
    inactive: "#202020",
}

export default function TextDisplay(props) {
    return (
        <div className="words-holder">
            {props.words.map((word, id) => {
                return <span 
                style={{backgroundColor: colors[word.state]}} 
                className="word" key={id}>{word.value}</span>
            })} 
        </div>
    )
}
