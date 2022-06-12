import React, { useState } from 'react';
import Person from './Person/Person';
import './App.css';

const App = props => {

  const [personState, setPersonState] = useState({
    persons: [
      { name: "Peter", age: "36" },
      { name: "Dumbledore", age: "58" },
      { name: "Sony", age: "26" },
    ]
  })

  const switchPersonHandler = () => {
    console.log('OnClicked')
    setPersonState({
      persons: [
        { name: "Neeraj", age: "36" },
        { name: "Dumbledore", age: "58" },
        { name: "Sony", age: "16" },
      ]
    })
  }


  return (
    <div className="App">
      <h1>Hi, I'm a React App.</h1>
      <button onClick={switchPersonHandler}>Switch</button>
      <Person name={personState.persons[0].name} age={personState.persons[0].age}>My Hobbies:Racing</Person>
      <Person name={personState.persons[1].name} age={personState.persons[1].age}></Person>
      <Person name={personState.persons[2].name} age={personState.persons[2].age}></Person>
    </div>
  );

}

export default App;
