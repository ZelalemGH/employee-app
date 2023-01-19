import React from 'react'
import { Login } from './Login'
import { Register } from './Register'
import { useState } from 'react'

function Home(props) {
  const [currentForm, setCurrentForm] = useState('Login')

  const toggleForm = (formName) => {
    setCurrentForm(formName)
  }
  console.log(currentForm)
  return (
    <div style={{ margin: '0 auto' }}>
      <h1 style={{ textAlign: 'Center', padding: '10px' }}>
        Welcome to the Employees Home Page
      </h1>
      <p style={{ margin: '30px' }}>
        Erta Ale is 613 metres (2,011 ft) high, with one or sometimes two active
        lava lakes at the summit which occasionally overflow on the south side
        of the volcano.[1] It is notable for holding the longest-existing lava
        lake, present since the early years of the twentieth century (1906).
        Volcanoes with lava lakes are very rare: there are only eight in the
        world.[4] Erta Ale means "smoking mountain" in the local Afar language
        and its southernmost pit is known locally as "the gateway to Hell".
      </p>
      {currentForm === 'Login' ? (
        <Login setIsLoggedIn={props.setIsLoggedIn} toggleForm={toggleForm} />
      ) : (
        <Register toggleForm={toggleForm} />
      )}
    </div>
  )
}

// const styleButton = {
//   backgroundColor: '#2196F3',
//   width: '100px',
//   marginBottom: '10px',
//   marginLeft: '10px',
//   textAlign: 'center',
//   padding: '3px 0',
//   borderRadius: '4px',
//   color: '#fff',
//   cursor: 'pointer',
// }

export default Home
