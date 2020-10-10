import React from 'react';
import GitHubButton from "react-github-btn"
import TextDisplay from './components/TextDisplay'
import './css/App.css'
import { calculateScore } from "./lib/score"
import { startTimer, stopTimer } from "./lib/timer"
import { breakText, evaluateTypedWords, getRandomWords, wordStates } from './lib/wordOperations';
import ScoreDisplay from './components/ScoreDisplay';

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
  componentDidMount() {
    // Update the data-theme attribute of our html tag
    document
      .getElementsByTagName("HTML")[0]
      .setAttribute("data-theme", localStorage.getItem("theme"));
  }
  // Class method allowing us to toggle the theme change
  toggleThemeChange = () => {
    const { checked } = this.state;
    // If theme is light then change to dark
    if (checked === false) {
      // Update localstorage
      localStorage.setItem("theme", "dark");
      /**
       * The document.getElementsByTagName(...).setAttribute(...)
       * will only update the value
       */
      // Update the data-theme attribute of our html tag
      document
        .getElementsByTagName("HTML")[0]
        .setAttribute("data-theme", localStorage.getItem("theme"));
      // Update our state
      this.setState({
        // Ensure our switch is on if we change to dark theme
        checked: true
      });
    } else {
      // Update localstorage
      localStorage.setItem("theme", "light");
      /**
       * The document.getElementsByTagName(...).setAttribute(...)
       * will only update the value until the App is mounted and we change
       * the state of the switch so we will need to introduce
       * a React lifecycle called ˝componentDidMount()˝
       */
      // Update the data-theme attribute of our html tag
      document
        .getElementsByTagName("HTML")[0]
        .setAttribute("data-theme", localStorage.getItem("theme"));
      // Update our state
      this.setState({
        // Ensure our switch is off if we change to light theme
        checked: false
      });
    }
  };

  resetScore = () =>{
    this.setState({
      score: this.freshState().score,
    })
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
      checked: localStorage.getItem("theme") === "dark" ? true : false,
      theme: localStorage.getItem("theme"),
    }
  }

  render() {
    return (
    <>
      <div className="gitBtn">
        <GitHubButton href="https://github.com/arjunmahishi/type-test" data-color-scheme="no-preference: light; light: light; dark: dark;" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star arjunmahishi/type-test on GitHub">Star</GitHubButton>
        <div>
        <label className="switch">
          <input
            type="checkbox"
            checked={this.state.checked}
            defaultChecked={this.state.checked}
            onChange={() => this.toggleThemeChange()}
          />
          <span className="slider round" />
          </label>
          </div>
          </div>
          
      <h1 className="appName">type-test</h1>
      <div className="App">
        <ScoreDisplay score={this.state.score} resetCallback={this.resetScore}/>
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
