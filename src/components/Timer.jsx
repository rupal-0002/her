import React, { useState, useEffect } from 'react';
import '../index.css';

const Timer = () => {
  const [timeTogether, setTimeTogether] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    // Start date: January 28, 2026
    const startDate = new Date('2026-01-28T00:00:00');

    const updateTimer = () => {
      const currentDate = new Date();
      setNow(currentDate);
      const diff = currentDate - startDate;

      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / 1000 / 60) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        setTimeTogether({ days, hours, minutes, seconds });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (date, timeZone) => {
    return new Intl.DateTimeFormat('en-US', {
      timeZone,
      hour: 'numeric',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    }).format(date);
  };

  return (
    <div className="timer-container">
      <h3 className="timer-title">Time We've Been Together</h3>
      <div className="timer-grid">
        <div className="timer-box">
          <span className="timer-number">{timeTogether.days}</span>
          <span className="timer-label">Days</span>
        </div>
        <div className="timer-box">
          <span className="timer-number">{timeTogether.hours}</span>
          <span className="timer-label">Hours</span>
        </div>
        <div className="timer-box">
          <span className="timer-number">{timeTogether.minutes}</span>
          <span className="timer-label">Mins</span>
        </div>
        <div className="timer-box">
          <span className="timer-number">{timeTogether.seconds}</span>
          <span className="timer-label">Secs</span>
        </div>
      </div>
      
      <div className="world-clocks">
        <div className="clock-box">
          <span className="clock-label">My Time (India)</span>
          <span className="clock-time">{formatTime(now, 'Asia/Kolkata')}</span>
        </div>
        <div className="clock-box">
          <span className="clock-label">Her Time (UAE)</span>
          <span className="clock-time">{formatTime(now, 'Asia/Dubai')}</span>
        </div>
      </div>
    </div>
  );
};

export default Timer;
