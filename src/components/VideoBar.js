import React, { Component } from "react";
import "./VideoBar.css";

/**
 * The navigation bar at the top of all pages. Takes no props.
 */
class VideoBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="video-options">
        <div className="video-bar">
          <button className = "live-feed-ret" onclick = { () => alert("DARIUS WILL PAY")}>"DARIUS WILL PAY"</button>
          <p className = "video-location"></p>
        </div>
        <div className = "return"></div>
      </div>
    );
  }
}

export default VideoBar;
