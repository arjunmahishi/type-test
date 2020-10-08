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

  resetInput = () => this.setState({
    typedText: "",
  })

  render() {
    return (
      <div className="App">
        <TextDisplay typedText={this.state.typedText} resetCallback={this.resetInput} />
        <input value={this.state.typedText} id="text-input" className="text-input" onChange={this.handleInput} />
      </div>
    );
  }
}

export default App;
