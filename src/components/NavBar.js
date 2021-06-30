import React, { Component } from "react";
import { AmplifySignOut } from '@aws-amplify/ui-react';

import "./NavBar.css";

/**
 * The navigation bar at the top of all pages. Takes no props.
 */
class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="NavBar-container">
        <div className="NavBar-linkContainer u-inlineBlock">
          <AmplifySignOut />
        </div>
      </nav>
    );
  }
}

export default NavBar;
