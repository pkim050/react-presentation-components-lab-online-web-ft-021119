// Code SimplerComponent Here
import React from 'react'

const SimplerComponent = props =>
  <div>
    <button onClick={props.handleClick()} value={props.value}>I am just happy</button>
  </div>

export default SimplerComponent
