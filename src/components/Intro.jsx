import React, { useState } from 'react';
import '../index.css';

const Intro = ({ onEnter }) => {
  const [isFading, setIsFading] = useState(false);

  const handleEnter = () => {
    setIsFading(true);
    // Wait for the fade-out animation to complete before removing the component
    setTimeout(() => {
      onEnter();
    }, 1000);
  };

  return (
    <div className={`intro-container ${isFading ? 'fade-out' : ''}`}>
      <div className="intro-content">
        <div className="pulsing-heart">💖</div>
        <h1 className="intro-text">A special surprise for my beautiful Maha...</h1>
        <button className="intro-btn" onClick={handleEnter}>
          Click to Open
        </button>
      </div>
    </div>
  );
};

export default Intro;
