import React, { Component } from "react";
import axios from "axios";
import dotenv from "dotenv";
import "./Components.css";

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
    const infoWithLink = res.data.artist.bio.content;
    const info = infoWithLink.replace(
      `<a href="https://www.last.fm/music/${
        res.data.artist.name
      }">Read more on Last.fm</a>. User-contributed text is available under the Creative Commons By-SA License; additional terms may apply.`,
      ""
    );
    this.setState({
      name: res.data.artist.name,
      info
    });

    axios.get(`https://itunes.apple.com/search?term=${artistName}`).then(res =>
      this.setState({
        img: res.data.results[0].artworkUrl100
      })
    );
  }

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <img src={this.state.img} />
        <h5 className="artist-info">{this.state.info}</h5>
      </div>
    );
  }
}

export default OneResult;
