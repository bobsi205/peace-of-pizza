import React, { createContext, useState } from "react";
export const CartContext = createContext();
const CartContextProvider = props => {
  const [getCart, setCart] = useState({
    loggedIn: false,
    currentUser: {},
    pizzas: [
      {
        id: 0,
        toppings: [],
        toppingCount: {
          Pepperoni: 0,
          Artichoke: 0,
          BabyMozzarella: 0,
          Beef: 0,
          BellPepers: 0,
          BlackOlives: 0,
          Broccoli: 0,
          BulgarianCheese: 0,
          Cabanos: 0,
          Corn: 0,
          ExtraCheese: 0,
          Garlic: 0,
          GreenOlives: 0,
          Jalapenos: 0,
          Mushrooms: 0,
          SheepCheese: 0,
          Tomato: 0
        }
      }
    ],
    toppingBuilder: {
      meats: ["Pepperoni", "Beef", "Cabanos"],
      cheeses: [
        "Baby Mozzarella",
        "Bulgarian Cheese",
        "Extra Cheese",
        "Sheep Cheese"
      ],
      vegetables: [
        "Artichoke",
        "Black Olives",
        "Green Olives",
        "Broccoli",
        "Corn",
        "Jalapenos",
        "Mushrooms",
        "Tomato"
      ]
    }
  });

  return (
    <CartContext.Provider value={[getCart, setCart]}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
