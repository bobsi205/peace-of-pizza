import React from "react";
import { Form, Button, Container } from "react-bootstrap";

const register = props => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "500px" }}
    >
      <Form className="d-flex justify-content-center align-items-center flex-column">
        <Form.Group controlId="formBasicEmail" className="formInput">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" name="username" placeholder="Username" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicEmail" className="formInput">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Email" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword" className="formInput">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword" className="formInput">
          <Form.Label>Confirm password</Form.Label>
          <Form.Control
            type="password"
            name="conPassword"
            placeholder="Confirm Password"
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="formInput">
          Submit
        </Button>
        <Button
          className="formInput"
          variant="primary"
          type="button"
          onClick={() => this.startRegister(true)}
        >
          Register
        </Button>
      </Form>
    </div>
  );
};

export default register;
