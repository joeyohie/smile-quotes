import React from 'react';

const RandomQuote = function ({ randomQuote }) {
  return (
    <div>
      <h3>random quote to muse over</h3>
      <p className="quoteRandom">"{randomQuote.text}" - <em>{randomQuote.author}</em></p>
    </div>
  );
}

export default RandomQuote;