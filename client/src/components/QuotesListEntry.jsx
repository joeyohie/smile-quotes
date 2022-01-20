import React from 'react';

const QuotesListEntry = function ({ quote }) {
  return (
    <li>"{quote.text}"<br></br>- <em>{quote.author}</em> | <em>category: {quote.category}</em></li>
  );
}

export default QuotesListEntry;