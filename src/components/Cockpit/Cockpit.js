import React from 'react';
import Aux from '../../hoc/Auxiliary'
import classes from './Cockpit.module.css';

const Cockpit = (props) => {
    const assignedClasses = [];
    let butClass = classes.Button;

    if(props.showPersons){
        butClass = [classes.Button, classes.Red].join(' ');
    }
    if( props.persons.length <= 2 ) {
      assignedClasses.push(classes.Red);
    }
    if( props.persons.length <=1 ) {
      assignedClasses.push(classes.Bold)
    }
    return (
        <Aux>
            <h1>{props.appTitle}</h1>
            <p className= {assignedClasses.join(' ')}>This is really cool</p>
            <button className={butClass} onClick={props.clicked}>Toggle</button>
            <button onClick={props.login}>Login</button>
        </Aux>
    );
}
export default Cockpit;