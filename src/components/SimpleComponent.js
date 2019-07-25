// Code SimpleComponent Here
import React from 'react'

class SimpleComponent extends React.Component {
  state = {
    mood: "happy"
  }

  handleClick = () => {
    console.log(this.state.mood)
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
        <button onClick={this.handleClick()} value={this.state.mood}>{this.state.mood}</button>
      </div>
    )
  }
}

export default SimpleComponent
