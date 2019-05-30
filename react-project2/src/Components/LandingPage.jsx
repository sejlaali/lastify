import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Components.css";

class LandingPage extends Component {

  render() {
    return (
      <div id="landing-page-div">
         <h1>
          LAST<span>ify</span>
        </h1>
        <p>Search for an artist or a song.</p>
        <p>Preview a song.</p>
        <p>Read artist bios.</p>
        <div>
          <button className="button-html">
            <Link className="button" to="/homepage">ENTER</Link>
          </button>
        </div>
        <footer>Copyright &copy; General Assembly</footer>
      </div>
    );
  }
}

export default LandingPage;
