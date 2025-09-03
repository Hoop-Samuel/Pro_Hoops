import React, { useState, useEffect } from 'react';
import Masonry from 'react-masonry-css';
import './Collections.css'; 

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
  const [loadedImagesCount, setLoadedImagesCount] = useState(0); // Count of loaded images
  const images = importImages();

  const breakpoints = {
    default: 3, // 3 columns by default
    1100: 2, // 2 columns for screens <= 1100px
    700: 2, // 2 column for screens <= 700px
  };

  const handleImageLoad = () => {
    setLoadedImagesCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    // Placeholder if additional logic is needed when all images are loaded
  }, [loadedImagesCount, images.length]);

  return (
    <div className="collections-container">
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
              <img 
                src={image} 
                alt={`Camp ${index + 1}`} 
                onLoad={handleImageLoad} // Trigger handleImageLoad when each image is loaded
                style={{ width: '100%' }} 
              />
            </div>
          ))}
        </Masonry>
      </div>
    </div>
  );
};

export default Collections;
