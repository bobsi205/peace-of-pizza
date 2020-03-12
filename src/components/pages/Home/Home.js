import React from "react";
import { Container, Form, Button } from "react-bootstrap";

import Navigation from "../../common/Navigation/Navigation";
import Reviews from "./Reviews";
import OrderGuide from "./OrderGuide/OrderGuide";
import Social from "./Social/Social";

import imgBanner from "./images/banner-pizza-dim.jpg";

const Home = () => {
  return (
    <>
      <header
        className="bg-light"
        style={{
          backgroundImage: `url(${imgBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "50% 48%"
        }}
      >
        <Navigation />

        <Container className="text-center py-4">
          <img
            src="\logo256.png"
            alt="Peace Of Pizza"
            height="256"
            className="m-4"
          />

          <Form className="d-flex w-75 mx-auto" action="/order/stage-2">
            <Form.Control
              size="lg"
              type="text"
              placeholder="Where Do We Meet?"
              className="flex-grow-1 m-1"
            />
            <Button
              variant="primary"
              size="lg"
              type="submit"
              className="text-nowrap m-1"
            >
              Feed Me!
            </Button>
          </Form>
        </Container>
      </header>

      <Reviews />
      <OrderGuide />
      <Social />
    </>
  );
};

export default Home;
