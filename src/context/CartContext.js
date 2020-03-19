import React, { createContext, useState } from "react";
import uuid from "uuid/v1";

import toppingsData from "../data/pizzaToppings.json";

export const CartContext = createContext();

const CartContextProvider = props => {
  const [getCart, setCart] = useState({
    loggedIn: false,
    currentUser: {},
    basePrice: 50,
    order: [
      {
        name: "pizza",
        toppings: []
      },
      {
        name: "Debug Pizza",
        toppings: [
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

  const countToppings = toppings => {
    let summery = [];
    toppingsData.forEach(toppingData => {
      const toppingCount = toppings.filter(
        topping => topping.id === toppingData.id
      ).length;
      summery = [
        ...summery,
        {
          id: toppingData.id,
          name: toppingData.name,
          amount: toppingCount,
          price: toppingCount * toppingData.price
        }
      ];
    });
    return summery;
  };

  const addPizza = (name, toppings) => {
    const tCart = { ...getCart };
    tCart.order.push({
      id: uuid(),
      name: name,
      toppings: toppings,
      toppingsSum: countToppings(toppings)
    });
  };

  const updatePizza = (id, name, toppings) => {
    const tCart = { ...getCart };
    const pizzaIndex = tCart.indexOf(cart => cart.order.id === id);
    if (pizzaIndex != null) {
      if (name != null) tCart.order[pizzaIndex].name = name;
      if (toppings != null) {
        tCart.order[pizzaIndex].toppings = toppings;
        tCart.order[pizzaIndex].toppingSum = countToppings(toppings);
      }
      setCart(tCart);
      return true;
    } else {
      return false;
    }
  };

  const removePizza = id => {
    const tCart = { ...getCart };
    tCart.order = tCart.order.filter(order => order.id === id);
    setCart(tCart);
  };

  return (
    <CartContext.Provider
      value={{
        toppingsData,
        getCart,
        addPizza,
        updatePizza,
        removePizza
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
