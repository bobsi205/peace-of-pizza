import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import FormComp from "./Form";

export class Register extends Component {
  state = {
    formGroup: [
      {
        controlId: "formBasicEmail",
        className: "formInput",
        label: "Username",
        type: "text",
        as: "input",
        name: "username",
        placeholder: "Username"
      }
    ],
    form: {
      username: "",
      email: "",
      password: "",
      conPassword: ""
    },
    formErrors: {
      username: "",
      email: "",
      password: "",
      conPassword: ""
    }
  };
  gotoLogin = () => {
    this.props.history.push({
      pathname: `/login`
    });
  };

  changeHandler = e => {
    var tempState = this.state.form;
    tempState[e.target.name] = e.target.value;
    this.setState({ form: tempState });
  };

  submitHandler = e => {
    this.usernameValidation();
    this.emailValidation();
  };

  

  usernameValidation = e => {
    var tempState = this.state.formErrors;
    if (
      /^(?=.{6,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/.test(
        this.state.form.username
      )
    )
      tempState.username = "";
    else tempState.username = "wrong username";
    this.setState({ formErrors: tempState });
  };

  emailValidation = e => {
    var tempState = this.state.formErrors;
    if (
      /^[a-zA-Z0-9.]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/.test(this.state.form.email)
    )
      tempState.email = "";
    else tempState.email = "wrong email";
    this.setState({ formErrors: tempState });
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
            <Form.Control
              type="text"
              as="input"
              name="username"
              placeholder="Username"
              value={this.state.form.username}
              onChange={e => this.changeHandler(e)}
              required
            />
            <Form.Text className="text-muted">
              {this.state.formErrors.username}
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicEmail" className="formInput">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Email"
              value={this.state.form.email}
              onChange={e => this.changeHandler(e)}
            />
            <Form.Text className="text-muted">
              {this.state.formErrors.email}
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword" className="formInput">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.form.password}
              onChange={e => this.changeHandler(e)}
            />
            <Form.Text className="text-muted">
              {this.state.formErrors.password}
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicPassword" className="formInput">
            <Form.Label>Confirm password</Form.Label>
            <Form.Control
              type="password"
              name="conPassword"
              placeholder="Confirm Password"
              value={this.state.form.conPassword}
              onChange={e => this.changeHandler(e)}
            />
            <Form.Text className="text-muted">
              {this.state.formErrors.conPassword}
            </Form.Text>
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
