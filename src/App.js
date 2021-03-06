import React, { Component } from "react";
import Home from "./pages/Home.js";
import Api from "./pages/api.js";
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
              <Route exact path="/" component={Api}/>
              <Route exact path="/home" component={Home}/>
          </Switch>
      </Router>
    );
  }
}

export default App;
