import React from "react";
import { Button, Badge } from "react-bootstrap";

const ToppingsButtons = props => {
  return (
    <Button
      variant="light"
      className="toppingBtnGrp text-left d-flex"
      onClick={() => props.setCurrTop(props.topping.id)}
    >
      <img src={props.topping.icon} alt={props.topping.name} height="50" />
      <span>
        {props.topping.name}
        <br />
        <Badge variant="primary" className="text-white">{(props.count * props.topping.price).toFixed(2) + "$"}</Badge>
      </span>
    </Button>
  );
};

export default ToppingsButtons;
