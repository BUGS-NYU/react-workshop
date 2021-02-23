/**
 * A react component to handle button presses and increase our counter
 */
import React from 'react'
import "./Button.css";

function Button({onClick}) {
  return (
    <button className="Button" onClick={onClick}>
      Click me!
    </button>
  );
}
 
export default Button