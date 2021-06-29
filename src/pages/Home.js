import React, { Component } from "react";

import "./Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
          <body>
          <div className="home-page-div">
            <h4 className="hp-h4">Welcome to the home Page</h4>
          </div>
          <div id="event-list"></div>
          </body>
      </>
    );
  }
}

export default Home;
