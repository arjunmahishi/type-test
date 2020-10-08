import React from 'react';
import '../css/TextDisplay.css'
import { getRandomWords } from '../lib/randomWords'

const colors = {
    correctWord: "rgba(119, 219, 119, 0.37)",
    activeWord: "rgba(255, 0, 0, 0.3)",
}

class TextDisplay extends React.Component {
    constructor(props) {
        super(props);
        let randomWords = getRandomWords(7)
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
        for (let i=0;i < Math.min(typedWords.length, displayedWords.length);i++) {
            displayedWords[i].bgColor = typedWords[i] === displayedWords[i].value ? 
            colors.correctWord: colors.activeWord;
            displayedWords[i].correct = typedWords[i] === displayedWords[i].value
        }
        this.setState({wordObjects: displayedWords})
        if (this.isComplete()) {
            this.resetWords()
        }
    }

    isComplete = () => this.breakText(this.props.typedText).length > this.state.words.length || 
        this.state.wordObjects[this.state.wordObjects.length-1].correct

    resetWords = () => {
        let randomWords = getRandomWords(7)
        this.setState({
            words: randomWords,
            wordObjects: this.getWordsObjects(randomWords),
        })
        this.props.resetCallback()
    }

    getWordsObjects = (words) => words.map(word => {
        return {value: word, bgColor: "#fff", correct: false}
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