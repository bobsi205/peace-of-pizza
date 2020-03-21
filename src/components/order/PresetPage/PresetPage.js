import React, { useContext } from "react";
import { Container, ListGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import { CartContext } from "../../../context/CartContext";

import presetData from "../../../data/pizzaPresets.json";

const PresetPage = props => {
  const { getCart, removePizza } = useContext(CartContext);
  React.useEffect(() => {
    const Btn = document.getElementById("finishOrder");
    if (getCart.order[0] !== undefined) {
      Btn.disabled = false;
    }
  });

  return (
    <Container className="d-lg-flex">
      <div className="order-2 flex-fill">
        {presetData.map((preset, i) => (
          <Link
            key={i}
            to={{
              pathname: "/order/stage-2/" + preset.id,
              state: {
                newPizza: true,
                toppings: preset.toppings,
                pizzaName: preset.name
              }
            }}
            className="d-block bg-dark my-4 p-4 rounded shadow"
            style={{
              height: "150px",
              backgroundImage: `url(${preset.img})`,
              backgroundSize: "cover",
              backgroundPosition: "100% 50%",
              textDecoration: "none"
            }}
          >
            <div style={{ maxWidth: "250px" }}>
              <h4 className="text-white">{preset.name}</h4>
              <p className="text-light">{preset.text}</p>
            </div>
          </Link>
        ))}
      </div>

      <ListGroup
        className=" order-1 my-4 mr-lg-4 shadow"
        style={{
          minWidth: "300px"
        }}
      >
        <ListGroup.Item className="bg-light">Cart</ListGroup.Item>
        <Button
          as={Link}
          variant="secondary"
          id="finishOrder"
          disabled
          to={"/order/stage-3"}
        >
          Finish Order
        </Button>
        {getCart.order.map(pizza => (
          <ListGroup.Item key={pizza.id} className="d-flex">
            {pizza.name}
            <Button
              as={Link}
              to={{
                pathname: "/order/stage-2/" + pizza.id,
                state: { newPizza: false }
              }}
              size="sm"
              variant="secondary"
              className="ml-auto mr-1"
            >
              Edit
            </Button>
            <Button
              size="sm"
              variant="secondary"
              className="mr-1"
              onClick={() => removePizza(pizza.id)}
            >
              Delete
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default PresetPage;
