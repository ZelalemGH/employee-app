import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div style={styledNavBar}>
      <h3>Employees</h3>
      <ul style={styledUl}>
        <li style={{ cursor: 'pointer' }}>
          <Link to="/">Home</Link>
        </li>
        <li style={{ cursor: 'pointer' }}>
          <Link to="/Add-employees">Add Employees</Link>
        </li>
        <li style={{ cursor: 'pointer' }}>
          <Link to="/Employees-list">Employees List</Link>
        </li>
      </ul>
    </div>
  )
}

const styledNavBar = {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  height: '10vh',
  backgroundColor: '#00BCD4',
  color: '#fff',
  padding: '0 30px',
  overFlow: 'hidden',
}

const styledUl = {
  display: 'flex',
  gap: '10px',
  justifyContent: 'flex-end',
  marginLeft: '15px',
  listStyle: 'none',
  cursor: 'pointer',
  fontWeight: 'bold',
}

export default NavBar
