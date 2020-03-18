import React from "react";
import { Button, ProgressBar } from "react-bootstrap";

const ToppingButton = props => {
  return (
    <Button
      block
      size="sm"
      variant="light"
      className="my-1 text-left d-flex flex-row text-nowrap"
      style={props.selected ? { backgroundColor: "var(--secondary)" } : {}}
      onClick={() => props.onClick(props.topping.id)}
    >
      <img
        src={props.topping.icon}
        alt={props.topping.name}
        height="50"
        className="mr-1"
      />
      <span className="d-flex flex-column flex-fill">
        {props.topping.name}
        <br />
        <ProgressBar
          className="mt-auto"
          variant="primary"
          now={props.count}
          max={props.limit}
        />
      </span>
    </Button>
  );
};

export default ToppingButton;
