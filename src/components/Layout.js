import React, { Component } from "react";
import Navbar from "./Navbar";

class Layout extends Component {
  render() {

    return (
      <div>
        <Navbar />
        <div className="container">{this.props.children}</div>
      </div>
    );
  }
}

export default Layout;
