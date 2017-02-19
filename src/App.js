import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor() {
    super();

    this.state = {
      list: []
    }

    this.handleUpdateList = this.handleUpdateList.bind(this)
  }

  handleUpdateList(newList) {
    console.log(newList);
    this.setState({
      list: newList
    }) 
  }

  render() {
    return (
      <div className="App">
        <div className="Body">
          <Inputarea list={this.state.list} updateList={this.handleUpdateList}/>
          <div className="hz" />
          <ItemList list={this.state.list}/>
         </div>
      </div>
    );
  }
}


class Inputarea extends Component {

  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
    }

    //bind this to use handleSubmit func
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  //handle input change when typing
  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }

  //handle submission of form
  handleSubmit(event) {
    event.preventDefault();

    //no empty input
    if(this.state.inputValue) {
      var newList = this.props.list.push(this.state.inputValue)
    }

    //updating the components list state & empty input
    this.setState({
      inputValue: ''    
    })

    //execute function to update list in parent comp. and pass the new list
    this.props.updateList(this.props.list)
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit} updateList={this.handleSubmit}>
        <input type="text" value={this.state.inputValue} onChange={this.handleChange} placeholder="item" />
        <input type="submit" value="Submit" />
      </form>
    )
  }
} 


class ItemList extends Component {
  render() {
    console.log(this.props);
     var myList = this.props.list.map((item) => 
        <li key={item.toString()}>{item}</li>
    )
    
    return (
        <ul>{myList}</ul>
      );
    }
  }

export default App;
