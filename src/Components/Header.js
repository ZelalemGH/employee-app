import React from 'react'

export default function Header(props) {
  return <div style={StyledHeader}>{props.title}</div>
}

const StyledHeader = {
  textAlign: 'center',
  backgroundColor: '#fff',
  width: '95%',
  borderRadius: '5px',
  border: '1px solid #333',
  // textAlign: 'center',
  padding: '7px 0px',
  margin: '2px 2px',
}
