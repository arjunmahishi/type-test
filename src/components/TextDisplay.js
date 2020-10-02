import React from 'react';
import '../css/TextDisplay.css'

class TextDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "this is a sample text",
            words: [], // array of objects {value, color}
        }
    }
    
    componentDidMount() {
        this.setState({words: this.state.text.split(' ').map(word => {
            return {value: word, bgColor: "#fff"}
        })})
    }

    static getDerivedStateFromProps = (props, state) => {
        let typedWords = props.typedText.split(' ');
        let displayedWords = state.words;
        for (let i=0;i < Math.min(typedWords.length, displayedWords.length);i++) {
            displayedWords[i].bgColor = typedWords[i] === displayedWords[i].value ? 
            "#0f0": "#fff";
        }
        return {words: displayedWords} 
    }

    handleInput = () => "";

    changeColors = () => "";

    render() {
        return(
            <div>
                <span>
                    {this.state.words.map((word, id) => {
                        return <span 
                        style={{backgroundColor: word.bgColor}} 
                        className="word" key={id}>{word.value}</span>
                    })} 
                </span>
            </div>
        )
    }
}

export default TextDisplay;