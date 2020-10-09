import React from 'react';
import TextDisplay from './components/TextDisplay';
import './css/App.css';
import { calculateSpeed } from "./controllers/speed"
import { startTimer, stopTimer } from "./controllers/timer"
import GitHubButton from "react-github-btn"

const NumberOfWords = 5

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      typedText: "",
      speed: 0,
    }
    this.timerStarted = false
  }

  handleInput = (e) => {
    if (!this.timerStarted) {
      startTimer()
    }
    this.timerStarted = true
    this.setState({typedText: e.target.value})
  }

  resetInput = () => {
    this.setState({
      typedText: "",
      speed: calculateSpeed(NumberOfWords, stopTimer()),
    })
    this.timerStarted = false
  }

  render() {
    return (
      <>
      <div className="gitBtn">
        <GitHubButton href="https://github.com/arjunmahishi/type-test" data-color-scheme="no-preference: light; light: light; dark: dark;" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star arjunmahishi/type-test on GitHub">Star</GitHubButton>
      </div>
      <h1 className="appName">type-test</h1>
      <div className="App">       
        <h2 className="speed">{this.state.speed} wpm</h2>
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
