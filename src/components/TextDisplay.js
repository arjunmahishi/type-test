import React from 'react';
import '../css/TextDisplay.css'

export default function TextDisplay(props) {
    return (
        <div className="words-holder">
            {props.words.map((word, id) => 
                <span 
                className={"word word-" + word.state} 
                key={id}
                >{word.value}</span>
            )} 
        </div>
    )
}
