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
      },
      {
        name: "Debug Pizza",
        pizzaToppings: [
          { id: "tomato" },
          { id: "tomato" },
          { id: "tomato" },
          { id: "tomato" },
          { id: "tomato" },
          { id: "tomato" },
          { id: "tomato" },
          { id: "tomato" },
          { id: "tomato" },
          { id: "tomato" },
          { id: "tomato" },
          { id: "tomato" },
          { id: "tomato" },
          { id: "mushrooms" },
          { id: "mushrooms" },
          { id: "mushrooms" },
          { id: "mushrooms" },
          { id: "mushrooms" },
          { id: "mushrooms" },
          { id: "mushrooms" },
          { id: "mushrooms" },
          { id: "mushrooms" },
          { id: "mushrooms" },
          { id: "mushrooms" },
          { id: "mushrooms" },
          { id: "mushrooms" },
          { id: "mushrooms" },
          { id: "bellPepers" },
          { id: "bellPepers" },
          { id: "bellPepers" },
          { id: "bellPepers" },
          { id: "bellPepers" },
          { id: "bellPepers" },
          { id: "bellPepers" },
          { id: "bellPepers" }
        ]
      }
    ]
  });

  return (
    <CartContext.Provider value={{ getCart, setCart, toppings }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
