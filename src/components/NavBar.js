import React, { Component , useState } from "react";
import { AmplifySignOut } from '@aws-amplify/ui-react';
import Amplify, { Auth } from 'aws-amplify';
import { Redirect } from "react-router-dom";
import "./NavBar.css";
import awsconfig from '../aws-exports';

Amplify.configure(awsconfig);
Auth.configure(awsconfig);


/**
 * The navigation bar at the top of all pages. Takes no props.
 */
class NavBar extends Component {

  constructor(props) {
    super(props);
    this.isLoggedIn = true;
    this.signOut = this.signOut.bind(this);
  }

  async signOut() {
      try {
          await Auth.signOut();
      } catch (error) {
          console.log('error signing out: ', error);
      }
      this.isLoggedIn = false;
      this.render();
  }

  render() {
    if(this.isLoggedIn){
      return (
        <nav className="NavBar-container">
          <div className="NavBar-linkContainer u-inlineBlock">
            <button onClick = {this.signOut} className = "logOut">OUT</button>
          </div>
        </nav>
      );
    }
      return <Redirect to='/' />

  }
}


export default NavBar;
