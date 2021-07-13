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
  }

  componentDidMount(){
    document.getElementById(this.props.id_).getElementsByClassName('standard-view')[0].addEventListener('click',
    function (e) {
      var dropdownIcon = e.currentTarget.parentNode.getElementsByClassName('arrow-icon')[0];
      var dropdown = e.currentTarget.parentNode.getElementsByClassName('drop-down')[0];
      if(dropdown.style.display === "flex"){
        dropdownIcon.innerHTML = "▲";
        e.currentTarget.style.backgroundColor = "rgb(16, 44, 71)";
        e.currentTarget.getElementsByClassName("event-info")[0].getElementsByClassName("type")[0].style.color = "rgb(73, 123, 204)";
        dropdown.style.display = "none";
        dropdown.classList.remove('drop-down-menu-anim');
      }else{
        dropdownIcon.innerHTML = "▼";
        e.currentTarget.style.backgroundColor = "rgb(0, 99, 145)";
        e.currentTarget.getElementsByClassName("event-info")[0].getElementsByClassName("type")[0].style.color = "white";
        void dropdown.offsetWidth;
        dropdown.classList.add('drop-down-menu-anim');
        dropdown.style.display = "flex";
      }
    });
    this.getScreenshot();
  }

  playVideo(){
    var container = document.getElementsByClassName('video-container')[0]
    container.getElementsByClassName('video-play')[0].setAttribute("src", this.props.video);
    container.style.display = "block";
  }

  /**
   * Creates a screenshot from the video in the event box
   */
  getScreenshot() {
      var vid = document.createElement('video');
      vid.src = this.props.video;
	  vid.setAttribute('height', '300');
      vid.setAttribute('width', '700');
      
      const canvas = document.createElement("canvas");
      canvas.width = vid.width;
      canvas.height = vid.height;
      canvas.getContext('2d').drawImage(vid, 0, 0, canvas.width, canvas.height);

      const image = new Image();
      console.log(canvas.toDataURL());
      image.src = canvas.toDataURL("image/jpeg");
      document.getElementById(this.props.id_).getElementsByClassName('video')[0].appendChild(image);


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
