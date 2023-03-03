import React from 'react'
import { useState } from 'react'
import { Button } from '@mui/material'
// import { useNavigate } from 'react-router-dom'
import axios from 'axios'


function Login () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const baseUrl = "https://cryptic-wildwood-26961.herokuapp.com/api/user";
  const userInfo = { email, password };

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${baseUrl}/login`, userInfo);
      // console.log('response', response );
      const token = response?.data; 
      
      console.log(token)
      localStorage.setItem("token", token)
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
    <div className="zee-form-container">
      <h2 style={{ textAlign: 'Center' }}>Login</h2>
      <form className="login-form" >
        <label for="email">email</label>
        <input
          className="user-input"
          onChange={(e) =>setEmail(e.target.value)}
          type="email"
          placeholder="youremail@gmail.com"
          value={email}
        />
        <label for="password">password</label>
        <input
          className="user-input"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="password"
          value={password}
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
