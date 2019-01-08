import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
class App extends Component {

  state = {
    persons : [
      {
        name : 'Taha' , age : '26'
      },
      {
        name: 'Talha' , age : '26'
      },
      {
        name: 'stifnes' , age : '25'
      }
    ],
    showPersons : false,
  }

  switchNameHandler = ( name ) => {
    this.setState({
      persons : [
        {
          name : name , age : '96'
        },
        {
          name: 'Taha' , age : '62'
        },
        {
          name: 'stifnes' , age : '65'
        }
      ] 
    });
  }

  togglePersonsHandler = ( ) => {
    let action = !this.state.showPersons;
    this.setState({
      showPersons : action
    });
  }

  deletePersonsHandler = ( personIndex ) => {
    const persons = this.state.persons;
    persons.splice(personIndex,1);
    this.setState({
      persons : persons
    });
  }

  changeNameHandler = ( event ) => {
    this.setState({
      persons : [
        {
          name :  'Max', age : '96'
        },
        {
          name: event.target.value , age : '62'
        },
        {
          name: 'stifnes' , age : '65'
        }
      ] 
    });
  }

  render() {

    const style = {
        backgroundColor:'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer',
    };
    let persons = null;
    if(this.state.showPersons){
      persons = (
        <div>
          { 
            this.state.persons.map((person,index) => {
              return <Person 
              click={() => this.deletePersonsHandler(index)}
              name={person.name} 
              age={person.age} />
            })
          }
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button style={style} onClick={this.togglePersonsHandler}>Switch Name</button>
        {persons}
      </div>
    );
  }
}

export default App;
