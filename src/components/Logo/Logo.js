import React from 'react';

import burgerIcon from '../../assets/images/hamburger-icon.png';
import classes from './Logo.module.css';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={burgerIcon} alt="MyBurger" />
    </div>
);

export default logo;