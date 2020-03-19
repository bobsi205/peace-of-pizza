import React, { useContext } from "react";
import { Container, Button } from "react-bootstrap";
import backgroundImg from "../../../images/woodBackground.jpg";
import { CartContext } from "../../../context/CartContext";
import { withRouter } from "react-router-dom";

const CheckOut = props => {
  const { toppingsData, getCart } = useContext(CartContext);

  const clickFinishOrder = () => {
    props.history.push({
      pathname: `/order/stage-4`
    });
  };

  const calculateCost = pizzaId => {
    let total = 0;
    if (pizzaId != null) {
      total += getCart.basePrice;
      toppingCount(pizzaId).forEach(sum => (total += sum.price));
    } else {
      getCart.order.forEach((pizza, i) => {
        total += getCart.basePrice;
        toppingCount(i).forEach(sum => (total += sum.price));
      });
    }

    return total;
  };

  const toppingCount = pizzaId => {
    let summery = [];

    toppingsData.forEach(top => {
      const sum = getCart.order[pizzaId].toppings.filter(
        pTop => pTop.id === top.id
      ).length;
      if (sum) {
        summery = [
          ...summery,
          {
            id: top.id,
            name: top.name,
            amount: sum,
            price: sum * top.price
          }
        ];
      }
    });

    return summery;
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center d-flex flex-column text-white table-responsive"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "50% 50%"
      }}
    >
      <h1 className="display-4">Order Summery</h1>
      <table className="table text-white ">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Pizza</th>
            <th scope="col">Toppings</th>
            <th scope="col">Cost</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {getCart.order.map((pizza, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{pizza.name}</td>
              <td>
                <ul className="list-unstyled">
                  {toppingCount(i).map(top => (
                    <li key={top.id + i}>
                      {"x" +
                        top.amount +
                        " " +
                        top.name +
                        " " +
                        top.price.toFixed(2) +
                        "$"}
                    </li>
                  ))}
                </ul>
              </td>
              <td>{calculateCost(i).toFixed(2) + "$"}</td>
              <td>
                <Button>Edit</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Total cost: {calculateCost().toFixed(2) + "$"}</h2>
      <Button onClick={() => clickFinishOrder()}>Order</Button>
    </Container>
  );
};

export default withRouter(CheckOut);
