import React, { useContext, useEffect } from "react";
import { CartContext } from "../../context/CartContext";

import { withRouter } from "react-router-dom";
const SignOut = props => {
  const [getCart, setCart] = useContext(CartContext);

  useEffect(() => {
    let tempCart = getCart;
    tempCart.loggedIn = false;
    tempCart.currentUser = {};
    setCart(tempCart);
    console.log(getCart);
    props.history.push("/");
  });

  return (
    <div>
      <h1 className="display-4">Well shit you can't logout.</h1>
    </div>
  );
};

export default withRouter(SignOut);
