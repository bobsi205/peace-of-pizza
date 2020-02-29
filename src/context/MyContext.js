import React, { createContext, useState } from "react";
export const MyContext = createContext();
const MyContextProvider = props => {
  const [myData] = useState({ loggedIn: false });

  return (
    <MyContext.Provider value={{ myData }}>{props.children}</MyContext.Provider>
  );
};

export default MyContextProvider;
