import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props)
    // state
    this.state = {
      text: '',
      author: '',
      category: 'general'
    }
    // bindings
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleTextSubmit = this.handleTextSubmit.bind(this);
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleAuthorSubmit = this.handleAuthorSubmit.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleCategorySubmit = this.handleCategorySubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  // TEXT METHODS
  handleTextChange(event) {
    this.setState({ text: event.target.value });
  }

  handleTextSubmit(event) {
    event.preventDefault();
    this.props.search({ text: this.state.text });
    this.setState({ text: '' });
  }

  // AUTHOR METHODS
  handleAuthorChange(event) {
    this.setState({ author: event.target.value });
  }

  handleAuthorSubmit(event) {
    event.preventDefault();
    this.props.search({ author: this.state.author });
    this.setState({ author: '' });
  }

  // CATEGORY METHODS
  handleCategoryChange(event) {
    this.setState({ category: event.target.value })
  }

  handleCategorySubmit(event) {
    event.preventDefault();
    this.props.search({ category: this.state.category });
    this.setState({ category: 'general' });
  }

  // BUTTON CLICK METHOD
  handleClick() {
    this.props.fiveMostRecent();
  }

  render() {
    return (
      <div>
        <h3>find what you're looking for</h3>
        <form onSubmit={this.handleTextSubmit}>
          <label>
            search words from the quote
            <input type="text" value={this.state.text} onChange={this.handleTextChange} />
          </label>
          <input type="submit" value="submit" />
        </form>
        <form onSubmit={this.handleAuthorSubmit}>
          <label>
            search by author
            <input type="text" value={this.state.author} onChange={this.handleAuthorChange} />
          </label>
          <input type="submit" value="submit" />
        </form>
        <form onSubmit={this.handleCategorySubmit}>
          <label>
            search by category
            <select value={this.state.category} onChange={this.handleCategoryChange}>
              <option value="general">general</option>
              <option value="clarity">clarity</option>
              <option value="destress">destress</option>
              <option value="humor">humor</option>
              <option value="motivation">motivation</option>
              <option value="tranquility">tranquility</option>
            </select>
          </label>
          <input type="submit" value="submit" />
        </form>
        <button onClick={this.handleClick}>
          click here for the 5 most recently added quotes
        </button>
      </div>
    );
  }
}

export default Search;