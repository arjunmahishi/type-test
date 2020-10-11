import React from 'react';
import GitHubButton from "react-github-btn"
import Button from '@material-ui/core/Button';
import TextDisplay from './components/TextDisplay'
import './css/App.css'
import { calculateSpeed } from "./lib/speed"
import { startTimer, stopTimer } from "./lib/timer"
import { breakText, evaluateTypedWords, getRandomWords, wordStates } from './lib/wordOperations';

const numberOfWords = 5

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.freshState()
    this.timerStarted = false
  }

  handleInput = (e) => {
    if (!this.timerStarted) {
      startTimer()
    }
    this.timerStarted = true
    let inputWords = breakText(e.target.value)
    let wordsToDisplay = evaluateTypedWords(this.state.randomWords, inputWords)
    this.setState({
      typedText: e.target.value,
      wordsToDisplay: wordsToDisplay,
    })
    if (this.isComplete(wordsToDisplay, inputWords)) {
      this.reset()
    }
  }

  reset = () => {
    let state = this.freshState()
    state.speed = calculateSpeed(numberOfWords, stopTimer())
    this.setState(state)
    this.timerStarted = false
  }

  restart = () =>{
    this.setState({
      typedText: "",
      speed: 0
    })

  isComplete = (wordsToDisplay, inputWords) => inputWords.length > this.state.randomWords.length || 
    wordsToDisplay[wordsToDisplay.length-1].state === wordStates.CORRECT

  freshState = () => {
    let randomWords = getRandomWords(numberOfWords)
    return {
      typedText: "",
      speed: 0,
      randomWords: randomWords,
      wordsToDisplay: evaluateTypedWords(randomWords, []),
    }
  }

  render() {
    return (
    <>
      <div className="gitBtn">
        <GitHubButton href="https://github.com/arjunmahishi/type-test" data-color-scheme="no-preference: light; light: light; dark: dark;" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star arjunmahishi/type-test on GitHub">Star</GitHubButton>
      </div>
      <h1 className="appName">type-test</h1>
      
      <div className="App">
        <section className="wpmReset">
           <h2 className="speed">{this.state.speed} wpm</h2>
        <Button color="secondary" className="restartBtn" onClick={this.restart}>RESTART</Button>    
        </section>
         
        <TextDisplay 
          typedText={this.state.typedText}
          resetCallback={this.resetInput}
          numberOfWords={NumberOfWords}
        />
        <input value={this.state.typedText}
          id="text-input"
          className="text-input"
          onChange={this.handleInput}
        />
      </div>
    </>
    );
  }
}

export default App;
