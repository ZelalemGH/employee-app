import React from 'react'
// import { useState } from 'react'
import { Button } from '@mui/material'
// import { useNavigate } from 'react-router-dom'


function Login () {
  const handleLogin = (e) => {
    e.preventDefault()
  }
  return (
    <>
    <div className="zee-form-container">
      <h2 style={{ textAlign: 'Center' }}>Login</h2>
      <form className="login-form" >
        <label for="email">email</label>
        <input
          className="user-input"
          onChange={(e) =>(e.target.value)}
          type="email"
          placeholder="youremail@gmail.com"
          // value={email}
        />
        <label for="password">password</label>
        <input
          className="user-input"
          onChange={(e) => (e.target.value)}
          type="password"
          placeholder="password"
          value="password"
        />
        <Button onClick={handleLogin} variant="contained" style={{ margin: '2rem' }}>
          Login
        </Button>
      </form>
     </div>
     </>
  )
}

export default Login;
