import React, { Component } from "react";
import axios from "axios";
import dotenv from "dotenv";
import ResultDetails from "./ResultDetails";
import "./Components.css";
import OneResult from "./OneResult";

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
      option: 'artist'
    };
  }

  handleChange = evt => {
    this.setState({
      inputValue: evt.currentTarget.value
    });
  };

  optionSelected = (evt) => {
    this.setState ({
        option: evt.currentTarget.value,
        inputValue: "",
        allResults: []
    })
  }

  handleSubmit = evt => {
    evt.preventDefault();
    if (this.state.inputValue === "")
      alert(`Please type in artist name for results`);
    else {
       if (this.state.option === "artist") {
       let url = `http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${this.state.inputValue}&api_key=${key}&limit=26&format=json`    
      axios.get(url).then(res => {
        this.setState({
          allResults: res.data.toptracks.track,
          artist: this.state.inputValue,
          activeSearch: true,
          inputValue: ""
        });
      })} else {
       let url = `http://ws.audioscrobbler.com/2.0/?method=track.search&track=${this.state.inputValue}&api_key=${key}&format=json`
        axios.get(url).then(res => {
           this.setState({
            allResults: res.data.results.trackmatches.track
                   })
        })
    }
  }
}

  componentDidMount() {
    const url = `http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=${key}&format=json`;
    axios.get(url).then(res => {
      this.setState({
        topTracks: res.data.tracks.track
      });
    });
  }

  render() {
    const header = this.state.activeSearch ? (
      <h1>Currently Searching: {this.state.artist.toUpperCase()}</h1>
    ) : (
      <h1>Search Below</h1>
    );
    const topTracks = this.state.topTracks.map(track => (
      <div className="top-tracks">
        <h4>{track.name}</h4>
        <h5>{track.artist.name}</h5>
      </div>
    ));

    return (
      <div>
        <div className="input">
          {header}
          <form onSubmit={this.handleSubmit}>
            <select onChange={this.optionSelected}>
              <option value="artist">Artist</option>
              <option value="song">Song</option>
            </select>
            <input
              type="text"
              name="song"
              value={this.state.inputValue}
              placeholder="Search for an artist or song"
              onChange={this.handleChange}
            />
            <button type="submit">ENTER</button>
          </form>
        </div>
        <div className="song-results">
          {this.state.allResults.map((result, i) => (
            <ResultDetails
              result={result}
              index={i}
              option={this.state.option}
              inputValue={this.state.artist}
            />
          ))}

          <h2>Top Tracks</h2>
          {topTracks}
        </div>
      </div>
    );
  }
}

export default Input;
