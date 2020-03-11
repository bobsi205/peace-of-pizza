import React, { createContext, useState } from "react";
export const MyContext = createContext();
const MyContextProvider = props => {
  const [myData, setMyData] = useState({
    loggedIn: false,
    currentUser: {},
    pizzas: [
      {
        id: 0,
        toppings: []
      }
    ]
  });

  return (
    <MyContext.Provider value={[myData, setMyData]}>
      {props.children}
    </MyContext.Provider>
  );
};

export default MyContextProvider;
