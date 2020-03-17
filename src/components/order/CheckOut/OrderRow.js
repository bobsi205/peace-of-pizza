import React from "react";
import { Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";

const OrderRow = props => {
  const clickHandler = () => {
    props.history.push({
      pathname: "/order/stage-2",
      state: { currentPizza: props.pizza.id }
    });
  };
  return (
    <tr>
      <th scope="row">{props.pizza.id + 1}</th>
      <td>
        {Object.entries(props.pizza.toppingCount).map(([key, value]) => {
          if (value > 0)
            return (
              <p style={{ fontWeight: "bold" }}>
                {key} : {value}
              </p>
            );
          else return false;
        })}
      </td>
      <td style={{ fontWeight: "bold" }}>{props.cost}</td>
      <td>
        <Button onClick={() => clickHandler()}> EDIT</Button>
      </td>
    </tr>
  );
};
export default withRouter(OrderRow);
