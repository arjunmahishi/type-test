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


// class TextDisplay1 extends React.Component {
//     constructor(props) {
//         super(props);
//         let randomWords = getRandomWords(this.props.numberOfWords)
//         this.state = {
//             words: randomWords,
//             wordObjects: this.getWordsObjects(randomWords),
//         }
//     }
    
//     componentDidUpdate(oldProps) {
//         if (oldProps !== this.props) {
//             this.handlePropsChange(this.props)
//         }
//     }

//     breakText = (text) => text.split(' ').filter(ele => ele !== '');

//     handlePropsChange = (newProps) => {
//         let typedWords = this.breakText(newProps.typedText);
//         let displayedWords = this.state.wordObjects;

        
//         this.setState({wordObjects: displayedWords})
//         if (this.isComplete()) {
//             this.resetWords()
//         }
//     }

//     isComplete = () => this.breakText(this.props.typedText).length > this.state.words.length || 
//         this.state.wordObjects[this.state.wordObjects.length-1].correct

//     resetWords = () => {
//         let randomWords = getRandomWords(this.props.numberOfWords)
//         this.setState({
//             words: randomWords,
//             wordObjects: this.getWordsObjects(randomWords),
//         })
//         this.props.resetCallback()
//     }

//     getWordsObjects = (words) => words.map(word => {
//         return {value: word, bgColor: colors.inActiveWord, correct: false}
//     })

//     render() {
//         return(
//         )
//     }
// }
