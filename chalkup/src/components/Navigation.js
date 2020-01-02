import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

const Navigation = () => {
  return (
    <div className="Navigation">
      <Link to="/add-route">
        <Button>+ Add Route</Button>
      </Link>
      <p className="logo">ChalkUp</p>
      <a className="logout">Logout</a>
    </div>
  );
};

export default Navigation;
