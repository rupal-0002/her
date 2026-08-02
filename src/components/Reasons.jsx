import React, { useState } from 'react';
import '../index.css';

const reasonsList = [
  "I love the way your smile lights up my entire day.",
  "I love how safe and comfortable I feel when I'm talking to you.",
  "I love that we can talk for hours and it only feels like minutes.",
  "I love the sound of your voice—it's my favorite sound in the world.",
  "I love how strong and resilient you are, no matter what happens.",
  "I love how you always know exactly how to make me laugh.",
  "I love your kindness and how deeply you care for people.",
  "I love how we can just sit in silence and still feel completely connected.",
  "I love that even though we are miles apart, you feel closer than anyone else.",
  "I love how you support my dreams and always believe in me.",
  "I love the way my heart skips a beat when I see your name on my phone.",
  "I love your sense of humor and all our little inside jokes.",
  "I love how you challenge me to be a better person every single day.",
  "I love the way you look, even when you think you're a mess.",
  "I love that I can be 100% myself around you.",
  "I love how patient you are with me.",
  "I love the future we are building together.",
  "I love the way you love me.",
  "I love that you are my best friend and my soulmate.",
  "I love how you always know exactly what to say when I'm feeling down.",
  "I love your beautiful eyes and how they sparkle when you talk about things you love.",
  "I love the way you say my name.",
  "I love the comfort of your presence, even through a screen.",
  "I love that you never judge me.",
  "I love how passionate you are about your goals.",
  "I love how much you care about the little things.",
  "I love that you always remember the details I tell you.",
  "I love your gentle soul.",
  "I love the feeling of missing you, because it reminds me how much you mean to me.",
  "I love the way you text me good morning and good night.",
  "I love how completely understood I feel with you.",
  "I love how you make ordinary moments feel magical.",
  "I love your laugh.",
  "I love that you accept me for exactly who I am.",
  "I love your warmth and your compassion.",
  "I love how proud I am to call you my girlfriend.",
  "I love how you can brighten a dark day effortlessly.",
  "I love how you make me want to be the best version of myself.",
  "I love the way you see the world.",
  "I love how you forgive easily and love unconditionally.",
  "I love your loyalty.",
  "I love the adorable way you get excited about things.",
  "I love how perfectly our personalities match.",
  "I love that I never have to pretend with you.",
  "I love your intelligence and the way your mind works.",
  "I love the way you listen to me.",
  "I love how much I look forward to our future.",
  "I love your strength.",
  "I love the way you comfort me without even trying.",
  "I love how lucky I feel every single day to have you.",
  "I love your honesty.",
  "I love how you always know how to calm me down.",
  "I love your endless patience.",
  "I love how you trust me.",
  "I love how we can talk about absolutely anything.",
  "I love how my whole world shifted the day I met you.",
  "I love that you are the last thing I think about before I fall asleep.",
  "I love the feeling of knowing you're mine.",
  "I love how beautiful you are, inside and out.",
  "I love how much fun we have, even doing absolutely nothing.",
  "I love the way we resolve our disagreements with respect.",
  "I love your hugs (even the virtual ones!).",
  "I love that I can share my deepest secrets with you.",
  "I love how you inspire me.",
  "I love how fiercely you protect the people you love.",
  "I love the way you make me feel special.",
  "I love how much we've grown together in just 6 months.",
  "I love your weird quirks.",
  "I love how you make me feel loved every single day.",
  "I love how you always find the good in people.",
  "I love your determination.",
  "I love how you understand my silences.",
  "I love how I never get tired of talking to you.",
  "I love that you are my favorite person in the entire world.",
  "I love your empathy.",
  "I love the way you make me feel like I can conquer the world.",
  "I love how you always check up on me.",
  "I love your optimism.",
  "I love how much you value our relationship.",
  "I love that you are my biggest cheerleader.",
  "I love how every love song reminds me of you.",
  "I love the little voice you use sometimes.",
  "I love how we balance each other perfectly.",
  "I love how you make distance feel like just a word.",
  "I love how you make my heart race.",
  "I love your resilience when times get tough.",
  "I love how you make me feel like the luckiest person alive.",
  "I love how we can just be silly together.",
  "I love how you respect my boundaries.",
  "I love your dedication to us.",
  "I love how you bring out the softest parts of me.",
  "I love how your happiness makes me happy.",
  "I love the way you care for the people in your life.",
  "I love your creativity.",
  "I love how I can trust you with my entire heart.",
  "I love that you are my happy place.",
  "I love you today, tomorrow, and forever.",
  "I love you, Maha, more than words can ever describe."
];

const Reasons = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentReason, setCurrentReason] = useState("");

  const handleOpen = () => {
    const randomIndex = Math.floor(Math.random() * reasonsList.length);
    setCurrentReason(reasonsList[randomIndex]);
    setIsOpen(true);
  };

  return (
    <>
      <button className="floating-reason-btn" onClick={handleOpen}>
        💌 Why I Love You
      </button>

      {isOpen && (
        <div className="reason-modal-overlay" onClick={() => setIsOpen(false)}>
          <div className="reason-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setIsOpen(false)}>✖</button>
            <h3>Reason #{reasonsList.indexOf(currentReason) + 1}</h3>
            <p className="reason-text">"{currentReason}"</p>
            <button className="another-one-btn" onClick={handleOpen}>
              Give me another one! 💖
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Reasons;
