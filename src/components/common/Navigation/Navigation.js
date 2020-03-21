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
        <Navbar.Toggle className="ml-auto invertable" />

        <Navbar.Collapse>
          <Nav>
            <Nav.Link as={Link} to="/" className="mx-4">
              <strong>Home</strong>
            </Nav.Link>
          </Nav>

          {getCart.currentUser ? (
            <>
              <Nav>
                <Navbar.Text className="mx-4">
                  Hello <strong>{getCart.currentUser.username}</strong>
                </Navbar.Text>
              </Nav>

              <Nav className="ml-auto">
                <Nav.Link as={Link} to="/order/stage-3" className="mx-4">
                  Cart
                  <img
                    src={imgCart}
                    alt="Cart"
                    height="32"
                    className="ml-2 invertable"
                  />
                  {getCart.order.length > 0 ? (
                    <span class="badge badge-secondary">
                      {getCart.order.length}
                    </span>
                  ) : (
                    <></>
                  )}
                </Nav.Link>
                <Nav.Link as={Link} to="/sign-out" className="mx-4">
                  Sign-Out
                </Nav.Link>
              </Nav>
            </>
          ) : (
            <Nav className="ml-auto">
              <Nav.Link as={Link} to="/sign-in" className="mx-4">
                Sign-In
              </Nav.Link>
              <Nav.Link as={Link} to="/sign-up" className="mx-4">
                Sign-Up
              </Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
