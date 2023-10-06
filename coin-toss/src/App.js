import './App.css';
import React, { useState } from 'react';
import Coin from './Coin';

function App() {

  const [showCoin, setShowCoin] = useState(false);
  const [randomNumber, setRandomNumber] = useState(null);
  const [tossResult, setTossResult] = useState(null);

  const handleButtonClick = () => {
    setShowCoin(true);
    headsOrTails();
  };

  const generateRandomNumber = () => {
    const randomNum = Math.random();
    setRandomNumber(randomNum);
  };

  const headsOrTails = () => {
    generateRandomNumber();
    if (randomNumber > 0.5) {
      setTossResult("Heads");
    }
    else {
      setTossResult("Tails");
    }
  }

  return (
    <div className="Coin-toss-application">
      <header className="App-header">
        <p className="Toss-message">Click the button to toss the coin!</p>
        <button className="Toss-button" onClick={handleButtonClick}>Toss</button>
        {showCoin && <Coin text={tossResult} />}
      </header>
    </div>
  );
}

export default App;
