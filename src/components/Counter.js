/**
 * A react component to display the count of our counter
 */
import React, { Component } from 'react'
import './Counter.css';

export default class Counter extends Component {
  render() {
    return (
      <div className="Counter">
        <span className="Counter--value">0</span>
      </div>
    )
  }
}
