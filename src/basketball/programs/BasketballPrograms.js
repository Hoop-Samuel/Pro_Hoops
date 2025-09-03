import React, { useState } from 'react';
import { Dialog, DialogContent, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import './BasketballPrograms.css';

/* Videos and Pictures */
import cardVideo from './videos/cardvideo.mp4';
import picture5 from './pictures/picture5.png';
import picture4 from './pictures/picture4.png';
import picture3 from './pictures/picture3.png';

const ProgramCard = ({ title, description, imageSrc, price, onImageClick, isFirstCard }) => {
  return (
    <div className="program-card">
      <div className="program-card-image" style={{ position: 'relative' }}>
        <img
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          onClick={() => onImageClick(title)}
          style={{
            cursor: 'pointer',
            width: '100%',
            height: isFirstCard ? '250px' : '200px', 
            objectFit: 'contain', 
            objectPosition: isFirstCard ? 'top' : 'center', 
            borderRadius: '8px',
            backgroundColor: '#f8f8f8',
          }}
        />
        {/* Play Icon */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'white',
            fontSize: '40px',
            opacity: 0.8,
            pointerEvents: 'none', 
          }}
        >
          <PlayCircleFilledIcon />
        </div>
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');

  const handleImageClick = (title) => {
    setModalTitle(title);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalTitle('');
  };

  return (
    <div className="basketball-programs">
      <h1 className="program h1"> From Beginner to Pro: Your Basketball Journey Starts Here</h1>
      <div className="program-cards">
        <ProgramCard
          title="Beginner's Bootcamp"
          description="Master the fundamentals and build a strong foundation for your basketball journey."
          imageSrc={picture5}
          price="$99"
          onImageClick={handleImageClick}
          isFirstCard={true} 
        />
        <ProgramCard
          title="Intermediate Intensives"
          description="Refine your skills, enhance team play, and elevate your basketball IQ."
          imageSrc={picture4}
          price="$149"
          onImageClick={handleImageClick}
        />
        <ProgramCard
          title="Pro Performance"
          description="Advanced training for athletes aiming for college, professional, or elite competition."
          imageSrc={picture3}
          price="$199"
          onImageClick={handleImageClick}
        />
      </div>

      <Dialog
        open={isModalOpen}
        onClose={closeModal}
        maxWidth="md"
        fullWidth
        style={{
          padding: 0, 
        }}
      >
        {/* No title here */}
        <IconButton
          aria-label="close"
          onClick={closeModal}
          style={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: '#aaa',
            zIndex: 1, 
          }}
        >
          <CloseIcon />
        </IconButton>

        <DialogContent
          style={{
            padding: 0, 
            textAlign: 'center',
          }}
        >
          <video
            src={cardVideo}
            controls
            autoPlay
            style={{
              width: '100%',
              height: 'auto', 
            }}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BasketballPrograms;
