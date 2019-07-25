// Code SimpleComponent Here
import React from 'react'

class SimpleComponent extends React.Component {
  state = {
    mood: "happy"
  }

  handleClick = () => {
    if (state.mood === "happy") {
      setState({
        mood: "sad"
      })
    }
    else if (state.mood === "sad") {
      setState({
        mood: "happy"
      })
    }
  }

  render() {
    return(
      <div>
        <button onClick={handleClick()}>{state.mood}</button>
      </div>
    )
  }
}

export default SimpleComponent
