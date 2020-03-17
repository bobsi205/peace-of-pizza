import React from "react";
import { Button } from "react-bootstrap";

const OrderRow = props => {
  const clickHandler = () => {};
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
        <Button> EDIT</Button>
      </td>
    </tr>
  );
};
export default OrderRow;
