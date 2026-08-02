import React, { useState } from 'react';
import '../index.css';

const Gallery = () => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [pin, setPin] = useState("");
  const [error, setError] = useState(false);
  
  // Automatically import all .png images from the pics folder
  const imageModules = import.meta.glob('../../pics/*.png', { as: 'url', eager: true });
  const images = Object.values(imageModules);

  const handlePinClick = (num) => {
    if (pin.length < 4) {
      const newPin = pin + num;
      setPin(newPin);
      setError(false);
      
      if (newPin.length === 4) {
        if (newPin === "0002") {
          setIsUnlocked(true);
        } else {
          setError(true);
          setTimeout(() => setPin(""), 500); // Clear after error
        }
      }
    }
  };

  const handleDelete = () => {
    setPin(pin.slice(0, -1));
    setError(false);
  };

  if (!isUnlocked) {
    return (
      <div className="content-section" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
        <div className={`pin-container ${error ? 'shake' : ''}`}>
          <h2>Enter PIN to Unlock Memories</h2>
          
          <div className="pin-display">
            {[...Array(4)].map((_, i) => (
              <div key={i} className={`pin-dot ${i < pin.length ? 'filled' : ''}`}></div>
            ))}
          </div>
          
          <div className="numpad">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
              <button key={num} className="num-btn" onClick={() => handlePinClick(num.toString())}>{num}</button>
            ))}
            <button className="num-btn clear-btn" onClick={() => setPin("")}>C</button>
            <button className="num-btn" onClick={() => handlePinClick("0")}>0</button>
            <button className="num-btn del-btn" onClick={handleDelete}>⌫</button>
          </div>
          {error && <p className="pin-error">Incorrect PIN. Try again.</p>}
        </div>
      </div>
    );
  }

  return (
    <div className="content-section">
      <div className="gallery-grid">
        {images.length > 0 ? (
          images.map((src, index) => (
            <div key={index} className="gallery-item">
              <img src={src} alt={`Maha memory ${index + 1}`} className="gallery-image" loading="lazy" />
            </div>
          ))
        ) : (
          <div style={{ textAlign: 'center', gridColumn: '1 / -1', color: 'var(--primary)' }}>
            <p>No images found in the pics folder yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
