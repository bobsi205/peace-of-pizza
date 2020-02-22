import React, { Component } from "react";
import pizza1 from "../images/pizza1.jpg";
import dealP from "../images/deal 2p.png";
import { Container, Jumbotron } from "react-bootstrap";

export class LandingPage extends Component {
  render() {
    return (
      <div>
        <Jumbotron
          fluid
          style={{
            background: `url(${pizza1})`,
            backgroundPosition: "50% 50%",
            backgroundSize: "cover",
            marginBottom: "2px"
          }}
        >
          <Container className="text-white">
            <span
              style={{
                backgroundColor: "#00000040",
                display: "inline-block"
              }}
              className="rounded-right p-3"
            >
              <h1 className="display-4 font-weight-normal">Peace of Pizza</h1>
              <p className="lead">Yes, we make pizza</p>
            </span>
          </Container>
        </Jumbotron>
        <div className="row">
          <div className="col-7 bg-black" style={{ hight: "100px" }}>
            <img src={dealP} alt="2 pizzas + 2 toppings free"></img>
          </div>
          <div className="col">make your own pizza</div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
