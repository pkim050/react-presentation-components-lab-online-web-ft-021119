// Code SimpleComponent Here
import React from 'react'

class SimpleComponent extends React.Component {
  state = {
    mood: "happy"
  }

  render() {
    return(
      <div>
        <p>{this.state.mood}</p>
      </div>
    )
  }
}
