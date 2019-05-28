import React, { Component } from "react";
import "./App.css";
import {Route} from 'react-router-dom'
import LandingPage from './Components/LandingPage'
import OneResult from './Components/OneResult'
import Input from "./Components/Input"


class App extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
      <Route exact path="/" component={LandingPage} />
       <Route exact path="/homepage" component={Input} />
       <Route exact path="/target" component={OneResult} />
      </div>
    );
  }
}

export default App;
