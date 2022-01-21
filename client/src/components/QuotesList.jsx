import React from 'react';
import QuotesListEntry from './QuotesListEntry.jsx';

const QuotesList = function (props) {
  const listItems = props.quotes.map((quote) =>
    <QuotesListEntry key={quote._id}
      quote={quote} deleteQuote={props.deleteQuote} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}

export default QuotesList;