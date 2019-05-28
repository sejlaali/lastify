import React, { Component } from "react";
import axios from "axios";
import "./Components.css";

class Itunes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      preview: ""
    };
  }

  componentDidMount = () => {
    axios.get(`https://itunes.apple.com/search?term=drake`).then(res =>
      this.setState({
        preview: res.data.results[0].previewUrl
      })
      );
    };
    
    render() {
        // console.log(this.state.preview)
    return (
    <div>
        <video className="media-player" controls autoplay src={this.state.preview} type="audio/m4a">
        </video>
    </div>
    );
  }
}

export default Itunes;
