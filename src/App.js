import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="Body">
          <Inputarea />
          <div className="hz" />
          <List />
        </div>
      </div>
    );
  }
}

class Inputarea extends Component {
  render() {
    return (
      <div>
        <input placeholder="item" />
        <button>add</button>
      </div>
    )
  }
} 

class List extends Component {
  constructor() {
    super();
    this.state = {
      list: new Array()
    };
  }

  render() {
    return (
      <ul>
        <li>item 1</li>
        <li>item 1</li>
        <li>item 1</li>
      </ul>
    );
  }
}

export default App;
