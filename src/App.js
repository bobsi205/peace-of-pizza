import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./components/pages/Home/Home";
import SignUp from "./components/user/SignUp";
import SignIn from "./components/user/SignIn";
import SignOut from "./components/user/SignOut";
import Builder from "./components/builder/PizzaBuilder";
import CheckOut from "./components/order/CheckOut";
import Tracker from "./components/order/Tracker/Tracker";
import Footer from "./components/common/Footer/Footer";

const App = props => {
  return (
    <>
      {/*<Navbar />*/}
      <Switch>
        <Route exact path={"/"} component={() => <Home />} />
        <Route exact path={"/sign-up"} component={() => <SignUp />} />
        <Route exact path={"/sign-in"} component={() => <SignIn />} />
        <Route exact path={"/sign-out"} component={() => <SignOut />} />
        <Route exact path={"/order/stage-1"} component={() => <Home />} />
        <Route exact path={"/order/stage-2"} component={() => <Builder />} />
        <Route exact path={"/order/stage-3"} component={() => <CheckOut />} />
        <Route exact path={"/order/stage-4"} component={() => <Tracker />} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
