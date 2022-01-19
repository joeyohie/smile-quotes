import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props)
    // state
    this.state = {
      text: '',
      author: '',
      category: ''
    }
    // bind
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleTextSubmit = this.handleTextSubmit.bind(this);
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleAuthorSubmit = this.handleAuthorSubmit.bind(this);
  }

  // methods
  handleTextChange(event) {
    this.setState({ text: event.target.value });
  }

  handleTextSubmit(event) {
    event.preventDefault();
    alert('text submitted');
  }

  handleAuthorChange(event) {
    this.setState({ author: event.target.value });
  }

  handleAuthorSubmit(event) {
    event.preventDefault();
    alert('author submitted');
  }

  // render
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
      </div>
    );
  }
}

export default Search;