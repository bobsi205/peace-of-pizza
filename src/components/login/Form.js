import React from "react";
import { Form, Button } from "react-bootstrap";

const form = props => {
  return (
    <Form onSubmit={e => props.loginValidation(e)}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email" />
        <Form.Text className="text-muted">{props.msgEmail}</Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password" />
        <p>{props.msgPassword}</p>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
      <Button
        variant="primary"
        type="button"
        onClick={() => props.startRegister(false)}
      >
        Register
      </Button>
      <p>{props.loggedIn ? "logged In" : ""}</p>
    </Form>
  );
};

export default form;
