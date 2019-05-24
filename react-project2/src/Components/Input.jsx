import React, { Component } from "react";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
let key = process.env.REACT_APP_API_KEY;

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: "",
      allResults: []
    };
  }

  handleChange = evt => {
    this.setState({
      inputValue: evt.currentTarget.value
    });
  };

    handleSubmit = (evt) => {
        evt.preventDefault()
      const url = `http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${this.state.inputValue}&api_key=${key}&format=json&limit=15`;
      axios.get(url).then(res => 
        this.setState ({
            allResults: res.data.toptracks.track,
            inputValue: ""
        })
        // console.log(res.data.toptracks.track[0].image[0])
        )
    };
    
  render() {

    return (
      <div>
        <div className="input">
          <h1>Title of App</h1>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="song"
              value={this.state.inputValue}
              placeholder="Search for a song or artist"
              onChange={this.handleChange}
            />
            <button type="submit">ENTER</button>
          </form>
        </div>
        <div className="song-results">
            <h2>Results</h2>
      {this.state.allResults.map((result, index) => 
              <div key={index}>
                  <h4>{result.name}</h4>
                <p>Listeners: {Number(result.listeners).toLocaleString('en')}</p>
              </div>
        )}
          <div />
        </div>
      </div>
    );
  }
}

export default Input;
