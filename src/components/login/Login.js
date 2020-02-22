import Form from "./Form";
import React, { Component } from "react";
import Register from "./Register";

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
        <Form
          loginValidation={this.loginValidation}
          startRegister={this.startRegister}
        />
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
