import React from "react";
import { Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";

const OrderRow = props => {
  const clickHandler = () => {
    props.history.push({
      pathname: "/order/stage-2",
      state: { currentPizza: props.pizzaId }
    });
  };
  return (
    <tr>
      <th scope="row">{props.pizzaId + 1}</th>
      <td>
        {props.toppingCount(props.pizzaId).map(topp => {
          return (
            <p style={{ fontWeight: "bold" }}>
              {topp.name} : {topp.count}
            </p>
          );
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
