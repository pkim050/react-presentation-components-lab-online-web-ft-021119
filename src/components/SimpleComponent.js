// Code SimpleComponent Here
import React from 'react'

class SimpleComponent extends React.Component {
  state = {
    mood: "happy"
  }

  handleClick = () => {
    if (this.state.mood === "happy") {
      console.log("happy state")
      state = {
        mood: "sad"
      }
    }
    else if (this.state.mood === "sad") {
      state = {
        mood: "happy"
      }
    }
  }

  render() {
    return(
      <div>
        <button onClick={this.handleClick()}>{this.state.mood}</button>
      </div>
    )
  }
}

export default SimpleComponent
