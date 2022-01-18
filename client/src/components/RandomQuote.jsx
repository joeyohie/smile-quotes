import React from 'react';

const RandomQuote = function({ randomQuote }) {
  return (
    <div>
      <h3>something to think about...</h3>
      <p>"{randomQuote.text}" - {randomQuote.author}</p>
    </div>
  );
}

export default RandomQuote;