import React from 'react';

const QuotesListEntry = function ({ quote }) {
  return (
    <li>"{quote.text}" - {quote.author}</li>
  );
}

export default QuotesListEntry;