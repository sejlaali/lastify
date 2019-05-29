import React, { Component } from "react";
import axios from "axios";
import "./Components.css";

class Itunes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      preview: "",
      img: ""
    };
  }

  componentDidMount = () => {
    axios.get(`https://itunes.apple.com/search?term=in+my+feelings`).then(res =>
    // console.log(res.data.results)
      this.setState({
        preview: res.data.results[0].previewUrl,
        img: res.data.results[0].artworkUrl60
      })
      );
    };
    
    render() {
    return (
    <div>
        <video className="media-player" controls autoplay src={this.state.preview} type="audio/m4a">
        </video>
        {/* <img src={this.state.img} /> */}
    </div>
    );
  }
}

export default Itunes;
