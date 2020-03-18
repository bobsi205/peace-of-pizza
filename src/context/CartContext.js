import React, { createContext, useState } from "react";

import toppings from "../data/pizzaToppings.json";

export const CartContext = createContext();

const CartContextProvider = props => {
  const [getCart, setCart] = useState({
    loggedIn: false,
    currentUser: {},
    order: [
      {
        name: "pizza",
        pizza: "pizza-id",
        toppings: []
      }
    ]
  });

  return (
    <CartContext.Provider value={[getCart, setCart, toppings]}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
