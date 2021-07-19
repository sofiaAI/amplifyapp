import React from 'react'
import {Auth} from "aws-amplify";
import "./CustomSignout.css";


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
        <button onClick={this.signOut} className = "signout"> <img src="../public/logout.png" className = "logout-icon"> </button>
      );
    }
  }

export default CustomSignout;
