/**
 * A react component to display the count of our counter
 */
import React from 'react'
import './Counter.css';

function Counter({ count }) {
  return (
    <div className="Counter">
      <span className="Counter--value">{count}</span>
    </div>
  )
}

export default Counter;