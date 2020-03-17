import React, { useContext } from "react";
import { Container, Button } from "react-bootstrap";
import backgroundImg from "../../../images/woodBackground.jpg";
import { CartContext } from "../../../context/CartContext";
import Row from "./OrderRow";
import { withRouter } from "react-router-dom";

const CheckOut = props => {
  const [getCart, setCart] = useContext(CartContext);

  // toppings cost
  const toppingCost = 0.25;

  const clickFinishOrder = () => {
    props.history.push({
      pathname: `/order/stage-4`
    });
  };

  // calculats each pizza cost
  const calculateCost = () => {
    let total = [];
    getCart.pizzas.map(pizza => {
      let tCost = 0;
      Object.entries(pizza.toppingCount).map(([key, value]) => {
        tCost += value;
        return false;
      });
      total.push(tCost * toppingCost + 50);
      return false;
    });
    return total;
  };

  // calculats the total cost of pizzas
  const totalCost = cost => {
    let total = 0;
    cost.map(price => {
      total += price;
      return false;
    });
    return total;
  };
  let cost = calculateCost();

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
            <th scope="col">Pizza</th>
            <th scope="col">Toppings</th>
            <th scope="col">Cost</th>
            <th scope="col">EDIT</th>
          </tr>
        </thead>
        <tbody>
          {getCart.pizzas.map(pizza => {
            return <Row pizza={pizza} cost={cost[pizza.id]} />;
          })}
        </tbody>
      </table>
      <h2>Total cost: {totalCost(cost)}</h2>
      <Button onClick={() => clickFinishOrder()}>Order</Button>
    </Container>
  );
};

export default withRouter(CheckOut);
