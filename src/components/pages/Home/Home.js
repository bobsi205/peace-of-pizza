import React from "react";
import { Container, Form, Button, InputGroup } from "react-bootstrap";

import Navigation from "../../common/Navigation/Navigation";
import Reviews from "./Review/Reviews";
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
          backgroundPosition: "50% 45%",
          borderBottom: "solid var(--primary) 5px"
        }}
      >
        <Navigation noBackground />

        <Container className="text-center py-4">
          <img
            src="\logo256.png"
            alt="Peace Of Pizza"
            height="256"
            className="m-4"
          />

          <Form
            className="mx-auto my-4"
            style={{ maxWidth: "720px" }}
            action="/order/stage-2"
          >
            <Form.Group className="d-flex">
              <Form.Control
                size="lg"
                type="text"
                placeholder="Where Do We Meet?"
                className="flex-grow-1 m-1"
                required
              />

              <Button
                variant="primary"
                size="lg"
                type="submit"
                className="text-nowrap m-1"
              >
                Feed Me!
              </Button>
            </Form.Group>
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
