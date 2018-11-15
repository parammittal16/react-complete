import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
class App extends Component {
  state = {
    person : [
      { name: "A", age: "12" },
      { name: "B", age: "34" },
      { name: "C", age: "55" }
    ]
  }
  switchNameHandler = (newName) => {
    this.setState({
      person : [
        { name: newName, age: '21'},
        { name: 'MP', age: '34'},
        { name: "C", age: "55" }
      ]
    })
  }
  nameChangedHandler = (event) => {
    this.setState({
      person : [
        { name: 'A', age: '12'},
        { name: event.target.value, age: '34'},
        { name: "C", age: "55" }
      ]
    })
  }
  render() {
    const S = {
      backgroundColor: 'blue',
      color: 'white',
      padding: '8px',
      cursor: 'pointer' 
    }
    return (
      <div className="App">
        <h1>Hi, bro</h1>
        <button style={S} onClick={() => this.switchNameHandler('Param')}>Click</button>
        <Person name={this.state.person[0].name} age = {this.state.person[0].age}/>
        <Person name={this.state.person[1].name} 
        age = {this.state.person[1].age} 
        click={this.switchNameHandler.bind(this, 'Pammy')} 
        change={this.nameChangedHandler}>Hobby</Person>
        <Person name={this.state.person[2].name} age = {this.state.person[2].age}/>
      </div>
    );
  }
}

export default App;
