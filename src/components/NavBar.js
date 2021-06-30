import React, { Component } from "react";
import { AmplifySignOut } from '@aws-amplify/ui-react';
import Amplify, { Auth } from 'aws-amplify';
import "./NavBar.css";
import awsconfig from '../aws-exports';

Amplify.configure(awsconfig);
Auth.configure(awsconfig);

async function signOut() {
    try {
        await Auth.signOut();
    } catch (error) {
        console.log('error signing out: ', error);
    }
}

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
          <button onClick = {signOut}>OUT</button>
        </div>
      </nav>
    );
  }
}

export default NavBar;
