import React, { useState } from 'react';
import '../index.css';

const Dream = () => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [pin, setPin] = useState("");
  const [error, setError] = useState(false);

  // Automatically import all .png and .jpg images from the dream_pics folder
  // If the user drops their uploaded pics here, they'll show up
  const imageModules = import.meta.glob('../../dream_pics/*.{png,jpg,jpeg}', { as: 'url', eager: true });
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
          <h2>Enter PIN to Unlock Dream</h2>
          
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
      <div className="about-container" style={{ textAlign: 'center' }}>
        <h2 style={{ color: 'var(--primary)', marginBottom: '2rem', fontSize: '2rem' }}>Our Dreams Together</h2>
        <div className="gallery-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          {images.length > 0 ? (
            images.map((src, index) => (
              <div key={index} className="gallery-item" style={{ aspectRatio: 'auto' }}>
                <img src={src} alt={`Dream memory ${index + 1}`} className="gallery-image" loading="lazy" style={{ borderRadius: '15px' }} />
              </div>
            ))
          ) : (
            <div style={{ gridColumn: '1 / -1', color: 'var(--text)', padding: '2rem', background: 'var(--glass)', borderRadius: '15px' }}>
              <p>Please place the two pictures you just uploaded into a folder named <strong>dream_pics</strong> in the main project folder.</p>
              <p>They will automatically appear here!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dream;
