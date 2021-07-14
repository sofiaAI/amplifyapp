import React, { Component } from "react";
import "./VideoBar.css";

/**
 * The navigation bar at the top of all pages. Takes no props.
 */
class VideoBar extends Component {
  constructor(props) {
    super(props);
    this.resetBar = this.resetBar.bind(this);
  }

  resetBar(){
    var videoBar = document.getElementsByClassName('video-bar')[0];
    var buttonContainer = document.getElementsByClassName('return')[0];
    var button = buttonContainer.getElementsByClassName('live-feed-ret')[0];
    
    videoBar.classList.remove('video-bar-slide-anim');
    buttonContainer.classList.remove('button-slide-anim');
    
    var liveStream = document.getElementsByClassName('live-stream')[0];
    var video = document.getElementsByClassName('video-play')[0];
    
    //replay clip in video box
    liveStream.style.display = "block";
    video.style.display = "none";     
  }

  render() {
    return (
      <div className="video-options">
        <div className = "return">
        	<button className = "live-feed-ret" onClick = {this.resetBar}> ❮ </button>
        </div>
        <div className="video-bar">
          <p className = "video-location"></p>
        </div>
      </div>
    );
  }
}

export default VideoBar;
