import React, { useState, useContext } from "react";
import SignUp from "./SignUp";
import { Form, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const SignIn = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msgEmail, setMsgEmail] = useState("");
  const [msgPassword, setMsgPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [register, setRegister] = useState(true);
  const [DB, setDB] = useState([{ email: "email@domain.com" }]);

  const getCart = useContext(CartContext);
  console.log(getCart);

  const loginValidation = e => {
    e.preventDefault();
    var item = {
      email: e.target.email.value,
      password: e.target.password.value
    };
    var user = DB.find(ele => ele.email === item.email);

    if (
      user !== undefined &&
      item.password !== undefined &&
      item.email !== undefined
    ) {
      if (user.password === item.password) {
        setLoggedIn(true);
        setMsgEmail("");
        setMsgPassword("");
      } else {
        setMsgPassword("wrong password");
        setMsgEmail("");
      }
    } else {
      setMsgEmail("wrong email");
      setMsgPassword("");
    }
  };

  const startRegister = val => {
    props.history.push({
      pathname: `/sign-up`
    });
  };

  return register ? (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "500px" }}
    >
      <Form
        className="d-flex justify-content-center align-items-center flex-column"
        onSubmit={e => loginValidation(e)}
      >
        <Form.Group controlId="formBasicEmail" className="formInput">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" />
          <Form.Text className="text-muted">{msgEmail}</Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword" className="formInput">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
          />
          <p>{msgPassword}</p>
        </Form.Group>

        <Button variant="primary" type="submit" className="formInput">
          Sign In
        </Button>
        <Button
          className="formInput"
          variant="secondary"
          type="button"
          onClick={() => startRegister(false)}
        >
          Sign Up
        </Button>
        <p>{loggedIn ? "logged In" : ""}</p>
      </Form>
      <p>{loggedIn ? "logged In" : ""}</p>
      <p>{msgPassword}</p>
      <p>{msgEmail}</p>
    </div>
  ) : (
    <SignUp startRegister={startRegister} />
  );
};

export default withRouter(SignIn);
