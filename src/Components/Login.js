import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { EmployeesContext } from "../EmployeesContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { Alert } from "@mui/material";

const StyledButton = styled.button`
  margin: 2rem;
  background-color: #03a9f4;
  color: #f4f4f4;
  fontweight: bold;
`;

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isInvalidCredintial, setIsInvalidCredintial] = useState(false);
  const { setIsAuthenticated } = useContext(EmployeesContext);
  const navigate = useNavigate();

  const baseUrl = "https://cryptic-wildwood-26961.herokuapp.com/api/user";
  //const userInfo = { email, password };

  const handleLogin = async (userInfo) => {
    try {
      const response = await axios.post(`${baseUrl}/login`, userInfo);
      // console.log('response', response );
      const token = response?.data;

      console.log(token);
      if (token) {
        localStorage.setItem("token", token);
        setIsAuthenticated(true);
        navigate({
          pathname: "/employees-list",
        });
      }
    } catch (err) {
      console.log(err);
      setIsInvalidCredintial(true);
      setIsAuthenticated(false);
      navigate({
        pathname: "/employee-app",
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userInfo = { email, password };
    handleLogin(userInfo);
    // .then((token) => {
    //   //Authenticating user and redirect to the home page
    //   setIsAuthenticated(true);
    //   navigate({
    //     pathname: "/employees-list",
    //   });
    // })
    // .catch((error) => {
    //   //handle Login error
    //   setIsAuthenticated(false);
    // });
  };
  return (
    <div className="zee-form-container">
      <h2 style={{ textAlign: "Center" }}>Login</h2>
      {isInvalidCredintial && (
        <Alert severity="error">
          This is an error alert — Invalid Credintial!
        </Alert>
      )}
      <form onSubmit={handleSubmit} className="login-form">
        <label for="email">email</label>
        <input
          className="user-input"
          onChange={(e) => setEmail(e.target.value)}
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
        <StyledButton onClick={handleLogin}>Sign-in</StyledButton>
      </form>
    </div>
  );
}

export default Login;
