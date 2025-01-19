import React from "react";
import Lottie from "react-lottie";
import * as animationData from "./animation.json"; // Replace with your Lottie JSON file

const LottieLoader = () => {
  const defaultOptions = {
    loop: true,  // Loop the animation
    autoplay: true,  // Auto-play the animation
    animationData: animationData, // Lottie JSON file
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice", // Adjust the aspect ratio if needed
    },
  };

  return (
    <div
      style={{
        position: "absolute", // Cover the screen
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#e5e5e5", // Set the background color
        zIndex: 9999, // Make sure the loader is above everything else
      }}
    >
      <Lottie options={defaultOptions} height={200} width={200} />
    </div>
  );
};

export default LottieLoader;
