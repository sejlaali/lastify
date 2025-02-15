import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./Components.css";

class ResultDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: "",
      img: ""
    };
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    });
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return (
        <Redirect
          to={{
            pathname: "/target",
            state: {
              inputVal: this.props.result.artist.name,
              songInputValue: this.props.result.artist,
              option: this.props.option
            }
          }}
        />
      );
    }
  };

  render() {
    const artistOrSong =
      this.props.option === "artist" ? (
        <div>
          <h5 className="result-artist" onClick={this.setRedirect}>
            {this.props.result.artist.name}
          </h5>
          <p>
            Playcount:{" "}
            {Number(this.props.result.playcount).toLocaleString("en")}
          </p>{" "}
        </div>
      ) : (
        <div>
          <h5 className="result-artist" onClick={this.setRedirect}>
            {this.props.result.artist}
          </h5>
          <p>
            Listeners:{" "}
            {Number(this.props.result.listeners).toLocaleString("en")}
          </p>
        </div>
      );

    return (
      <div className="song-parts" key={this.props.index}>
        {this.renderRedirect()}
        <i
          onClick={() => [this.props.playNext(this.props.result)]}
          className="play-song material-icons"
        >
          play_arrow
        </i>
        <h4>{this.props.result.name}</h4>
        {artistOrSong}
      </div>
    );
  }
}

export default ResultDetails;
