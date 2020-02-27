import React, { Component } from "react";
import "./App.css";
import Layout from "./components/Layout";
import LandingPage from "./components/LandingPage";
import { Route, Switch } from "react-router-dom";
import Login from "./components/login/Login";
import Register from "./components/login/Register";

class App extends Component {
  render() {
    const route = (
      <Switch>
        <Route exact path={"/"} component={() => <LandingPage />} />
        <Route path={"/login"} component={() => <Login />} />
        <Route path={"/register"} component={() => <Register />} />
      </Switch>
    );

    return <Layout>{route}</Layout>;
  }
}

export default App;
