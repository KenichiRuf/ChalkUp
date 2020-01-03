import React from "react";
import Navigation from "./Navigation";
import RouteCard from "./RouteCard";

const RouteList = props => {
  return (
    <div>
      {props.routeList.map(route => (
        <RouteCard route={route} />
      ))}
    </div>
  );
};

export default RouteList;
