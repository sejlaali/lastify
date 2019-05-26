import React, { Component } from "react";
import axios from "axios";
import dotenv from "dotenv";
import ResultDetails from './ResultDetails'
import OneResult from "./OneResult"

dotenv.config();
let key = process.env.REACT_APP_API_KEY;

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: "",
      allResults: [],
      activeSearch: false,
      artist: ""
    }
  }

  handleChange = evt => {
    this.setState({
      inputValue: evt.currentTarget.value
    });
  };

 handleSubmit = (evt) => {
    evt.preventDefault()
    // const url = `http://ws.audioscrobbler.com/2.0/?method=track.search&track=${this.state.inputValue}&api_key=${key}&format=json`
    const url = `http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${this.state.inputValue}&api_key=${key}&limit=25&format=json`
    axios.get(url).then((res) => {
        this.setState ({
            allResults: res.data.toptracks.track,
            artist: this.state.inputValue,
            activeSearch: true,
            inputValue: ""
        })
    })
}

    render() {
        const header = this.state.activeSearch ? <h1>Currently Searching: {(this.state.artist).toUpperCase()}</h1> : <h1>Search Below</h1> 
        return (
            <div>
        <div className="input">
          {header}
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="song"
              value={this.state.inputValue}
              placeholder="Search for an artist"
              onChange={this.handleChange}
              />
            <button type="submit">ENTER</button>
          </form>
        </div>
        <div>
      {this.state.allResults.map((result, i) => 
            <div className="song-results">
            <ResultDetails result={result} index={i} />
            </div>)}
        </div>
      </div>
    );
  }
}

export default Input;
