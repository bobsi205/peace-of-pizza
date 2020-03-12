import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-light mt-4 py-4 text-muted">
      <Container>
        <p>
          <strong>Peace Of Pizza</strong>™{" "}
          <small>© Copyright 2020, All Rights Reserved.</small>
          <br />
          <small>
            Our unique pizza is made from the sweat of Shalom our great founder.
          </small>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
