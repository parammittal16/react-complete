import React, { Component } from 'react';
import classes from './Person.module.css';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Auxiliary';
import { AuthContext } from '../../../containers/App';

class Person extends Component {
    constructor(props){
        super(props);
        console.log('Person js in const');
      }
      componentWillMount(){
    
      }
      componentDidMount(){
        
      }
    render(){
        return (
            <Aux>
                <AuthContext.Consumer>
                    {auth => auth ? <h2>I am Auth</h2> : null}
                </AuthContext.Consumer>
            <p onClick={this.props.click}> YO I am {this.props.name} I am {this.props.age} year old.</p>
            <h2>About { this.props.children } </h2>
            <input type="text" onChange={this.props.change} />
            </Aux>
        );
    }
}

export default withClass(Person, classes.Person);
