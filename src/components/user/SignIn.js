import React, { useState, useContext } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const SignIn = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msgEmail, setMsgEmail] = useState("");
  const [msgPassword, setMsgPassword] = useState("");
  const [DB] = useState(JSON.parse(localStorage.getItem("usersArr")));
  const { getCart, setCart } = useContext(CartContext);

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
    <Container
      className="d-flex flex-row align-items-center"
      style={{ minHeight: "80vh" }}
    >
      <Form
        className="mx-auto w-100"
        style={{ maxWidth: "500px" }}
        onSubmit={e => loginValidation(e)}
      >
        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="email@domain.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted">{msgEmail}</Form.Text>
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
          <Form.Text className="text-muted">{msgPassword}</Form.Text>
        </Form.Group>

        <Button type="submit" block>
          Sign In
        </Button>

        <Button variant="secondary" block onClick={() => startRegister(false)}>
          Sign Up
        </Button>
      </Form>
    </Container>
  );
};

export default withRouter(SignIn);
