import React from "react";
import Register from "./Register";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="container">
      <p className="logo">ChalkUp</p>
      <div className="hero-banner">
        <Register />
        <p className="sub-heading">
          If you already have an account, <Link to="/login">login here</Link>
        </p>
      </div>
    </div>
  );
};

export default HomePage;
