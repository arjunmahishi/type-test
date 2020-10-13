import React from 'react';
import TextDisplay from './components/TextDisplay'
import './css/App.css'
import { calculateScore, resetScore } from "./lib/score"
import { startTimer, stopTimer } from "./lib/timer"
import { breakText, evaluateTypedWords, getRandomWords, wordStates } from './lib/wordOperations';
import ScoreDisplay from './components/ScoreDisplay';
import AppHeader from './components/AppHeader';

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
    let wordObjs = evaluateTypedWords(this.state.randomWords, inputWords)

    // check if the round is complete
    if (this.isComplete(wordObjs, inputWords)) {
      this.reset(wordObjs)
      return
    }

    // if not, update the state
    this.setState({
      typedText: e.target.value,
      wordObjs: wordObjs,
    })
  }

  reset = (wordObjs) => {
    let state = this.freshState()
    state.score = calculateScore(wordObjs, stopTimer())
    this.setState(state)
    this.timerStarted = false
  }

  handleResetScore = () =>{
    this.setState({
      score: this.freshState().score,
    })
    resetScore()
  }

  isComplete = (wordsToDisplay, inputWords) => inputWords.length > this.state.randomWords.length || 
    wordsToDisplay[wordsToDisplay.length-1].state === wordStates.CORRECT

  freshState = () => {
    let randomWords = getRandomWords(numberOfWords)
    return {
      typedText: "",
      score: {speed: 0, accuracy: 0},
      randomWords: randomWords,
      wordObjs: evaluateTypedWords(randomWords, []),
    }
  }

  render() {
    return (
      <>
        <AppHeader />
        <div className="App">
          <ScoreDisplay score={this.state.score} resetCallback={this.handleResetScore}/>
          <TextDisplay words={this.state.wordObjs} />
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
