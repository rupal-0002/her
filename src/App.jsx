import React, { useState, useEffect } from 'react';
import Gallery from './components/Gallery';
import About from './components/About';
import Intro from './components/Intro';
import Dream from './components/Dream';
import Reasons from './components/Reasons';
import Timer from './components/Timer';
import './index.css';

function App() {
  const [activeTab, setActiveTab] = useState('gallery');
  const [hearts, setHearts] = useState([]);
  const [showIntro, setShowIntro] = useState(true);

  // Generate random hearts for the background
  useEffect(() => {
    const newHearts = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}vw`,
      animationDuration: `${Math.random() * 5 + 5}s`,
      animationDelay: `${Math.random() * 5}s`,
    }));
    setHearts(newHearts);
  }, []);

  if (showIntro) {
    return <Intro onEnter={() => setShowIntro(false)} />;
  }

  return (
    <>
      <div className="floating-hearts">
        {hearts.map(heart => (
          <div 
            key={heart.id} 
            className="heart"
            style={{ 
              left: heart.left, 
              animationDuration: heart.animationDuration,
              animationDelay: heart.animationDelay
            }}
          >
            ❤
          </div>
        ))}
      </div>

      <header className="hero">
        <h1 className="title">MAHA</h1>
        <p className="subtitle">My favorite person in the whole world. Here is a little something for you.</p>
        
        <Timer />
        
        <div className="nav-tabs">
          <button 
            className={`tab-btn ${activeTab === 'gallery' ? 'active' : ''}`}
            onClick={() => setActiveTab('gallery')}
          >
            MY PRINCESS
          </button>
          <button 
            className={`tab-btn ${activeTab === 'about' ? 'active' : ''}`}
            onClick={() => setActiveTab('about')}
          >
            Letters to You
          </button>
          <button 
            className={`tab-btn ${activeTab === 'dream' ? 'active' : ''}`}
            onClick={() => setActiveTab('dream')}
          >
            Dream
          </button>
        </div>
      </header>

      <main>
        {activeTab === 'gallery' && <Gallery />}
        {activeTab === 'about' && <About />}
        {activeTab === 'dream' && <Dream />}
        <Reasons />
      </main>
    </>
  );
}

export default App;
