import React, { Component } from "react";
import "./App.css";
import Layout from "./components/Layout";
import LandingPage from "./components/LandingPage";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login";

class App extends Component {
  render() {
    const route = (
      <Switch>
        <Route exact path={"/"} component={() => <LandingPage />} />
        <Route path={"/login"} component={() => <Login />} />
      </Switch>
    );

    return <Layout>{route}</Layout>;
  }
}

export default App;
