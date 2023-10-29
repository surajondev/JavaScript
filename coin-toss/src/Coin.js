import React from 'react';
import './Coin.css';

const Coin = ({ text }) => {
  return (
    <div className="coin">
      <div className="toss-value">{text}</div>
    </div>
  );
};

export default Coin;
