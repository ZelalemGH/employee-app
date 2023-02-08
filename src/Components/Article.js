import React, { Component } from 'react'

class Article extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      date: new Date(),
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClock = this.handleClock.bind(this)
  }

  // componentDidMount() {
  //   this.timer = setInterval(() => this.tick(), 1000)
  // }

  // tick() {
  //   this.setState({
  //     date: new Date(),
  //   })
  // }

  handleClock() {
    this.setState({
      date: new Date(),
    })
  }

  handleChange(event) {
    this.setState({
      inputValue: event.target.value,
    })
  }
  render() {
    return (
      <>
        <h2>Class Component</h2>
        <input type="text" onChange={this.handleChange} />
        <p>The user input is: {this.state.inputValue}</p>
        <p>This is the current time: {this.state.date.toLocaleTimeString()}</p>
        <button onClick={this.handleClock}>Update Clock</button>
      </>
    )
  }
}
export default Article
