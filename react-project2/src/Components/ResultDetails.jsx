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
           state: {inputValue: this.props.inputValue}
        }}/>;
    }
};

  render() {
    return (
      <div className="song-parts" key={this.props.index}>
        {this.renderRedirect()}
        <h4>{this.props.result.name}</h4>
        <h5 onClick={this.setRedirect}>{this.props.result.artist.name}</h5>
        <p>
          Playcount: {Number(this.props.result.playcount).toLocaleString("en")}
        </p>
        <a href={this.props.result.url}>Click for more info</a>
 {/* <OneResult inputValue={this.props.inputValue}/> */}

      </div>
    );
  }
}

export default ResultDetails;

// http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=62c40c9850344e00596c1ce90b5684e7&artist=rihanna&track=umbrella&format=json
