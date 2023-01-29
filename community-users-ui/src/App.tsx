import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchMap from './Layout/SearchMap';
import InfoBox from './Layout/InfoBox';

function App() {
  return (
    <div className="App">
      <h1>Community Circle</h1>
      <div className="main">
        <SearchMap longitude={2.1734} latitude={41.3851} />
        <InfoBox />
      </div>
    </div>
  );
}

export default App;
