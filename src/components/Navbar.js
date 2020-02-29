import React from "react";
import { Nav, Navbar as Nb } from "react-bootstrap";

const Navbar = () => {
  return (
    <Nb bg="light" variant="light">
      <Nb.Brand href="/">Peace Of Pizza</Nb.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/order">Order Now</Nav.Link>
      </Nav>
      <Nav>
        <Nav.Link href="/login">Login</Nav.Link>
      </Nav>
    </Nb>
  );
};

export default Navbar;
