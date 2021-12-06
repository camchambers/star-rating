import React from 'react';
import './App.css';
import StarRating from './StarRating';

function App() {
  return (
    <div id='main'>
      <h1>Star Rating</h1>
      <StarRating totalStars={5} />
    </div>
  );
}

export default App;
