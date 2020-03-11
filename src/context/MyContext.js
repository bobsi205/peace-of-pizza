import React, { createContext, useState } from "react";
export const MyContext = createContext();
const MyContextProvider = props => {
  const [myData, setMyData] = useState({
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
    },
    updateTopp: topping => {
      myData.pizzas[0].toppingCount[topping]++;
    }
  });

  return (
    <MyContext.Provider value={[myData, setMyData]}>
      {props.children}
    </MyContext.Provider>
  );
};

export default MyContextProvider;
