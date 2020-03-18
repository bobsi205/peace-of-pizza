import React, { createContext, useState } from "react";

import toppings from "../data/pizzaToppings.json";

export const CartContext = createContext();

const CartContextProvider = props => {
  const [getCart, setCart] = useState({
    loggedIn: false,
    currentUser: {},
    basePrice: 50,
    order: [
      {
        name: "pizza",
        pizzaToppings: []
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
