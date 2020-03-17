import React, { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const SignIn = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msgEmail, setMsgEmail] = useState("");
  const [msgPassword, setMsgPassword] = useState("");
  const [DB] = useState(JSON.parse(localStorage.getItem("usersArr")));
  const [getCart, setCart] = useContext(CartContext);

  const loginValidation = e => {
    e.preventDefault();
    var user = DB.find(ele => ele.email === email);

    if (user !== undefined && password !== undefined && email !== undefined) {
      if (user.password === password) {
        //logged in
        let tempCart = { ...getCart };
        tempCart.loggedIn = true;
        tempCart.currentUser = user;
        setCart(tempCart);
        setMsgEmail("");
        setMsgPassword("");
        props.history.push({
          pathname: `/`
        });
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

  return (
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
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted">{msgEmail}</Form.Text>
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
          <Form.Text className="text-muted">{msgPassword}</Form.Text>
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
      </Form>
    </div>
  );
};

export default withRouter(SignIn);
