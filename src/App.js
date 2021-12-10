import './App.css';
import { randomPhrase } from './random';
import React, { useState } from 'react';
import titleCard from './title-card.png'


function App() {
  const [phrase, setPhrase] = useState('Smash that button for a pep talk, champ!');

  return (
    <div className="App">
      <img class="App-title-card" src={titleCard} alt="Pep Talk Generator with sad hippo" />
      {/* <p class="App-dedication">Today's compliments are dedicated to Aleks N. because she is the epitome of awesomeness, and that's a fact.</p> */}
      <p class="App-phrase">
        { phrase }
      </p>
      <button class="App-button" onClick={() => setPhrase(randomPhrase)}>YEAH!</button>
      <p class="App-credits">Based on the print from The Raccoon Society. <a href="https://theraccoonsociety.com/collections/rs-wall-charts/products/pep-talk-generator-print">Buy yours here</a>!</p>
    </div>
  );
}

export default App;
