import React, { Component } from "react";
import Footer from "../common/Footer/Footer";
import Navigation from "../common/Navigation/Navigation";

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="d-flex flex-column" style={{ height: "100vh" }}>
        {this.props.route === "/" ? "" : <Navigation />}
        <div className="flex-fill">{this.props.children}</div>
        <Footer />
      </div>
    );
  }
}

export default Layout;
