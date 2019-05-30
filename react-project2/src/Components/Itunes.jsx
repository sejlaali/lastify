import React, { Component } from "react";
import "./Components.css";

class Itunes extends Component {
    render() {
      const player = this.props.preview === "" ? `https://itunes.apple.com/search?term=happy` : this.props.preview
    return (
    <div>
        <video className="media-player" autoplay controls src={player} type="audio/m4a">
        </video>
    </div>
    );
  }
}

export default Itunes;