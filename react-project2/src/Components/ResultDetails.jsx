import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import "./Components.css";
import OneResult from "./OneResult";

class ResultDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: ""
    }
}

  setRedirect = evt => {
    this.setState({
        redirect: true
    });
};

  renderRedirect = () => {
    if (this.state.redirect) {
        return <Redirect to={{
           pathname: "/target",
           state: {inputVal: this.props.result},
           state: {songInputValue: this.props.result.artist}
        }}/>;
    }
};

  render() {
      const artistOrSong = this.props.option === "artist" ? <div> <h5 onClick={this.setRedirect}>{this.props.result.artist.name}</h5>  <p>
      Playcount: {Number(this.props.result.playcount).toLocaleString("en")}
    </p> </div>  :  <h5 onClick={this.setRedirect}>{this.props.result.artist}</h5>

    return (
      <div className="song-parts" key={this.props.index}>
        {this.renderRedirect()}
        <h4>{this.props.result.name}</h4>
        {artistOrSong}
        <a target="_blank" href={this.props.result.url}>Click for more info</a>
      </div>
    );
  }
}

export default ResultDetails;
