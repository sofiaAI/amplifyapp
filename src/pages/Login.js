import React, { Component } from "react";
import "./Login.css";
import SignupComponent from "../components/SignupComponent";
import LoginComponent from "../components/LoginComponent";
import { Link } from 'react-router-dom';


class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <SignupComponent />
        <LoginComponent />
        <div>
        <p>Navigate to home</p>
        <ul>
        <li><Link to="/home">React</Link></li>
        </ul>
        </div>
      </div>
    );
  }
}

export default Login;
