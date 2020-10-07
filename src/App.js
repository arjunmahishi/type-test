import React from 'react';
import TextDisplay from './components/TextDisplay';
import './css/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      typedText: ""
    }
  }

  handleInput = (e) => {
    this.setState({typedText: e.target.value})
  }

  render() {
    return (
      <div className="App">
        <TextDisplay typedText={this.state.typedText} />
        <input id="text-input" className="text-input" onInput={this.handleInput} />
      </div>
    );
  }
}

export default App;
