import React from 'react';
import '../index.css';

const About = () => {
  const letters = [
    {
      id: 1,
      text: [
        "To my beautiful MAHA,",
        "Happy 6 Months, my love! Half a year of calling you mine, and it still feels like a dream. Even though there are miles between us, you have never felt closer to my heart. Every day with you is a blessing, and I am so incredibly grateful for us."
      ]
    },
    {
      id: 2,
      text: [
        "They say long distance is hard, but you make it so incredibly worth it. The late-night calls, the endless texts, the way my screen lights up with your name—you are my favorite notification. Distance means so little when you mean so much to me."
      ]
    },
    {
      id: 3,
      text: [
        "Six months down, and a lifetime to go. Sometimes I catch myself just smiling at my phone, thinking about your laugh and your beautiful face. You bring so much joy into my life, even from far away. You are the brightest part of my every day."
      ]
    },
    {
      id: 4,
      text: [
        "Do you know what my favorite part of the day is? It's hearing your voice. Whenever you tell me about your day, or even when we're just sitting on a call in silence, I feel so completely at home. You are my safe place."
      ]
    },
    {
      id: 5,
      text: [
        "I count down the days until I can finally hold you in my arms. Until then, I will hold you in my heart. Every passing minute is just one minute closer to the moment I get to see you. I can't wait to close this distance."
      ]
    },
    {
      id: 6,
      text: [
        "You are so strong, so beautiful, and so incredibly kind. I admire you more than words can say. Even though we've been together for six months, I feel like I discover a new reason to fall in love with you every single day."
      ]
    },
    {
      id: 7,
      text: [
        "I know it's not always easy being apart, missing each other when we wish we were side by side. But our love is stronger than any distance. Thank you for your patience, your trust, and for loving me the way you do."
      ]
    },
    {
      id: 8,
      text: [
        "I fall asleep thinking of you, and you're my first thought when I wake up. Even when we are miles apart, you are the only one on my mind. I am so lucky to have a girlfriend as amazing as you, Maha."
      ]
    },
    {
      id: 9,
      text: [
        "I am looking forward to all the things we haven't done yet. The dates we haven't gone on, the places we haven't visited, and all the memories we are going to make once we are finally together. The future is so bright with you."
      ]
    },
    {
      id: 10,
      text: [
        "These six months have been the best time of my life, and this is only the beginning of our story. I promise to keep loving you, cherishing you, and fighting for us, no matter how many miles separate us."
      ]
    },
    {
      id: 11,
      text: [
        "\"You are the finest, loveliest, tenderest, and most beautiful person I have ever known—and even that is an understatement.\"",
        "I love you, Maha. Always and forever."
      ]
    }
  ];

  return (
    <div className="content-section">
      <div className="about-container">
        {letters.map((letter) => (
          <div key={letter.id} className="love-letter">
            {letter.text.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
