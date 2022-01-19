import React from 'react';

const RandomQuote = function({ randomQuote }) {
  return (
    <div>
      <h3>something to muse over</h3>
      <p>"{randomQuote.text}" - {randomQuote.author}</p>
    </div>
  );
}

export default RandomQuote;