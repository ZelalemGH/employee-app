import React from 'react'

export default function Header(props) {
  return <div style={StyledHeader}>{props.title}</div>
}

const StyledHeader = {
  textAlign: 'center',
  backgroundColor: '#fff',
}
