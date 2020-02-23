import React, { Component } from "react";
import Register from "./Register";
import { Form, Button } from "react-bootstrap";

export class App extends Component {
  state = {
    email: "",
    password: "",
    msgEmail: "",
    msgPassword: "",
    loggedIn: false,
    register: true,
    DB: {}
  };

  loginValidation = e => {
    e.preventDefault();
    var item = {
      email: e.target.email.value,
      password: e.target.password.value
    };
    var user = this.state.DB.find(ele => ele.email === item.email);

    if (user !== undefined) {
      if (user.password === item.password) {
        this.setState({ loggedIn: true });
        this.setState({ msgEmail: "" });
        this.setState({ msgPassword: "" });
      } else {
        this.setState({ msgPassword: "wrong password" });
        this.setState({ msgEmail: "" });
      }
    } else {
      this.setState({ msgEmail: "wrong email" });
      this.setState({ msgPassword: "" });
    }
  };

  startRegister = val => {
    this.setState({ register: val });
  };

  userCreation = e => {
    var userInput = {
      email: e.target.email.value,
      password: e.target.password.value,
      conPassword: e.target.conPassword.value
    };
    if (userInput.password !== userInput.conPassword) {
      //pass dont match
    }
    if (
      this.state.DB.find(ele => ele.email === userInput.email) !== undefined
    ) {
      //email exsist
    }
  };

  componentDidMount() {
    var item = JSON.parse(localStorage.getItem("usersArr"));
    console.log(item);
    this.setState({ DB: item });
  }

  registerData = () => {
    var users = [];
    users.push({ email: "qweqwe@qwe.com", password: "qweqwe" });
    localStorage.setItem("usersArr", JSON.stringify(users));
  };

  render() {
    return this.state.register ? (
      <div>
        <Form onSubmit={e => this.loginValidation(e)}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" />
            <Form.Text className="text-muted">{this.msgEmail}</Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
            />
            <p>{this.msgPassword}</p>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
          <Button
            variant="primary"
            type="button"
            onClick={() => this.startRegister(false)}
          >
            Register
          </Button>
          <p>{this.loggedIn ? "logged In" : ""}</p>
        </Form>
        <p>{this.state.loggedIn ? "logged In" : ""}</p>
        <p>{this.msgPassword}</p>
        <p>{this.msgEmail}</p>
      </div>
    ) : (
      <Register startRegister={this.startRegister} />
    );
  }
}

export default App;
