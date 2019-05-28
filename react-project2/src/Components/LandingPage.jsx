import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Components.css";

class LandingPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Artist Search</h1>
        <div className="button">
          <button>
            <Link to="/homepage">Enter</Link>
          </button>
        </div>
      </div>
    );
  }
}

export default LandingPage;
