import React from 'react'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router'

function Home() {
  const navigate = useNavigate()
  const handleLogin = () => {
    console.log("login")
    navigate({
      pathname: "/login"
    })
  }

  const handleRegister = () => {
    navigate({
      pathname: "/signup"
    })
  }


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
      <div>
      <Button onClick={handleLogin} variant="contained" style={{ margin: '2rem' }}>
          Login
      </Button>
      <Button onClick={handleRegister} variant="contained" style={{ margin: '2rem' }}>Register</Button>
      </div>
    </div>
  )
}

export default Home
