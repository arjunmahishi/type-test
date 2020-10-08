import React from 'react';
import '../css/TextDisplay.css'
import { getRandomWords } from '../lib/randomWords'

const colors = {
    correctWord: "rgba(119, 219, 119, 0.1)",
    activeWord: "rgba(255, 0, 0, 0.1)",
    inActiveWord: "#202020",
}

class TextDisplay extends React.Component {
    constructor(props) {
        super(props);
        let randomWords = getRandomWords(this.props.numberOfWords)
        this.state = {
            words: randomWords,
            wordObjects: this.getWordsObjects(randomWords),
        }
    }
    
    componentDidUpdate(oldProps) {
        if (oldProps !== this.props) {
            this.handlePropsChange(this.props)
        }
    }

    breakText = (text) => text.split(' ').filter(ele => ele !== '');

    handlePropsChange = (newProps) => {
        let typedWords = this.breakText(newProps.typedText);
        let displayedWords = this.state.wordObjects;

        displayedWords.map((wordObj, i) => {
            if (i < typedWords.length) {
                wordObj.correct = typedWords[i] === wordObj.value
                wordObj.bgColor = wordObj.correct ? colors.correctWord : colors.activeWord
                return wordObj
            }
            wordObj.bgColor = colors.inActiveWord
            return wordObj
        })
        
        this.setState({wordObjects: displayedWords})
        if (this.isComplete()) {
            this.resetWords()
        }
    }

    isComplete = () => this.breakText(this.props.typedText).length > this.state.words.length || 
        this.state.wordObjects[this.state.wordObjects.length-1].correct

    resetWords = () => {
        let randomWords = getRandomWords(this.props.numberOfWords)
        this.setState({
            words: randomWords,
            wordObjects: this.getWordsObjects(randomWords),
        })
        this.props.resetCallback()
    }

    getWordsObjects = (words) => words.map(word => {
        return {value: word, bgColor: colors.inActiveWord, correct: false}
    })

    render() {
        return(
            <div className="words-holder">
                {this.state.wordObjects.map((word, id) => {
                    return <span 
                    style={{backgroundColor: word.bgColor}} 
                    className="word" key={id}>{word.value}</span>
                })} 
            </div>
        )
    }
}

export default TextDisplay;