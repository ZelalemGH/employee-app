import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";
import Login from "./Login";

function Home() {
  const navigate = useNavigate();
  const handleRegister = () => {
    navigate({
      pathname: "/signup",
    });
  };

  return (
    <div style={{ margin: "0 auto" }}>
      <h1 style={{ textAlign: "Center", padding: "10px" }}>
        Welcome to the Employees Home Page
      </h1>
      <p style={{ margin: "30px" }}>
        <h2><em>Give employees context to work better together</em></h2>
        Your people are your biggest asset. Our employee directory makes it
        easier than ever for them to learn about, find, and connect with each
        other. An employee’s profile shows the basics, like their name, occupation, email address
        and phone number.
      </p>
      <div>
        <Login />
        <Button
          onClick={handleRegister}
          variant="contained"
          style={{ margin: "2rem" }}
        >
          Register
        </Button>
      </div>
    </div>
  );
}

export default Home;
