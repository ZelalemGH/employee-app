import React from "react";
import { useState } from "react";
import { Button } from "@mui/material";
import axios from "axios";

function Register() {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const baseUrl = "https://cryptic-wildwood-26961.herokuapp.com/api/user";

  const userInfo = { username, email, password };
  const handleSignup = async () => {
    try {
      const response = await axios.post(`${baseUrl}/signup`, userInfo);
      console.log("user info", response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="zee-form-container">
      <h2 style={{ textAlign: "Center" }}>Sign up</h2>
      <form className="register-form">
        <label htmlfor="name">User Name</label>
        <input
          className="register-input"
          type="text"
          placeholder="Please enter your user name"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
        <label htmlfor="email">email</label>
        <input
          className="register-input"
          type="email"
          placeholder="youremail@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlfor="password">password</label>
        <input
          className="register-input"
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          onClick={handleSignup}
          variant="contained"
          style={{ margin: "2rem" }}
        >
          Sign up
        </Button>
      </form>
    </div>
  );
}

export default Register;
