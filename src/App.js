import React, { Component } from "react";
import Login from "./pages/Login.js";
import Home from "./pages/Home.js";
import api from "./api.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
          <Switch>
              <Route exact path="/" component={Login}/>
              <Route exact path="/api" component={api}/>
              <Route exact path="/home" component={Home}/>
          </Switch>
      </Router>
    );
  }
}

export default App;
