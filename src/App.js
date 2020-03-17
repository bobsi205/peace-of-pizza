import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Home from "./components/pages/Home/Home";
import SignUp from "./components/user/SignUp";
import SignIn from "./components/user/SignIn";
import SignOut from "./components/user/SignOut";
import Builder from "./components/order/PizzaBuilder/PizzaBuilder";
import CheckOut from "./components/order/CheckOut/CheckOut";
import Tracker from "./components/order/Tracker/Tracker";

const App = () => {
  return (
    <Layout route="/not-home" /* TODO: Pass route path from router */>
      <Switch>
        <Route exact path={"/"} component={() => <Home />} />
        <Route exact path={"/sign-up"} component={() => <SignUp />} />
        <Route exact path={"/sign-in"} component={() => <SignIn />} />
        <Route exact path={"/sign-out"} component={() => <SignOut />} />
        <Route exact path={"/order/stage-2"} component={() => <Builder />} />
        <Route exact path={"/order/stage-3"} component={() => <CheckOut />} />
        <Route exact path={"/order/stage-4"} component={() => <Tracker />} />

        {/* Redirect to home if page not found*/}
        <Route path={"*"} component={() => <Redirect to="/" />} />
      </Switch>
    </Layout>
  );
};

export default App;
