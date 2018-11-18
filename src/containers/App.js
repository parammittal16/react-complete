import React, { Component } from 'react';
import classes from './App.module.css';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Auxiliary';

export const AuthContext = React.createContext(false);

class App extends Component {
  constructor(props){
    super(props);
    console.log('App js in const');
    this.state = {
      person : [
        { id:'1', name: "A", age: "12" },
        { id:'2', name: "B", age: "34" },
        { id:'3', name: "C", age: "55" }
      ],
      otherState : 'Bla bla',
      showPersons : false,
      toggleClicked: 0,
      Authenticated: false
    }
  }
  componentWillMount(){

  }
  componentDidMount(){

  }
  deletePersonHandler = (index) => {
    const newPersons = this.state.person;
    newPersons.splice(index, 1);
    this.setState({person: newPersons})
  }
  togglePersonHandler = () => {
    const V = this.state.showPersons;
    this.setState((prevState, props) => {
      return {
        showPersons : !V,
        toggleClicked : prevState.toggleClicked + 1
      }
    });
  }
  loginHandler = () => {
    this.setState({Authenticated: true});
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
    let Ps = null;
    if( this.state.showPersons){
      Ps = <Persons
        persons={this.state.person}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler}/>
      }

    return (
      <Aux>
      <Cockpit
      appTitle={this.props.title}
      clicked={this.togglePersonHandler} 
      showPersons={this.state.showPersons}
      login = {this.loginHandler}
      persons={this.state.person} />
      <AuthContext.Provider value={this.state.Authenticated}>
      { Ps }
      </AuthContext.Provider>
      </Aux>
    );
  }
}

export default withClass(App, classes.App);
