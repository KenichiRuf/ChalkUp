import React, { useState } from "react";
import { Form, Input, Button, FormGroup, Label, FormText } from "reactstrap";
import bcrypt from "bcryptjs";
import axios from "axios";
import { Redirect } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [error, setError] = useState("");

  const changeUsernameHandler = event => {
    setUsername(event.target.value);
  };

  const changePasswordHandler = event => {
    setPassword(event.target.value);
  };

  const changeEmailHandler = event => {
    setEmail(event.target.value);
  };

  const hash = bcrypt.hashSync(password, 10);

  const login = () => {
    axios
      .post("https://chalkup-backend.herokuapp.com/api/auth/login", {
        username: username,
        password: hash
      })
      .then(res => {
        localStorage.setItem("token", res.data.token);
        setRedirect(true);
      })
      .catch(err => setError("Could Not Login"));
  };

  const register = event => {
    event.preventDefault();
    axios
      .post("https://chalkup-backend.herokuapp.com/api/auth/register", {
        username: username,
        password: hash,
        email: email
      })
      .then(res => login())
      .catch(err => setError("Could Not Register"));
  };

  if (redirect === true) {
    return <Redirect to="/dashboard" />;
  } else {
    return (
      <div className="form-container">
        <Form onSubmit={register}>
          <FormText className="title">Create Your Account</FormText>
          <FormGroup>
            <Label for="username">Username</Label>
            <Input
              type="text"
              name="username"
              id="username"
              placeholder="Choose Your Username..."
              onChange={changeUsernameHandler}
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
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
              onChange={changeEmailHandler}
            ></Input>
          </FormGroup>
          <Button>Create Account</Button>
          {error ? <p className="errorMessage">{error}</p> : null}
        </Form>
      </div>
    );
  }
};

export default Register;
