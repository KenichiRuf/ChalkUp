import React, { useState } from "react";
import { Button } from "reactstrap";
import { Redirect } from "react-router-dom";
import axios from "axios";
import jwt from "jsonwebtoken";

const RouteCard = props => {
  const [error, setError] = useState("");
  const [userRoute, setUserRoute] = useState({});
  const [redirect, setRedirect] = useState(false);

  const handleClick = () => {
    const user = jwt.decode(localStorage.getItem("token")).user;
    axios
      .post("https://chalkup-backend.herokuapp.com/api/routes/userRoute", {
        status: "project",
        userId: user.id,
        routeId: props.route.id
      })
      .then(res => {
        setUserRoute(res.data.userRoute);
        setTimeout(setRedirect(true), 1000);
      })
      .catch(err => setError("Could Not Create userRoute"));
  };

  if (redirect) {
    return <Redirect to={`/userRoute/?id=${userRoute.id}`} />;
  } else {
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
        {error ? <p className="errorMessage">{error}</p> : null}
      </div>
    );
  }
};

export default RouteCard;
