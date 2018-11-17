import React from 'react';
import classes from './Person.module.css'
const person = (props) => {
    return (
        <div className={classes.Person}>
        <p onClick={props.click}> YO I am {props.name} I am {props.age} year old.</p>
        <h2>About { props.children } </h2>
        <input type="text" onChange={props.change} />
        </div>
    );
};

export default person;
