import React, { Component }, { useState } from "react";
import { AmplifySignOut } from '@aws-amplify/ui-react';
import Amplify, { Auth } from 'aws-amplify';
import { Redirect } from "react-router-dom";
import "./NavBar.css";
import awsconfig from '../aws-exports';

Amplify.configure(awsconfig);
Auth.configure(awsconfig);

async function signOut() {
    try {
        await Auth.signOut();
    } catch (error) {
        console.log('error signing out: ', error);
        setIsLoggedIn(false)
    }
}

/**
 * The navigation bar at the top of all pages. Takes no props.
 */
class NavBar extends Component {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  constructor(props) {
    super(props);
  }
  if(isLoggedIn){
    render() {
      return (
        <nav className="NavBar-container">
          <div className="NavBar-linkContainer u-inlineBlock">
            <button onClick = {signOut} className = "logOut">OUT</button>
          </div>
        </nav>
      );
    }
  }
  return <Redirect to='/' />
}

export default NavBar;
