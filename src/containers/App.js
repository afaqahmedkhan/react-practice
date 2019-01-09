import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
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
      persons = <Persons 
         persons={this.state.persons}
         clicked={this.deletePersonsHandler}
         changed={this.changeNameHandler} />;
      
    }

    return (
      <div className="App">
        <Cockpit 
        showPersons={this.state.showPersons} 
        persons={this.state.persons}
        clicked={this.togglePersonsHandler}  />
        {persons}
      </div>
    );
  }
}

export default App;
