import './App.css';
import React, { useState } from 'react';
import Die from './Die';

function App() {

  const [showDie, setShowDie] = useState(false);
  const [randomNumber, setRandomNumber] = useState(null);
  const [dieValue, setDieValue] = useState(null);

  const handleButtonClick = () => {
    setShowDie(true);
    rollDie();
  };

  const generateRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 10) % 6;
    setRandomNumber(randomNumber);
    console.log(randomNumber)
  };

  const rollDie = () => {
    generateRandomNumber();
    if (randomNumber === 0) {
      setDieValue("1");
    }
    else if (randomNumber === 1) {
      setDieValue("2");
    }
    else if (randomNumber === 2) {
      setDieValue("3");
    }
    else if (randomNumber === 3) {
      setDieValue("4");
    }
    else if (randomNumber === 4) {
      setDieValue("5");
    }
    else {
      setDieValue("6");
    }
  }

  return (
    <div className="Die-roll-application">
      <header className="App-header">
        <p className="Die-message">Click the button to roll the die!</p>
        <button className="Roll-button" onClick={handleButtonClick}>Roll</button>
        {showDie && <Die text={dieValue} />}
      </header>
    </div>
  );
}

export default App;
