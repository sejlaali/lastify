import React, { Component } from "react";
import axios from "axios";
import dotenv from "dotenv";
import "./Components.css";
import { Link } from "react-router-dom";

dotenv.config();
let key = process.env.REACT_APP_API_KEY;

class OneResult extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      info: "",
      img: ""
    };
    this.getResults = this.getResults.bind(this);
    this.getResults();
  }

  async getResults() {
    const artistName =
      this.props.location.state.option === "artist"
        ? this.props.location.state.inputVal
        : this.props.location.state.songInputValue;
    let res = await axios.get(
      `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artistName}&api_key=${key}&format=json`
    );
    this.setState({
      name: res.data.artist.name,
      info: res.data.artist.bio.content
    });

    axios.get(`https://itunes.apple.com/search?term=${artistName}`).then(res =>
      this.setState({
        img: res.data.results[0].artworkUrl100
      })
    );
  }

  errorImg = evt => {
    evt.target.src =
      "https://images.pexels.com/photos/167092/pexels-photo-167092.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=60&w=120";
  };

  render() {
    let info =
      this.state.info === "" ? (
        <h5 className="artist-info-empty">
          No info available for this artist.
        </h5>
      ) : (
        <h5 className="artist-info">{this.state.info}</h5>
      );
    return (
      <div id="one-result-div">
        <h1>{this.state.name}</h1>
        <img src={this.state.img} onError={this.errorImg} alt="album" />
        {info}
        <Link to="/homepage">
          <i className="material-icons back-home">keyboard_arrow_left</i>
        </Link>
      </div>
    );
  }
}

export default OneResult;
