import React, { Component } from "react";
import "./Event.css";
import DropDown from "./DropDown.js";
/**
 * Event is a component for displaying the content of a security violation
 *
 * Proptypes
 * @param {string} time of the event
 * @param {string} location
 * @param {...} video
 * @param {string} type of the violation
 */
class Event extends Component {
  constructor(props) {
    super(props);
  }

  showAlert() {
    alert("I'm an alert");
  }

  render() {
    return (
      <div className = "single-event" onClick ={this.showAlert}>
        <div className = "standard-view">
          <div className = "event-info">
            <p className = "type" > {this.props.type} </p>
            <p className = "location" > {this.props.location} </p>
            <p className = "time" > {this.props.time} </p>
          </div>
          <div className = "video" > {this.props.video} </div>
          <p className = "arrow-icon">ar</p>
        </div>
        <DropDown/>
      </div>
    );
  }
}

export default Event;
