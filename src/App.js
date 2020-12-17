import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MathEquation from './MathEquation';


class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      value1: 0,
      value2: 0,
      value3: 0,
	  proposedAnswer: 0,
      numCorrect: 0,
      numQuestions: 0
    }
  }
  
  componentDidMount() {
    this.generateNewQuestion();
  }
  
  generateNewQuestion() {
    const value1 = Math.floor(Math.random() * 100);
    const value2 = Math.floor(Math.random() * 100);
    const value3 = Math.floor(Math.random() * 100);
    const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
    this.setState({ value1, value2, value3, proposedAnswer })
  }
  
  validateAnswer(answer) {
    const { value1, value2, value3, proposedAnswer } = this.state;
    if (answer === 'true' && (value1 + value2 + value3 === proposedAnswer)) {
      this.setState((preState) => ({numCorrect: preState.numCorrect + 1, numQuestions: preState.numQuestions + 1}))
    }
    else if (answer === 'false' && (value1 + value2 + value3 !== proposedAnswer)){
      this.setState((preState) => ({numCorrect: preState.numCorrect + 1, numQuestions: preState.numQuestions + 1}))
    }
    else {
      this.setState((preState) => ({numQuestions: preState.numQuestions + 1}))
    }
    this.generateNewQuestion();
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
		  <MathEquation 
			value1={this.state.value1} 
			value2={this.state.value2} 
			value3={this.state.value3} 
			proposedAnswer={this.state.proposedAnswer} 
			handleAnswer={(ans) => this.validateAnswer(ans)}
		  />

          <p className="text">
            Your Score: {this.state.numCorrect}/{this.state.numQuestions}
          </p>
		</div>
      </div>
    );
  }
}

export default App;
