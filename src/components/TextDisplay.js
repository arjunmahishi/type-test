import React from 'react';
import '../css/TextDisplay.css'
import { getRandomWords } from '../lib/randomWords'
import { breakText } from "../lib/utils"

const colors = {
    correctWord: "rgba(119, 219, 119, 0.37)",
    activeWord: "rgba(255, 0, 0, 0.3)",
}

class TextDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            words: getRandomWords(7),
            wordColorMap: [],
        }
    }
    
    componentDidMount() {
        // transform the words array to wordColorMap
        this.setState({
            wordColorMap: this.state.words.map(word => {
                return {value: word, bgColor: "#fff"}
            })
        })
    }

    componentDidUpdate(oldProps) {
        if (oldProps !== this.props) {
            this.handlePropsChange(this.props)
        }
    }

    handlePropsChange = (newProps) => {
        let typedWords = breakText(newProps.typedText);
        let displayedWords = this.state.wordColorMap;
        for (let i=0;i < Math.min(typedWords.length, displayedWords.length);i++) {
            displayedWords[i].bgColor = typedWords[i] === displayedWords[i].value ? 
            colors.correctWord: colors.activeWord;
        }
        this.setState({wordColorMap: displayedWords})
    }

    render() {
        return(
            <div className="words-holder">
                {this.state.wordColorMap.map((word, id) => {
                    return <span 
                    style={{backgroundColor: word.bgColor}} 
                    className="word" key={id}>{word.value}</span>
                })} 
            </div>
        )
    }
}

export default TextDisplay;