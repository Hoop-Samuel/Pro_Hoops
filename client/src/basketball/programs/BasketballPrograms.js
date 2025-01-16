import React from 'react';
import './BasketballPrograms.css';

const ProgramCard = ({ title, description, imageSrc, price }) => {
  return (
    <div className="program-card">
      <div className="program-card-image">
        <img src={imageSrc || "/placeholder.svg"} alt={title} />
      </div>
      <div className="program-card-content">
        <h2>{title}</h2>
        <p className="program-card-description">{description}</p>
        <p className="program-card-price">{price}</p>
      </div>
      <div className="program-card-footer">
        <button className="purchase-button">Purchase Access</button>
      </div>
    </div>
  );
};

const BasketballPrograms = () => {
  return (
    <div className="basketball-programs">
      <h1 className="program h1"> From Beginner to Pro: Your Basketball Journey Starts Here</h1> 
      <div className="program-cards">
        <ProgramCard 
          title="Beginner's Bootcamp"
          description="Master the fundamentals and build a strong foundation for your basketball journey."
          imageSrc="https://via.placeholder.com/600x400?text=Beginner's+Bootcamp"
          price="$99"
        />
        <ProgramCard 
          title="Intermediate Intensives"
          description="Refine your skills, enhance team play, and elevate your basketball IQ."
          imageSrc="https://via.placeholder.com/600x400?text=Intermediate+Intensives"
          price="$149"
        />
        <ProgramCard 
          title="Pro Performance"
          description="Advanced training for athletes aiming for college, professional, or elite competition."
          imageSrc="https://via.placeholder.com/600x400?text=Pro+Performance"
          price="$199"
        />
      </div>
    </div>
  );
};

export default BasketballPrograms; 