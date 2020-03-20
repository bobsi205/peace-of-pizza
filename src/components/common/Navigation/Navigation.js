import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";

import imgCart from "./images/icon-cart.svg";
import { CartContext } from "../../../context/CartContext";

const Navigation = props => {
  const { getCart } = useContext(CartContext);

  return (
    <Navbar
      expand="lg"
      variant="light"
      className={props.noBackground ? "home-navbar" : "bg-light"}
      style={{
        minHeight: "64px"
      }}
    >
      <Container>
        <Navbar.Toggle aria-controls="navbar" className="ml-auto" />

        <Navbar.Collapse id="navbar">
          <Nav className="d-flex align-items-md-center">
            <Nav.Link as={Link} to="/" className="mx-4">
              <strong>Home</strong>
            </Nav.Link>
          </Nav>

          {getCart.currentUser ? (
            <>
              <Nav className="d-flex align-items-md-center">
                <Navbar.Text className="mx-4">
                  Hello {getCart.currentUser.username}
                </Navbar.Text>
              </Nav>

              <Nav className="ml-auto d-flex align-items-md-center">
                <Nav.Link
                  as={Link}
                  to="/order/stage-3"
                  className="d-flex align-items-center mx-4"
                >
                  Cart
                  <img
                    src={imgCart}
                    alt="Cart"
                    height="32"
                    className="ml-2"
                    style={props.noBackground ? {} : { filter: "invert()" }}
                  />
                </Nav.Link>
                <Nav.Link as={Link} to="/sign-out" className="mx-4">
                  Sign-Out
                </Nav.Link>
              </Nav>
            </>
          ) : (
            <>
              <Nav className="ml-auto d-flex align-items-md-center"></Nav>
              <Nav.Link as={Link} to="/sign-in" className="mx-4">
                Sign-In
              </Nav.Link>
              <Nav.Link as={Link} to="/sign-up" className="mx-4">
                Sign-Up
              </Nav.Link>
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
