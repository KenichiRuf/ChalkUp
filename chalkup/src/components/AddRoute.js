import React, { useState } from "react";
import { Form, Input, Button, FormGroup, Label, FormText } from "reactstrap";

const AddRoute = () => {
  const [routeName, setRouteName] = useState("");
  const [password, setPassword] = useState("");

  const changeRouteNameHandler = event => {
    setRouteName(event.target.value);
  };

  const changePasswordHandler = event => {
    setPassword(event.target.value);
  };

  const addRoute = route => {
    console.log(route);
  };

  return (
    <div>
      <Form onSubmit={addRoute({})}>
        <FormText className="title">Add A New Route</FormText>
        <FormGroup>
          <Label for="routeName">Route Name</Label>
          <Input
            type="text"
            name="routeName"
            id="routeName"
            placeholder="Pick a Name for Your Route..."
            onChange={changeRouteNameHandler}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Set Your Password..."
            onChange={changePasswordHandler}
          ></Input>
        </FormGroup>
        <Button>Create Account</Button>
      </Form>
    </div>
  );
};

export default AddRoute;
