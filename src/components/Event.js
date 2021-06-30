import React, { Component } from "react";

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

  render() {
    return (
      <div className = "single-event">
        <div className = "time" > {this.props.time} </div>
        <div className = "location" > {this.props.location} </div>
        <div className = "video" > {this.props.video} </div>
        <div className = "type" > {this.props.type} </div>
      </div>
    );
  }
}

export default Event;
