import React from "react";
import { Button } from "react-bootstrap";
import Canvas from "./PizaaCanvas";

const PizzaBuilder = props => {
  return (
    <>
      <h2>Pizza Builder</h2>
      <div className="d-flex align-content-center justify-content-center">
        <div className="d-flex align-content-center justify-content-center flex-column">
          <Button> peperoni </Button>
          <Button> peperoni </Button>
          <Button> peperoni </Button>
          <Button> peperoni </Button>
          <Button> peperoni </Button>
          <Button> peperoni </Button>
          <Button> peperoni </Button>
        </div>
        <Canvas />
      </div>
    </>
  );
};

export default PizzaBuilder;
