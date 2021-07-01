import React, { Component } from "react";
import "./Event.css";
import DropDown from "./DropDown.js";

/**
 * Event is a component for displaying the content of a security violation
 *
 * Proptypes
 * @param {string} id_
 * @param {string} time of the event
 * @param {string} location
 * @param {...} video
 * @param {string} type of the violation
 */
class Event extends Component {
  constructor(props) {
    super(props);
    this.showDropDown = this.showDropDown.bind(this);
  }

  componentDidMount(){
    document.getElementById(this.props.id_).addEventListener('click', function (e) {
      var dropdownIcon = e.currentTarget.getElementsByClassName('arrow-icon')[0];
      var dropdown = e.currentTarget.getElementsByClassName('drop-down')[0];
      if(dropdown.style.display === "flex"){
        dropdown.style.display = "none";
      }else{
        dropdown.style.display = "flex";
      }
    });
  }

  render() {
    return (
      <div className = "single-event" id = {this.props.id_} >
        <div className = "standard-view" >
          <div className = "event-info">
            <p className = "type" > {this.props.type} </p>
            <p className = "location" > {this.props.location} </p>
            <p className = "time" > {this.props.time} </p>
          </div>
          <div className = "video" > {this.props.video} </div>
          <p className = "arrow-icon">ar</p>
        </div>
        <div className = "drop-down">
          <div className = "drop-down-button"> Button 1 </div>
          <div className = "drop-down-button"> Button 2 </div>
          <div className = "drop-down-button"> Button 3 </div>
          <div className = "drop-down-button"> Button 4 </div>
        </div>
      </div>
    );
  }
}

export default Event;
