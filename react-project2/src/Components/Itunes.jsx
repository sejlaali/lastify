import React, { Component } from "react";
import axios from "axios";
import "./Components.css";

class Itunes extends Component {
  constructor(props) {
    super(props);

  }

    render() {
      const player = this.props.preview === "" ? `https://itunes.apple.com/search?term=happy` : this.props.preview
    return (
    <div>
        <video className="media-player" controls autoplay src={player} type="audio/m4a">
        </video>
    </div>
    );
  }
}

export default Itunes;
