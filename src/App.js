import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
class App extends Component {
  state = {
    person : [
      { id:'1', name: "A", age: "12" },
      { id:'2', name: "B", age: "34" },
      { id:'3', name: "C", age: "55" }
    ],
    otherState : 'Bla bla',
    showPersons : false
  }
  deletePersonHandler = (index) => {
    const newPersons = this.state.person;
    newPersons.splice(index, 1);
    this.setState({person: newPersons})
  }
  togglePersonHandler = () => {
    const V = this.state.showPersons;
    this.setState({showPersons : !V});
  }
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.person.findIndex((p) => {
      return p.id === id;
    });
    const Person = {
      ...this.state.person[personIndex]
    };

    Person.name = event.target.value;

    const People = [...this.state.person];
    People[personIndex] = Person;
    this.setState({person : People});
  }
  render() {
    const S = {
      backgroundColor: 'green',
      color: 'white',
      padding: '8px',
      cursor: 'pointer' 
    }
    let Ps = null;
    if( this.state.showPersons){
      Ps = (
        <div>
        {
          this.state.person.map((per,index) =>{
            return <Person click = {() => this.deletePersonHandler(index)} name = {per.name} age={per.age} key={per.id} change={(event) => this.nameChangedHandler(event, per.id)}/>
          })
        }
        </div>
      );
      S.backgroundColor = 'red';
    }
    return (
      <div className="App">
      <h1>Hi, bro</h1>
      <button style={S} onClick={this.togglePersonHandler}>Toggle</button>
      { Ps }
      </div>
    );
  }
}

export default App;
