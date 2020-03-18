import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { withRouter } from "react-router-dom";

const SignUp = props => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setconfirmPass] = useState("");
  const [errUsername, setErrUsername] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const [DB] = useState(JSON.parse(localStorage.getItem("usersArr")));

  const gotoLogin = () => {
    props.history.push({
      pathname: `/sign-in`
    });
  };

  const submitHandler = e => {
    usernameValidation();
    emailValidation();
    passwordValidation();
    if (errEmail === "" && errUsername === "" && errPassword === "") {
      if (!DB.find(ele => ele.email === email) !== undefined) {
        registerData();
        props.history.push({
          pathname: `/sign-in`
        });
      } else setErrEmail("Email already exist");
    }
  };

  const registerData = () => {
    const users = JSON.parse(localStorage.getItem("usersArr"));
    const user = {
      username: username,
      email: email,
      password: password
    };
    if (users) {
      localStorage.setItem("usersArr", JSON.stringify([...users, user]));
    } else {
      localStorage.setItem("usersArr", JSON.stringify([user]));
    }
  };

  const passwordValidation = () => {
    if (/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,20}$/.test(password)) {
      if (password === confirmPass) setErrPassword("");
      else setErrPassword("passwords does not match");
    } else setErrPassword("password does not meet requirments");
  };

  const usernameValidation = e => {
    if (
      /^(?=.{6,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/.test(
        username
      )
    )
      setErrUsername("");
    else setErrUsername("wrong username");
  };

  const emailValidation = e => {
    if (/^[a-zA-Z0-9.]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/.test(email))
      setErrEmail("");
    else setErrEmail("wrong email");
  };

  return (
    <Container
      className="d-flex flex-row align-items-center"
      style={{ minHeight: "80vh" }}
    >
      <Form
        className="mx-auto w-100"
        style={{ maxWidth: "500px" }}
        onSubmit={e => submitHandler(e)}
      >
        <Form.Group controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
          <Form.Text className="text-muted">{errUsername}</Form.Text>
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="email@domain.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted">{errEmail}</Form.Text>
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <Form.Text className="text-muted">{errPassword}</Form.Text>
        </Form.Group>

        <Form.Group controlId="formConfimPassword">
          <Form.Label>Confirm password</Form.Label>
          <Form.Control
            type="password"
            name="confirmPass"
            placeholder="Confirm Password"
            value={confirmPass}
            onChange={e => setconfirmPass(e.target.value)}
          />
          <Form.Text className="text-muted">{errPassword}</Form.Text>
        </Form.Group>

        <Button type="submit" block>
          Sign Up
        </Button>

        <Button variant="secondary" block onClick={() => gotoLogin()}>
          Sign In
        </Button>
      </Form>
    </Container>
  );
};

export default withRouter(SignUp);
