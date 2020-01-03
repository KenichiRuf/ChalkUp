import React, { useState } from "react";
import { Form, Input, Button, FormGroup, Label, FormText } from "reactstrap";
import { Redirect } from "react-router-dom";
import bcrypt from "bcryptjs";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [error, setError] = useState("");

  const changeUsernameHandler = event => {
    setUsername(event.target.value);
  };

  const changePasswordHandler = event => {
    setPassword(event.target.value);
  };

  const login = event => {
    event.preventDefault();
    axios
      .post("https://chalkup-backend.herokuapp.com/api/auth/login", {
        username: username,
        password: password
      })
      .then(res => {
        localStorage.setItem("token", res.data.token);
        setRedirect(true);
      })
      .catch(err => setError("Could Not Login"));
  };

  if (redirect === true) {
    return <Redirect to="/dashboard" />;
  } else {
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
          {error ? <p className="errorMessage">{error}</p> : null}
        </Form>
      </div>
    );
  }
};

export default Login;
