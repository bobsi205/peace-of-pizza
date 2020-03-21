import React, { useContext } from "react";
import { Container, Button } from "react-bootstrap";
import backgroundImg from "../../../images/woodBackground.jpg";
import { CartContext } from "../../../context/CartContext";
import Row from "./OrderRow";
import { withRouter } from "react-router-dom";

const CheckOut = props => {
  const { toppingsData, getCart } = useContext(CartContext);

  const clickFinishOrder = () => {
    props.history.push({
      pathname: `/order/stage-4`
    });
  };

  // calculats each pizza cost
  const calculateCost = () => {
    let pizzasCost = [];
    pizzasCost = getCart.order.map((pizza, index) => {
      let tempCost = 50;
      let toppingsCount = toppingCount(index);
      toppingsCount.map(top => {
        let data = toppingsData.find(ele => ele.name === top.name);
        tempCost += top.count * data.price;
        return false;
      });
      return tempCost;
    });

    return pizzasCost;
  };

  const toppingCount = id => {
    let toppingsCount = [];
    toppingsData.forEach(top => {
      let len = getCart.order[id].toppings.filter(pTop => pTop.id === top.id)
        .length;
      if (len > 0)
        toppingsCount = [...toppingsCount, { name: top.name, count: len }];
    });
    return toppingsCount;
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
  console.log(cost);

  return (
    <Container
      className="d-flex justify-content-between flex-column text-white"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "50% 50%",
        minHeight: "75vh"
      }}
    >
      <div className="d-flex align-items-center flex-column text-white table-responsive">
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
            {getCart.order.map((pizza, index) => {
              console.log(pizza, pizza.name);

              return (
                <Row
                  pizza={pizza}
                  pizzaNumber={index}
                  pizzaId={pizza.id}
                  cost={cost[index]}
                  toppingCount={toppingCount}
                />
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="d-flex flex-column align-items-center m-4">
        <h2>Total cost: {totalCost(cost).toFixed(2)} $</h2>
        <Button style={{ minWidth: "40%" }} onClick={() => clickFinishOrder()}>
          Order
        </Button>
      </div>
    </Container>
  );
};

export default withRouter(CheckOut);
