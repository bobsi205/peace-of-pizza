import React from "react";
import "./App.css";
import LandingPage from "./components/LandingPage";
import { Route, Switch } from "react-router-dom";
import Login from "./components/login/Login";
import Register from "./components/login/Register";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path={"/"} component={() => <LandingPage />} />
        <Route path={"/login"} component={() => <Login />} />
        <Route path={"/register"} component={() => <Register />} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
