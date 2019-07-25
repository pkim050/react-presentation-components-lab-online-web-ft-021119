// Code SimpleComponent Here
import React from 'react'

class SimpleComponent extends React.Component {
  state = {
    mood: "happy"
  }

  handleClick = (event) => {
    if (this.state.mood === "happy") {
      this.setState({
        mood: event.target.value
      })
    }
    else if (this.state.mood === "sad") {
      this.setState({
        mood: event.target.value
      })
    }
  }

  render() {
    return(
      <div>
        <button onClick={this.handleClick({this.state.mood})}>{this.state.mood}</button>
      </div>
    )
  }
}

export default SimpleComponent
