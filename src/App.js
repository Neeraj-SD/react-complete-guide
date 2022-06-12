import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {

  state = {
    persons: [
      { name: "Peter", age: "36" },
      { name: "Dumbledore", age: "58" },
      { name: "Sony", age: "26" },
    ],
    showPersons: false,
  }

  toggleShowPersons = () => {
    this.setState({
      showPersons: !this.state.showPersons,
    })
  }

  deletePersonHandler = (index) => {
    const persons = [...this.state.persons]
    persons.splice(index, 1)
    this.setState({
      persons: persons
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "Neeraj", age: "36" },
        { name: event.target.value, age: "58" },
        { name: "Sony", age: "16" },
      ]
    })
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null

    if (this.state.showPersons) {
      persons = (
        <div>

          {
            this.state.persons.map((person, index) =>
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                nameChanged={this.nameChangedHandler}
              />)}
        </div>


        // < div >
        //   <Person >My Hobbies:Racing</Person>
        //   <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.switchPersonHandler} nameChanged={this.nameChangedHandler}></Person>
        //   <Person name={this.state.persons[2].name} age={this.state.persons[2].age} ></Person>
        // </ >
      )
    }


    return (
      <div className="App" >
        <h1>Hi, I'm a React App.</h1>
        <button style={style} onClick={this.toggleShowPersons}>Switch</button>
        {persons}
      </div>
    );
  }

}

export default App;
