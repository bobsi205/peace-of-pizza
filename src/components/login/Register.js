import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";

const Register = props => {
  // const [formGroup, setFormGroup] = useState({
  //   controlId: "formBasicEmail",
  //   className: "formInput",
  //   label: "Username",
  //   type: "text",
  //   as: "input",
  //   name: "username",
  //   placeholder: "Username"
  // });

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conPassword, setConPassword] = useState("");
  const [errUsername, setErrUsername] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");

  const gotoLogin = () => {
    props.history.push({
      pathname: `/login`
    });
  };

  const submitHandler = e => {
    usernameValidation();
    emailValidation();
    passwordValidation();
    if (errEmail === "" && errUsername === "" && errPassword === "") {
      // if (DB.find(ele => ele.email === userInput.email) !== undefined) {
      //   //check if email exsist
      // }
      registerData();
      props.history.push({
        pathname: `/login`
      });
    }
  };

  const registerData = () => {
    var users = JSON.parse(localStorage.getItem("usersArr"));
    users.push({
      username: username,
      email: email,
      password: password
    });
    localStorage.setItem("usersArr", JSON.stringify(users));
  };

  const passwordValidation = () => {
    if (/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,20}$/.test(password)) {
      if (password === conPassword) setErrPassword("");
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
    <div
      className="d-flex justify-content-center align-items-center flex-column"
      style={{ height: "500px", marginBottom: "20px" }}
    >
      <h2 className="mt-5">Registration</h2>
      <Form className="d-flex justify-content-center align-items-center flex-column mb-5">
        <Form.Group controlId="formBasicEmail" className="formInput">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            as="input"
            name="username"
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
          <Form.Text className="text-muted">{errUsername}</Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicEmail" className="formInput">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted">{errEmail}</Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword" className="formInput">
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
        <Form.Group controlId="formBasicPassword" className="formInput">
          <Form.Label>Confirm password</Form.Label>
          <Form.Control
            type="password"
            name="conPassword"
            placeholder="Confirm Password"
            value={conPassword}
            onChange={e => setConPassword(e.target.value)}
          />
          <Form.Text className="text-muted">{errPassword}</Form.Text>
        </Form.Group>
        <Button
          variant="success"
          type="button"
          className="formInput"
          onClick={e => submitHandler(e)}
        >
          Submit
        </Button>
        <Button
          className="formInput"
          variant="secondary"
          type="button"
          onClick={() => gotoLogin()}
        >
          Login
        </Button>
      </Form>
    </div>
  );
};

export default withRouter(Register);
