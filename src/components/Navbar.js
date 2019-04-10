import React, { Component } from "react";
import "../styles/Navbar.css";

class Navbar extends Component {
  render(props) {
    return (
      <div className="navbar navbar-default navbar-fixed-top">
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <a className="nav-link active" href="/home">
              Clicky Game
            </a>
          </li>
          <li className="nav-item">
            <h2 className="nav-link">Click an image to begin!</h2>
          </li>
          <li className="nav-item">
            <h2 className="nav-link">
              Score: {this.props.score} | Top Score: {this.props.topScore}
            </h2>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
