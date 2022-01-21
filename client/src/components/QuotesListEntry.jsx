import React from 'react';

class QuotesListEntry extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.deleteQuote(this.props.quote._id);
  }

  render() {
    return (
      <div className="quoteList">
        <li>"{this.props.quote.text}"<br></br>- <em>{this.props.quote.author}</em> | <em>category: {this.props.quote.category}</em> | <button onClick={this.handleClick}>remove</button>
        </li>
      </div>
    );
  }
}

export default QuotesListEntry;