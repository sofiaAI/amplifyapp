import React from 'react'
import {Auth} from "aws-amplify";
import "./CustomSignout.css";
import image from '../public/logout2.png'

class CustomSignout extends React.Component {
    constructor(props) {
      super(props);
    }

   	async signOut(e){
     	e.preventDefault();
     	await Auth.signOut();
     	window.location.reload();
   	}

    render() {
      return (
        <div onClick={this.signOut} className = "signout">
        	<img src = {image} className = "logout-icon"/>
        </div>
      );
    }
  }

export default CustomSignout;
