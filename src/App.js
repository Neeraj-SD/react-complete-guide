import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {

  state = {
    persons: [
      { name: "Peter", age: "36" },
      { name: "Dumbledore", age: "58" },
      { name: "Sony", age: "26" },
    ]
  }

  switchPersonHandler = () => {
    console.log('OnClicked')
    this.setState({
      persons: [
        { name: "Neeraj", age: "36" },
        { name: "Dumbledore", age: "58" },
        { name: "Sony", age: "16" },
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App.</h1>
        <button onClick={this.switchPersonHandler}>Switch</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>My Hobbies:Racing</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}></Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}></Person>
      </div>
    );
  }
}

export default App;
