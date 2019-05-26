import React, { Component } from "react";
import "./App.css";
import {Route} from 'react-router-dom'
import LandingPage from './Components/LandingPage'
import Homepage from "./Components/Homepage"
import OneResult from './Components/OneResult'


class App extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
      <Route exact path="/" component={LandingPage} />
       <Route exact path="/homepage" component={Homepage} />
       <Route exact path="/target" component={OneResult} />
      </div>
    );
  }
}

export default App;
