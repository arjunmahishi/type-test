import React from 'react';
import '../css/TextDisplay.css'

export default function TextDisplay(props) {
    return (
        <div className="words-holder">
            {props.words.map((letter, id) => 
                <span 
                className={"letter letter-" + letter.state + (letter.value === " " ? " letter-space" : "")} 
                key={id}
                >{letter.value}</span>
            )} 
        </div>
    )
}
