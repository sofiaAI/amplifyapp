import React, { Component } from "react";
import "./Event.css";
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
    super(props);d
  }

  render() {
    return (
      <div className = "single-event">
        <div classname = "event-info">
        <p className = "type" > {this.props.type} </p>
        <p className = "location" > {this.props.location} </p>
        <p className = "time" > {this.props.time} </p>
        </div>
        <div className = "video" > {this.props.video} </div>
      </div>
    );
  }
}

export default Event;
