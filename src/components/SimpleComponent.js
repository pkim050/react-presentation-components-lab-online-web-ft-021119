// Code SimpleComponent Here
import React from 'react'

class SimpleComponent extends React.Component {
  state = {
    mood: "happy"
  }

  handleClick = event => {
    if (this.state.mood === "happy") {
      this.setState({
        mood: "sad"
      })
    }
    else if (this.state.mood === "sad") {
      this.setState({
        mood: "happy"
      })
    }
  }

  render() {
    return(
      <div>
        <p>{this.state.mood}</p>
        <button onClick={this.handleClick()}></button>
      </div>
    )
  }
}

export default SimpleComponent
