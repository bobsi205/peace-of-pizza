import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";

export class Register extends Component {
  gotoLogin = () => {
    this.props.history.push({
      pathname: `/login`
    });
  };

  submitHandler = e => {
    console.log("here");
    console.log("here");
  };

  emailValidation = e => {
    //^[a-zA-Z0-9.]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$
  };
  render() {
    return (
      <div
        className="d-flex justify-content-center align-items-center flex-column"
        style={{ height: "500px", marginBottom: "20px" }}
      >
        <h2 className="mt-5">Registration</h2>
        <Form className="d-flex justify-content-center align-items-center flex-column mb-5">
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
          <Button
            variant="success"
            type="button"
            className="formInput"
            onClick={e => this.submitHandler(e)}
          >
            Submit
          </Button>
          <Button
            className="formInput"
            variant="secondary"
            type="button"
            onClick={() => this.gotoLogin()}
          >
            Login
          </Button>
        </Form>
      </div>
    );
  }
}

export default withRouter(Register);
