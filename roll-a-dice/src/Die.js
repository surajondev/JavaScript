import React from 'react';
import './Die.css';

const Die = ({ text }) => {
  return (
    <div className="die">
      <div className="die-value">{text}</div>
    </div>
  );
};

export default Die;