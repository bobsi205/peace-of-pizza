import React from "react";
import PizzaCanvas from "./PizzaCanvas";
import { Container } from "react-bootstrap";

const PizzaBuilder = () => {
  return (
    <Container>
      <h1 className="display-4 my-4">Pizza Builder</h1>
      <PizzaCanvas />
    </Container>
  );
};

export default PizzaBuilder;
