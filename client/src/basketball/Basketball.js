import React from "react";
import "./Basketball.css";
import backgroundVideo from "./videobackground.mp4"; // Adjust path to your video

const Basketball = () => {
  return (
    <div className="basketball-container">
      <video
        className="basketball-video"
        src={backgroundVideo}
        autoPlay
        loop
        muted
      ></video>
      <div className="basketball-overlay">
        <h1 className="basketball-title">Welcome to Basketball Programs</h1>
        <button className="basketball-button">Explore Programs</button>
      </div>
    </div>
  );
};

export default Basketball;
