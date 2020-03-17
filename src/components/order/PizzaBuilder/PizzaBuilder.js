import React from "react";
import PizzaCanvas from "./PizaaCanvas";

const PizzaBuilder = props => {
  return (
    <>
      <h2>Pizza Builder</h2>
      <div className="d-flex align-content-center justify-content-center">
        <PizzaCanvas />
      </div>
    </>
  );
};

export default PizzaBuilder;
