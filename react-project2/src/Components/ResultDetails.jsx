import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { throwStatement } from "@babel/types";
import OneResult from "./OneResult";

class ResultDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: "",
    };
  }

  setRedirect = evt => {
    this.setState({
      redirect: true,
    });
  };
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/target" />;
    }
  };

  render() {
    return (
      <div key={this.props.index}>
        {this.renderRedirect()}
        <h4>{this.props.result.name}</h4>
        <h5 onClick={this.setRedirect}>{this.props.result.artist.name}</h5>
        <p>
          Listeners: {Number(this.props.result.playcount).toLocaleString("en")}
        </p>
        <a href={this.props.result.url}>last.fm Profile</a>
      </div>
    );
  }
}

export default ResultDetails;

// http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=62c40c9850344e00596c1ce90b5684e7&artist=rihanna&track=umbrella&format=json
