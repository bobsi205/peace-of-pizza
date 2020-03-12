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
      <>
        {this.props.route === "/" ? "" : <Navigation />}
        {this.props.children}
        <Footer />
      </>
    );
  }
}

export default Layout;
