import React, { useState, useEffect } from "react";
import Navigation from "./Navigation";
import RouteList from "./RouteList";
import axios from "axios";

const FindRoutes = () => {
  const [routeList, setRouteList] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://chalkup-backend.herokuapp.com/api/routes/")
      .then(res => setRouteList(res.data.routes))
      .catch(err => setError("Could Not Get Routes"));
  }, []);

  return (
    <div>
      <Navigation />
      <div className="my-routes">
        <p className="title">Routes</p>
        <RouteList routeList={routeList} />
        {error ? <p className="errorMessage">{error}</p> : null}
      </div>
    </div>
  );
};

export default FindRoutes;
