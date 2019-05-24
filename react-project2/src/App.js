import React, { Component } from "react";
import "./App.css";
import {Route} from 'react-router-dom'
import LandingPage from './Components/LandingPage'
import Homepage from "./Components/Homepage"

class App extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
      <Route exact path="/" component={LandingPage} />
       <Route exact path="/homepage" component={Homepage} />
      </div>
    );
  }
}

export default App;
