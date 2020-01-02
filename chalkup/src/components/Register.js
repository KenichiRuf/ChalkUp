import React, { useState } from "react";
import { Form, Input, Button, FormGroup, Label, FormText } from "reactstrap";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const changeUsernameHandler = event => {
    setUsername(event.target.value);
  };

  const changePasswordHandler = event => {
    setPassword(event.target.value);
  };

  const register = () => {
    console.log({
      username: username,
      password: password
    });
  };

  return (
    <div>
      <Form onSubmit={register}>
        <FormText>Create Your Account</FormText>
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
        <Button>Create Account</Button>
      </Form>
    </div>
  );
};

export default Register;
