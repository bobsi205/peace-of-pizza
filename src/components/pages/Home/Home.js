import React from "react";
import { Container, Form, Button, InputGroup } from "react-bootstrap";

import Navigation from "../../common/Navigation/Navigation";
import Reviews from "./Review/Reviews";
import OrderGuide from "./OrderGuide/OrderGuide";
import Social from "./Social/Social";
import Location from "../../common/PlacesAPI/Location";

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
          <Location />
        </Container>
      </header>

      <Reviews />
      <OrderGuide />
      <Social />
    </>
  );
};

export default Home;
