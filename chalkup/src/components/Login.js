import React, { useState } from "react";
import { Form, Input, Button, FormGroup, Label, FormText } from "reactstrap";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const changeUsernameHandler = event => {
    setUsername(event.target.value);
  };

  const changePasswordHandler = event => {
    setPassword(event.target.value);
  };

  const login = () => {
    console.log({
      username: username,
      password: password
    });
  };

  return (
    <div>
      <Form onSubmit={login}>
        <FormText>Login</FormText>
        <FormGroup>
          <Label for="username">Username</Label>
          <Input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            onChange={changeUsernameHandler}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={changePasswordHandler}
          ></Input>
        </FormGroup>
        <Button>Login</Button>
      </Form>
    </div>
  );
};

export default Login;
