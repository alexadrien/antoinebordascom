import React from 'react';
import image from './image.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={image} className="App-logo" alt="logo" />
        <p>
          Welcome Home
        </p>
        <a
          className="App-link"
          href="https://www.sipios.com/blog/alliances-banque-et-fintech-finance-du-futur"
          target="_blank"
          rel="noopener noreferrer"
        >
          Cesse de te limiter
        </a>
      </header>
    </div>
  );
}

export default App;
