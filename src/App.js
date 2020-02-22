import React, { Component } from "react";
import "./App.css";
import Layout from "./components/Layout";
import LandingPage from "./components/LandingPage";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    const route = (
      <Switch>
        <Route exact path={"/"} component={() => <LandingPage />} />
        {/* <Route path={"/edituser/:id"} component={() => <EditUser user />} /> */}
      </Switch>
    );

    return <Layout>{route}</Layout>;
  }
}

export default App;
