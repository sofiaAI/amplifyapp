import React, { Component } from "react";
import { AmplifySignOut } from '@aws-amplify/ui-react';
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
      <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
      <nav className="NavBar-container">
        <div className="NavBar-linkContainer u-inlineBlock">
          <AmplifySignOut><i class="fa fa-sign-out"></i></AmplifySignOut>
        </div>
      </nav>
      </>
    );
  }
}

export default NavBar;
