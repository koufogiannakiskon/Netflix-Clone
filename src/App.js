import React from 'react';
import './App.css';
import Row from './Row.js'
import requests from './requests.js';

function App() {
  return (
    <div className="App">
      <h1> Hey, lets build Netflix Clone.</h1>
      <Row title='NETFLIX ORIGINALS' fetchUrl={requests.fetchNetflixOriginals} />
      <Row title='Trending Now' fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default App;
