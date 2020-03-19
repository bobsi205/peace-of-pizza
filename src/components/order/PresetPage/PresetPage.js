import React, { useContext } from "react";
import { Container, ListGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import { CartContext } from "../../../context/CartContext";

import presetData from "../../../data/pizzaPresets.json";

const PresetPage = props => {
  const { getCart } = useContext(CartContext);

  return (
    <Container className="d-lg-flex">
      <div className="order-2 flex-fill">
        {presetData.map((preset, i) => (
          <Link
            key={i}
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
        className="order-1 my-4 mr-lg-4 shadow"
        style={{
          minWidth: "300px"
        }}
      >
        <ListGroup.Item className="bg-light">Cart</ListGroup.Item>
        {getCart.order.map(pizza => (
          <ListGroup.Item key={pizza.id} className="d-flex">
            {pizza.name}
            <Button size="sm" variant="secondary" className="ml-auto">
              Edit
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default PresetPage;
