import React from "react";
import RouteCard from "./RouteCard";

const RouteList = props => {
  return (
    <div className="routeList">
      {props.routeList.map(route => (
        <RouteCard route={route} />
      ))}
    </div>
  );
};

export default RouteList;
