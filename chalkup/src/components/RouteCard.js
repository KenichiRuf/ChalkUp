import React, { useState } from "react";
import { Button, Modal } from "reactstrap";
import axios from "axios";
import jwt from "jsonwebtoken";
import UserRouteView from "./UserRouteView";

const RouteCard = props => {
  const [error, setError] = useState("");
  const [userRoute, setUserRoute] = useState({});
  const [modalIsOpen, setModal] = useState(false);

  const toggle = () => {
    setModal(!modalIsOpen);
  };

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
        toggle();
      })
      .catch(err => setError("Could Not Create userRoute"));
  };

  return (
    <div className="routeCard">
      <Modal isOpen={modalIsOpen} toggle={toggle}>
        <UserRouteView userRoute={userRoute} toggleModal={toggle} />
      </Modal>
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
};

export default RouteCard;
