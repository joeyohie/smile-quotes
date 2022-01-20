import React from 'react';

const QuotesListEntry = function ({ quote }) {
  return (
    <li>"{quote.text}" - <em>{quote.author}</em></li>
  );
}

export default QuotesListEntry;