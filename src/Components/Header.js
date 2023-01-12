import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Header(props) {
  return (
    <div style={StyledHeader}>
      <FontAwesomeIcon size="2x" icon={props.icon} color="#333" />
      <h3>{props.title}</h3>
    </div>
  )
}

const StyledHeader = {
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor: '#fff',
  width: '50%',
  padding: '0 7px',
  margin: '2px 2px',
  textAlign: 'center',
}
