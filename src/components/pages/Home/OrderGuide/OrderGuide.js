import React from "react";
import { Container } from "react-bootstrap";

import imgPin from "./images/icon-pin.svg";
import imgPizza from "./images/icon-pizza.svg";
import imgDelivery from "./images/icon-delivery.svg";
import imgBackground from "./images/background-wood.png";

const OrderGuide = () => {
  const numStyle = {
    background: "var(--primary)",
    height: "2rem",
    width: "2rem",
    display: "block",
    borderRadius: "100%",
    position: "absolute",
    top: "65%",
    left: "25%",
    padding: "2.5px",
    fontSize: "12pt"
  };

  return (
    <section
      className="my-4"
      style={{
        backgroundImage: `url(${imgBackground})`,
        backgroundSize: "auto 100%",
        backgroundPosition: "50% 50%",
        padding: "120px"
      }}
    >
      <Container className="text-white text-center">
        <h3>3 Easy Steps To Order</h3>

        <div
          className="d-md-flex justify-content-between mx-auto"
          style={{ minHeight: "250px" }}
        >
          <div className="my-2 mx-auto " style={{ width: "200px" }}>
            <div style={{ position: "relative", margin: "25px" }}>
              <img src={imgPin} alt="" height="48" className="d-inline" />
              <span style={numStyle}>1</span>
            </div>
            <h5>Choose a Destination</h5>
            <p>We've got you covered with over 50 delivery zones.</p>
          </div>

          <div
            className="my-2 mx-auto align-self-end"
            style={{ width: "200px" }}
          >
            <div style={{ position: "relative", margin: "25px" }}>
              <img src={imgPizza} alt="" height="48" className="d-inline" />
              <span style={numStyle}>2</span>
            </div>
            <h5>Build Your Pizza</h5>
            <p>Pick your favorite toppings and let your creativity flow.</p>
          </div>

          <div className="my-2 mx-auto" style={{ width: "200px" }}>
            <div style={{ position: "relative", margin: "25px" }}>
              <img src={imgDelivery} alt="" height="48" className="d-inline" />
              <span style={numStyle}>3</span>
            </div>
            <h5>Wait and Relax</h5>
            <p>Your pizza will be at your door step in under 30 min.</p>
          </div>
        </div>

        <h6>We accept cash on delivery, Card or PayPal</h6>
      </Container>
    </section>
  );
};

export default OrderGuide;
