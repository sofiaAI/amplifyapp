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
    this.playVideo = this.playVideo.bind(this);
    this.getScreenshot = this.getScreenshot.bind(this);
    this.toggleDropDown = this.toggleDropDown.bind(this);
  }

  componentDidMount(){
  	//prepare elements with event listeners
    document.getElementById(this.props.id_).getElementsByClassName('standard-view')[0].addEventListener('click', this.toggleDropDown);
    //get thumbnails for events
    this.getScreenshot();
  }
  
  toggleDropDown(e){
  	var dropdownIcon = e.currentTarget.parentNode.getElementsByClassName('arrow-icon')[0];
    var dropdown = e.currentTarget.parentNode.getElementsByClassName('drop-down')[0];
    if(dropdown.style.display === "flex"){
      dropdownIcon.innerHTML = "▲";
      e.currentTarget.style.backgroundColor = "rgb(16, 44, 71)";
      e.currentTarget.getElementsByClassName("event-info")[0].getElementsByClassName("type")[0].style.color = "rgb(73, 123, 204)";
      dropdown.style.display = "none";
	  dropdown.classList.remove('drop-down-menu-anim');

    }else{
      var allEvents = document.getElementsByClassName('single-event');
      for(var event in allEvents){
      	var dd = event.getElementsByClassName("drop-down")[0];
      	event.getElementsByClassName('arrow-icon')[0].innerHTML = "▲";
        event.getElementsByClassName('standard-view')[0].style.backgroundColor = "rgb(16, 44, 71)";
        event.getElementsByClassName("event-info")[0].getElementsByClassName("type")[0].style.color = "rgb(73, 123, 204)";
      	dd.style.display = "none";
	  	dd.classList.remove('drop-down-menu-anim');
      }
      dropdownIcon.innerHTML = "▼";
      e.currentTarget.style.backgroundColor = "rgb(0, 99, 145)";
      e.currentTarget.getElementsByClassName("event-info")[0].getElementsByClassName("type")[0].style.color = "white";
      void dropdown.offsetWidth;
      dropdown.classList.add('drop-down-menu-anim');
      dropdown.style.display = "flex";
    }
  }
  

  playVideo(){
    var container = document.getElementsByClassName('video-container')[0];
    var button = document.getElementsByClassName('live-feed-ret')[0];
    var liveStream = container.getElementsByClassName('live-stream')[0];
    var video = container.getElementsByClassName('video-play')[0];
    
    //replay clip in video box
    liveStream.style.display = "none";
    button.style.display = "block";
    
    video.setAttribute("src", this.props.video);
    video.style.display = "block";
    
    //slide video bar to the right
    var videoBar = document.getElementsByClassName('video-bar')[0];
    void videoBar.offsetWidth;
    videoBar.classList.add('video-bar-slide-anim');
    
    //slide in button
    var returnButton = document.getElementsByClassName('return')[0];
    void returnButton.offsetWidth;
    returnButton.classList.add('button-slide-anim');     
    
    document.getElementsByClassName('video-location')[0].innerHTML = "Recorded Event: Camera - " + this.props.location;
    
  }

  /**
   * Creates a screenshot from the video in the event box
   */
  getScreenshot() {
      var vid = document.createElement('video');
      vid.setAttribute("src", this.props.video);
	  vid.setAttribute('height', 'auto');
      vid.setAttribute('width', '110');
      vid.setAttribute("className", "video-thumbnail");
      
      document.getElementById(this.props.id_).getElementsByClassName('video')[0].appendChild(vid);
  }

  render() {
    return (
      <div  id = {this.props.id_}>
        <div className = "single-event">
            <div className = "standard-view" >
                <div className = "event-info">
                    <p className = "type" > {this.props.type} </p>
                    <p className = "location" > {this.props.location} </p>
                    <p className = "time" > {this.props.time} </p>
                </div>
                <div className = "video"></div>
                <div className = "arrow-icon"> ▲ </div>
            </div>
          <div className = "drop-down">
              <button className = "drop-down-button" onClick = {this.playVideo}> Replay Clip </button>
              <button className = "drop-down-button"> Button 2 </button>
              <button className = "drop-down-button"> Button 3 </button>
              <button className = "drop-down-button"> Button 4 </button>
          </div>
        </div>
      </div>

    );
  }
}

export default Event;
