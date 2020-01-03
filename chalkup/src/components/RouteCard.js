import React, { useState } from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import jwt from "jsonwebtoken";

const RouteCard = props => {
  const [error, setError] = useState("");
  const handleClick = () => {
    const user = jwt.decode(localStorage.getItem("token"));
    axios
      .post("https://chalkup-backend.herokuapp.com/api/routes/userRoute", {
        status: "project",
        userId: user.id,
        routeId: props.route.id
      })
      .then(res => console.log(res))
      .catch(err => setError("Could Not Create userRoute"));
  };

  return (
    <div className="routeCard">
      <div className="routeDetails">
        <p>{props.route.description}</p>
        <p>{props.route.grade}</p>
      </div>
      <div
        style={{
          backgroundImage: `url(${require(`../images/routes/${props.route.image}`)})`,
          backgroundSize: "cover"
        }}
        className="routeImage"
      ></div>
      <Button onClick={handleClick}>Send This Route!</Button>
    </div>
  );
};

export default RouteCard;
