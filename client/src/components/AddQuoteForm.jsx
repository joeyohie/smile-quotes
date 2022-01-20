import React from 'react';

class AddQuoteForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      author: '',
      category: 'general'
    }

    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleAuthorChange(event) {
    this.setState({ author: event.target.value });
  }

  handleTextChange(event) {
    this.setState({ text: event.target.value });
  }

  handleCategoryChange(event) {
    this.setState({ category: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const text = this.state.text
    if (text === '') {
      alert('text field must not be empty - please add your favorite quote :)');
    } else {
      // check if outer quotation marks are around the text
      if (
        text[0] === "'" && text[text.length - 1] === "'" ||
        text[0] === '"' && text[text.length - 1] === '"'
      ) {
        // remove outer quotation marks
        this.setState({ text: text.slice(1, text.length - 1) }, () => {
          if (this.state.author === '') {
            // database defaults author to anonymous if not present
            let withoutAuthor = {
              text: this.state.text,
              category: this.state.category
            }
            this.props.add(withoutAuthor);
            this.setState({ text: '', category: 'general' });
          } else {
            this.props.add(this.state);
            this.setState({ text: '', author: '', category: 'general' });

          }
        }
        );
      } else {
        if (this.state.author === '') {
          // database defaults author to anonymous if not present
          let withoutAuthor = {
            text: this.state.text,
            category: this.state.category
          }
          this.props.add(withoutAuthor);
          this.setState({ text: '', category: 'general' });
        } else {
          this.props.add(this.state);
          this.setState({ text: '', author: '', category: 'general' });
        }
      }
    }
  }

  render() {
    return (
      <div>
        <h3>add your favorite quotes</h3>
        <form onSubmit={this.handleSubmit}>
          <label>
            text{' '}
            <input type="text" value={this.state.text} onChange={this.handleTextChange} />
          </label>
          <br></br>
          <label>
            author{' '}
            <input type="text" value={this.state.author} onChange={this.handleAuthorChange} />
          </label>
          <br></br>
          <label>
            category{' '}
            <select value={this.state.category} onChange={this.handleCategoryChange}>
              <option value="general">general</option>
              <option value="clarity">clarity</option>
              <option value="destress">destress</option>
              <option value="humor">humor</option>
              <option value="motivation">motivation</option>
              <option value="tranquility">tranquility</option>
            </select>
          </label>
          <br></br>
          <input className="button" type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default AddQuoteForm;