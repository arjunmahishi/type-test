import React from 'react';
import '../../css/TextDisplay.css'

const TextDisplay = ({ words }: any) => (
  <div className="words-holder">
    {
      words.map((letter: any, id: number) => 
        <span className={
          "letter letter-" + letter.state + (
            letter.value === " " ? " letter-space" : ""
          )
        } key={id}>{letter.value}</span>
      )
    } 
  </div>
)

export default TextDisplay
