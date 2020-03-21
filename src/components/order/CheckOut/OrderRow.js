import React from "react";
import { Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";

const OrderRow = props => {
  return (
    <tr>
      <th scope="row">{props.pizza.name}</th>
      <td>
        {props.toppingCount(props.pizzaNumber).map(topp => {
          return (
            <p style={{ fontWeight: "bold" }}>
              {topp.name} : {topp.count}
            </p>
          );
        })}
      </td>
      <td style={{ fontWeight: "bold" }}>{props.cost.toFixed(2)} $</td>
      <td>
        <Button
          onClick={() => {
            props.history.push({
              pathname: "/order/stage-2/" + props.pizzaId,
              state: { newPizza: false }
            });
          }}
        >
          {" "}
          EDIT
        </Button>
      </td>
    </tr>
  );
};
export default withRouter(OrderRow);
