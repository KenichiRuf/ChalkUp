import React, { useState, useEffect } from "react";
import Navigation from "./Navigation";
import RouteList from "./RouteList";
import axios from "axios";
import jwt from "jsonwebtoken";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [routeList, setRouteList] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const user = jwt.decode(localStorage.getItem("token")).user;
    axios
      .get(`https://chalkup-backend.herokuapp.com/api/routes/${user.userId}`)
      .then(res => setRouteList(res.data.routes));
  }, []);

  return (
    <div>
      <Navigation />
      <div className="my-routes">
        <p className="title">My Routes</p>
        {routeList.length === 0 ? (
          <div className="no-routes">
            <p>You don't have any routes yet.</p>
            <Link to="/find-routes">
              <Button>Find A Route</Button>
            </Link>
          </div>
        ) : (
          <RouteList routeList={routeList} />
        )}
        {error ? <p className="errorMessage">{error}</p> : null}
      </div>
    </div>
  );
};

export default Dashboard;
