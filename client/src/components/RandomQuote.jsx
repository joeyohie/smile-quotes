import React from 'react';

const RandomQuote = function ({ randomQuote }) {
  return (
    <div>
      <h3>random quote to muse over</h3>
      <p className="quoteRandom">"{randomQuote.text}"<br></br>- <em>{randomQuote.author}</em> | <em>category: {randomQuote.category}</em></p>
    </div>
  );
}

export default RandomQuote;