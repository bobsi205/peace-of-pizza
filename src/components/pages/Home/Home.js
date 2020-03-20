import React from "react";
import { Container, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import Navigation from "../../common/Navigation/Navigation";
import Reviews from "./Review/Reviews";
import OrderGuide from "./OrderGuide/OrderGuide";
import Social from "./Social/Social";

import imgBanner from "./images/banner-pizza-dim.jpg";

const Home = props => {
  const styleHeader = {
    backgroundImage: `url(${imgBanner})`,
    backgroundSize: "cover",
    backgroundPosition: "50% 45%",
    borderBottom: "solid var(--primary) 5px"
  };

  return (
    <>
      <header className="bg-light" style={styleHeader}>
        <Navigation noBackground />
        <Container className="text-center py-4">
          <img
            src="\logo256.png"
            alt="Peace Of Pizza"
            height="256"
            className="m-4"
          />
        </Container>
        <Button
          variant="primary"
          size="lg"
          type="submit"
          className="text-nowrap m-1"
          onClick={() => props.history.push("/order/stage-1")}
        >
          Feed Me!
        </Button>
      </header>

      <Reviews />
      <OrderGuide />
      <Social />
    </>
  );
};

export default withRouter(Home);
