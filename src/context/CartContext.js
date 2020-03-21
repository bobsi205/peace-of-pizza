import React, { createContext, useState } from "react";
import uuid from "uuid/v1";

import toppingsData from "../data/pizzaToppings.json";

export const CartContext = createContext();

const CartContextProvider = props => {
  const [getCart, setCart] = useState({
    currentUser: "",
    basePrice: 15,
    order: []
  });

  const countToppings = toppings => {
    let summery = [];
    toppingsData.forEach(toppingData => {
      const toppingCount = toppings.filter(
        topping => topping.id === toppingData.id
      ).length;

      if (toppingCount) {
        summery = [
          ...summery,
          {
            id: toppingData.id,
            name: toppingData.name,
            amount: toppingCount,
            price: toppingCount * toppingData.price
          }
        ];
      }
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
    console.log(id, getCart);
    const tCart = { ...getCart };
    let pizzaIndex;
    tCart.order.map((pizza, index) => {
      console.log(pizza);
      if (pizza.id === id) pizzaIndex = index;
      return false;
    });
    console.log(pizzaIndex);

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

  const emptyCart = () => {
    const tCart = { ...getCart };
    tCart.order = [];
    setCart(tCart);
  };

  const login = user => {
    setCart({ ...getCart, currentUser: user });
  };

  const logout = () => {
    emptyCart();
    setCart({ ...getCart, currentUser: "" });
  };

  return (
    <CartContext.Provider
      value={{
        toppingsData,
        getCart,
        addPizza,
        updatePizza,
        removePizza,
        emptyCart,
        login,
        logout
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
