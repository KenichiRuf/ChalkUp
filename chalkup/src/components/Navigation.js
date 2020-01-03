import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

const Navigation = () => {
  function logout() {
    localStorage.removeItem("token");
  }

  return (
    <div className="Navigation">
      <Link to="/add-route">
        <Button>+ Add Route</Button>
      </Link>
      <p className="logo">ChalkUp</p>
      <Button onClick={() => logout} className="logout">
        Logout
      </Button>
    </div>
  );
};

export default Navigation;
