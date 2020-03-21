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
      <td style={{ fontWeight: "bold" }}>{props.cost.toFixed(1)}$</td>
      <td className="d-flex flex-column justify-content-center">
        <Button
          className="mr-2"
          variant="secondary"
          onClick={() => {
            props.history.push({
              pathname: "/order/stage-2/" + props.pizzaId,
              state: { newPizza: false }
            });
          }}
        >
          EDIT
        </Button>
        <Button
          className="mr-2"
          variant="outline-danger"
          onClick={() => {
            props.removePizza(props.pizza.id);
          }}
        >
          Delete
        </Button>
      </td>
    </tr>
  );
};
export default withRouter(OrderRow);
