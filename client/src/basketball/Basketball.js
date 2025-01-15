import React from "react";
import "./Basketball.css";
import backgroundVideo from "./videobackground.mp4"; 

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
        <h1 className="basketball-title">One Court, All Levels, Endless Possibilities</h1>
        <p className="basketball-description">
          Whether you’re a beginner learning to dribble or a pro perfecting your
          strategy, our programs are designed to grow with you. Join our
          community and take your game to the next level.
        </p>
        <button className="basketball-button">Explore Programs</button>
      </div>
    </div>
  );
};

export default Basketball;
