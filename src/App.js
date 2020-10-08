import React from 'react';
import TextDisplay from './components/TextDisplay';
import './css/App.css';

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
    this.timerStarted = true
    this.setState({typedText: e.target.value})
  }

  resetInput = () => {
    this.setState({
      typedText: "",
    })
    this.timerStarted = false
  }

  render() {
    return (
      <div className="App">
        <h2 className="speed">40 wpm</h2>
        <TextDisplay 
          typedText={this.state.typedText} 
          resetCallback={this.resetInput}
          numberOfWords={NumberOfWords} 
        />
        <input value={this.state.typedText} 
          id="text-input" 
          className="text-input" 
          onChange={this.handleInput} 
          // placeholder="start typing"
        />
      </div>
    );
  }
}

export default App;
