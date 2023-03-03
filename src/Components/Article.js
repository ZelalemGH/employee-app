import React, { Component } from 'react'
import { Typography } from '@mui/material'
import styled from 'styled-components'

const Button = styled.button`
  border: 1px solid #333;
  padding: 10px;
  margin-top: 15px;
  border-radius: 15px;
  border: none;
  box-shadow: 0 9px #999;
  height: 40px;
  font-size: 20px;
  color: #fff;
  background-color: #333;
  :hover {
    background: #04aa6d;
  }
`

const StyledPostTitle = styled(Typography)`
  border: 1px solid #333;
  padding: 0 40px;
  margin: 15px 50px 0 50px !important;
  text-align: center;
`
const StyledPostContent = styled(Typography)`
  border: 1px solid #333;
  padding: 7px 40px;
  margin: 0 50px !important;
  background-color: #fff;
  min-height: 10rem;
`
class Article extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      date: new Date(),
      data: [],
      loading: true,
      error: false,
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClock = this.handleClock.bind(this)
  }

  componentDidMount() {
    // this.timer = setInterval(() => this.tick(), 1000)
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => res.json())
      .then((post) => this.setState({ data: post, loading: false }))
      .catch((error) => this.setState({ error: true }))
  }

  tick() {
    this.setState({
      date: new Date(),
    })
  }

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
    console.log('data', this.state.data)
    console.log('loading', this.state.loading)
    console.log('error', this.state.error)

    const { data } = this.state
    return (
      <>
        <div style={{ textAlign: 'center' }}>
          <h2>Class Component</h2>
          <input type="text" onChange={this.handleChange} />
          <p>The user input is: {this.state.inputValue}</p>
          <p>Current time: {this.state.date.toLocaleTimeString()}</p>
          <Button onClick={this.handleClock}>Update Clock</Button>
        </div>
        {data.map((post) => {
          return (
            <>
              <StyledPostTitle variant="h6">{post.title}</StyledPostTitle>
              <StyledPostContent paragraph>{post.body}</StyledPostContent>
            </>
          )
        })}
      </>
    )
  }
}
export default Article
