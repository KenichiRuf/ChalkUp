import React, { useState, useEffect } from "react";
import Navigation from "./Navigation";
import RouteList from "./RouteList";
import axios from "axios";

const Dashboard = () => {
  const [routeList, setRouteList] = useState([]);
  useEffect(
    async () =>
      await axios
        .get("https://chalkup-backend.herokuapp.com/api/routes/")
        .then(res => console.log(res))
  );

  return (
    <div>
      <Navigation />
      <div className="my-routes">
        <p>My Routes</p>
        <RouteList routeList={routeList} />
      </div>
    </div>
  );
};

export default Dashboard;
