import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./components/pages/Home/Home";
import Login from "./components/login/Login";
import Register from "./components/login/Register";
//import Navbar from "./components/Navbar";
import Builder from "./components/builder/PizzaBuilder";
import Footer from "./components/common/Footer/Footer";

const App = props => {
  return (
    <>
      {/*<Navbar />*/}
      <Switch>
        <Route exact path={"/"} component={() => <Home />} />
        <Route path={"/login"} component={() => <Login />} />
        <Route path={"/register"} component={() => <Register />} />
        <Route path={"/order"} component={() => <Builder />} />
        {/* <Route path={"/summary"} component={()=>}/> */}
      </Switch>
      <Footer />
    </>
  );
};

export default App;
