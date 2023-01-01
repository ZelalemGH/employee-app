import React from 'react'

export default function Header(props) {
  return <h2 style={StyledHeader}>{props.title}</h2>
}

const StyledHeader = {
  textAlign: 'center',
  backgroundColor: '#fff',
  width: '95%',
  padding: '7px 0px',
  margin: '2px 2px',
}
