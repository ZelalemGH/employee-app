import React from 'react'
import { useState } from 'react'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export const Login = (props) => {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    const userEmail = localStorage.getItem('email')
    const userPassword = localStorage.getItem('password')

    if (email === userEmail && pass === userPassword) {
      props.setIsLoggedIn(true)
      navigate('/add-employees')
    } else {
      alert('Login-failed')
      props.setIsLoggedIn(false)
    }
  }

  return (
    <div className="zee-form-container">
      <h2 style={{ textAlign: 'Center' }}>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label for="email">email</label>
        <input
          className="user-input"
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
        />
        <label for="password">password</label>
        <input
          className="user-input"
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="password"
          id="password"
          name="password"
        />
        <Button type="submit" variant="contained" style={{ margin: '2rem' }}>
          Login
        </Button>
      </form>
      <button className="link-btn" onClick={() => props.toggleForm('register')}>
        Don't have an account? Register here.
      </button>
    </div>
  )
}
