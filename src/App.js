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

  nameChangedHandler = (event, index) => {

    const person = { ...this.state.persons[index] }

    person.name = event.target.value

    const persons = [...this.state.persons]
    persons[index] = person

    this.setState({
      persons: persons
    })
  }

  render() {

    const style = {
      backgroundColor: 'green',
      color: 'white',
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
                key={index}
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                nameChanged={(event) => this.nameChangedHandler(event, index)}
              />)}
        </div>


        // < div >
        //   <Person >My Hobbies:Racing</Person>
        //   <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.switchPersonHandler} nameChanged={this.nameChangedHandler}></Person>
        //   <Person name={this.state.persons[2].name} age={this.state.persons[2].age} ></Person>
        // </ >
      )

      style.backgroundColor = 'red'

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
