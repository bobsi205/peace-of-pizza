import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";

import imgCart from "./images/icon-cart.svg";

const Navigation = () => {
  const cartArea = false ? (
    <>
      <Nav.Link as={Link} to="/cart" className="d-flex align-items-center mx-4">
        Cart
        <img src={imgCart} alt="Cart" height="32" className="ml-4" />
      </Nav.Link>
      <Nav.Link as={Link} to="/sign-out" className="mx-4">
        Sign-Out
      </Nav.Link>
    </>
  ) : (
    <>
      <Nav.Link as={Link} to="/sign-in" className="mx-4">
        Sign-In
      </Nav.Link>
      <Nav.Link as={Link} to="/sign-up" className="mx-4">
        Sign-Up
      </Nav.Link>
    </>
  );

  return (
    <Navbar expand="lg" variant="dark" className="home-navbar">
      <Container>
        <Nav className="text-nowrap d-flex align-items-md-center">
          <Nav.Link as={Link} to="/" className="mx-4">
            Home
          </Nav.Link>
        </Nav>

        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar">
          <Nav className="text-nowrap d-flex align-items-md-center">
            <Navbar.Text className="mx-4">
              Hi <strong>[PH]Username</strong>
            </Navbar.Text>
          </Nav>
          <Nav className="ml-auto text-nowrap d-flex align-items-md-center">
            {cartArea}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
