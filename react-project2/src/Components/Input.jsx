import React, {Component} from 'react'
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
let key = process.env.REACT_APP_API_KEY;

class Homepage extends Component {
  constructor(props) {
    super(props);

    this.getData = this.getData.bind(this);
    // this.playSong = this.playSong.bind(this)
  }

  componentDidMount() {
    this.getData();
    // this.playSong()
  }

  getData() {
    const url = `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=drake&api_key=${key}&format=json`;
    axios.get(url).then(res => console.log(res.data));
  }

// playSong() {
//   let url = `http://www.last.fm/api/auth/?api_key=${key}`
//   axios.post(url).then( res=>console.log(res))

// }

  render() {
    return (
      <div>
        <h1>Music</h1>
      </div>
    );
  }
}

export default Homepage;