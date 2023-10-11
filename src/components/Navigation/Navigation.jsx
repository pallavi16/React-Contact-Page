import React from 'react';
import classes from './Navigation.module.css';

const Navigation = () => {
  return (
    <div>
        <nav className={`${classes.nav} container`}>
            <img src='images/logo.png' alt="logo" />
            <ul>
                <li>Home</li>
                <li>Menu</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    </div>
  )
}

export default Navigation