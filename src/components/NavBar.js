import React, { Component } from "react";
import { AmplifySignOut } from '@aws-amplify/ui-react';
import CustomSignout from "./CustomSignout.js";
import Amplify, { Auth } from 'aws-amplify';
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
          <CustomSignout />
        </div>
      </nav>
    );
  }
}

export default NavBar;
