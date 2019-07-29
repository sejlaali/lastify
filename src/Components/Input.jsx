import React, { Component } from "react";
import axios from "axios";
import dotenv from "dotenv";
import ResultDetails from "./ResultDetails";
import "./Components.css";
import Itunes from "./Itunes";
import { Link } from "react-router-dom";

dotenv.config();
let key = "1deb80ec093a9391822d243aa558d18e"

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: "",
      allResults: [],
      artist: "",
      activeSearch: false,
      topTracks: [],
      option: "artist",
      currentSong: "",
      preview: ""
    };
  }

  handleChange = evt => {
    this.setState({
      inputValue: evt.currentTarget.value
    });
  };

  optionSelected = evt => {
    this.setState({
      option: evt.currentTarget.value,
      inputValue: "",
      allResults: []
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    if (this.state.inputValue === "")
      alert(`Please type in either an artist or song name for results`);
    else {
      if (this.state.option === "artist") {
        let url = `http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${
          this.state.inputValue
        }&api_key=${key}&limit=36&format=json`;
        axios.get(url).then(res => {
          res.data.toptracks
            ? this.setState({
                allResults: res.data.toptracks.track,
                activeSearch: true
              })
            : alert("Please check your spelling");
        });
      } else {
        let url = `http://ws.audioscrobbler.com/2.0/?method=track.search&track=${
          this.state.inputValue
        }&api_key=${key}&limit=36&format=json`;
        axios.get(url).then(res => {
          res.data.results.trackmatches
            ? this.setState({
                allResults: res.data.results.trackmatches.track,
                activeSearch: true
              })
            : alert("Please check your spelling");
        });
      }
    }
  };

  componentDidMount() {
    const url = `http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=${key}&format=json`;
    axios.get(url).then(res => {
      this.setState({
        topTracks: res.data.tracks.track
      });
    });
  }

  playNext = result => {
    this.setState(
      {
        currentSong: result
      },
      () => {
        axios
          .get(
            `https://itunes.apple.com/search?term=${
              this.state.currentSong.name
            }`
          )
          .then(res => {
            this.setState({
              artist: this.state.currentSong.artist.name
                ? this.state.currentSong.artist.name
                : this.state.currentSong.artist
            });
            let filter = res.data.results.filter(song => {
              return (
                song.artistName.toUpperCase() == this.state.artist.toUpperCase()
              );
            });
            this.setState({
              preview: filter[0].previewUrl
            });
          });
      }
    );
  };

  render() {
    const header = this.state.preview ? (
      <h3>Currently Playing: {this.state.currentSong.name}</h3>
    ) : (
      <h3 />
    );
    const topTracks = this.state.topTracks.map((track, i) => (
      <li key={i}>
        {track.name}
        <h5>{track.artist.name}</h5>
      </li>
    ));

    return (
      <div className="input">
        <nav>
          <Link className="title" to="/">
            <h1>
              LAST<span>ify</span>
            </h1>
          </Link>
          <ul>
            <li>
              <a target="blank" href="https://www.last.fm/home">
                Last.fm
              </a>
            </li>
            <li>
              <a target="blank" href="https://www.spotify.com/is/">
                Spotify
              </a>
            </li>
            <li>
              <a target="blank" href="https://www.apple.com/itunes/">
                iTunes
              </a>
            </li>
          </ul>
        </nav>
        <hr />
        {header}
        <div className="header">
          <select class="styled-select" onChange={this.optionSelected}>
            <option value="artist">Artist</option>
            <option value="song">Song</option>
          </select>
          <form onSubmit={this.handleSubmit}>
            <input
              autocomplete="off"
              type="text"
              name="song"
              value={this.state.inputValue}
              placeholder="Search for an artist or song"
              onChange={this.handleChange}
            />
            <button type="submit">ENTER</button>
          </form>
        </div>
        <div id="song-results">
          {this.state.allResults.map((result, i) => (
            <ResultDetails
              result={result}
              index={i}
              option={this.state.option}
              inputValue={this.state.artist}
              playNext={this.playNext}
            />
          ))}
        </div>

        {this.state.allResults.length <= 0 ? (
          <div className="top-tracks">
            <h2>
              TOP TRACKS OF 2019
              <i className="music material-icons">library_music</i>
            </h2>
            <ol className="top-track-details"> {topTracks}</ol>
          </div>
        ) : (
          <div />
        )}
        <Itunes preview={this.state.preview} />
      </div>
    );
  }
}

export default Input;
