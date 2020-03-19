import React, { useContext, useEffect } from "react";
import { CartContext } from "../../context/CartContext";

import { withRouter } from "react-router-dom";
const SignOut = props => {
  const { logout } = useContext(CartContext);

  useEffect(() => {
    logout();
    props.history.push("/");
  });

  return (
    <div>
      <h1 className="display-4">Well shit you can't logout.</h1>
    </div>
  );
};

export default withRouter(SignOut);
