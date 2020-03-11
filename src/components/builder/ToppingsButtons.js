import React from "react";
import { Button, Badge } from "react-bootstrap";

const ToppingsButtons = props => {
  return (
    <Button
      variant="light"
      className="toppingBtnGrp"
      onClick={() => props.setCurrTop(props.topping.replace(/\s/g, ""))}
    >
      {props.topping} <Badge variant="Success">{props.count}</Badge>
    </Button>
  );
};

export default ToppingsButtons;
