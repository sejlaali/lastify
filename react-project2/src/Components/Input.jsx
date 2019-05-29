import React, { Component } from "react";
import axios from "axios";
import dotenv from "dotenv";
import ResultDetails from "./ResultDetails";
import "./Components.css";
import Itunes from "./Itunes";

dotenv.config();
let key = process.env.REACT_APP_API_KEY;

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
          this.setState({
            allResults: res.data.toptracks.track,
            artist: this.state.inputValue,
            activeSearch: true
          });
        });
      } else {
        let url = `http://ws.audioscrobbler.com/2.0/?method=track.search&track=${
          this.state.inputValue
        }&api_key=${key}&limit=36&format=json`;
        axios.get(url).then(res => {
          this.setState({
            allResults: res.data.results.trackmatches.track,
            activeSearch: true
          });
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


  playNext = (result) => {

    this.setState({
      currentSong: result.name
    }, () => {
        axios
        .get(`https://itunes.apple.com/search?term=${this.state.currentSong}`)
        .then(res =>
            //    console.log(res)
        this.setState({
            preview: res.data.results[0].previewUrl
    })
        )
})

  }

  render() {
    const header = this.state.activeSearch ? (
      <h3>Currently Searching: {this.state.inputValue.toUpperCase()}</h3>
    ) : (
      <h3>Search Below</h3>
    );
    const topTracks = this.state.topTracks.map((track, i) => (
        <li key={i}>
          {track.name} 
          <h5>{track.artist.name}</h5>
        </li>
    ));

    return (
      <div className="input">
          <h1>LAST<span>ify</span></h1>
          <hr />
        <div>
          {header}
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
        <div className="song-results-parent">
          <div className="song-results">
            {this.state.allResults.map((result, i) => (
              <ResultDetails
                result={result}
                index={i}
                option={this.state.option}
                inputValue={this.state.artist}
                playNext={this.playNext}
              />
            ))}

            {this.state.allResults.length <= 0 ? (
              <div className="top-tracks">
                <h2>TOP TRACKS OF 2019</h2> 
             <ol className="top-track-details"> {topTracks}</ol> 
              </div>
            ) : (
              <div />
            )}
          </div>
        </div>
        <Itunes preview={this.state.preview} />
      </div>
    );
  }
}

export default Input;
