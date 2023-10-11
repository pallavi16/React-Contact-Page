import React from 'react'
import styles from './Button.module.css';


const Button = (props) => {

    console.log(props);
  return (
    <button className= {props.isSecondary ? styles.secondary_btn : styles.primary_btn} type="button">
        {props.icon}
        {props.text}</button>

  );
}

export default Button