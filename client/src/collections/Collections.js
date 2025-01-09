// src/Collections.js

import React from 'react';
import Masonry from 'react-masonry-css'; // Import Masonry for layout
import './Collections.css'; // Import the custom styles

// Dynamically import images from the 'pictures' folder
const importImages = () => {
  const images = [];
  const context = require.context('./pictures', false, /\.(jpg|jpeg|png|gif)$/); // Load image files
  context.keys().forEach((key) => {
    images.push(context(key));
  });
  return images;
};

const Collections = () => {
  const images = importImages();

  const breakpoints = {
    default: 3, // 3 columns by default
    1100: 2, // 2 columns for screens <= 1100px
    700: 1, // 1 column for screens <= 700px
  };

  return (
    <div>
      {/* Header and description above the images */}
      <div className="header-container">
        <h1>Basketball Camps with Coach Ivica</h1>
        <p>
          Join Coach Ivica's basketball camps where young players learn 
          essential skills, teamwork, and discipline in a fun and supportive environment.
          These camps are perfect for kids looking to improve their game and build lifelong memories.
        </p>
      </div>

      {/* Masonry Layout for images */}
      <div className="masonry-container">
        <Masonry
          breakpointCols={breakpoints}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {images.map((image, index) => (
            <div key={index} className="image-item">
              <img src={image} alt={`Camp Image ${index + 1}`} />
              <h3>Practice {index + 1}</h3> {/* Title */}
            </div>
          ))}
        </Masonry>
      </div>
    </div>
  );
};

export default Collections;
