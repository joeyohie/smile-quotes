import React from 'react';
import QuotesListEntry from './QuotesListEntry.jsx';

const QuotesList = function ({ quotes }) {
  console.log('quotes', quotes);
  const listItems = quotes.map((quote) =>
    <QuotesListEntry key={quote._id}
      quote={quote} />
  );
  return (
    <ul className="quoteList">
      {listItems}
    </ul>
  );
}

export default QuotesList;