import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';
import RandomQuote from './components/RandomQuote.jsx';
import AddQuoteForm from './components/AddQuoteForm.jsx';
import Search from './components/Search.jsx';
import QuotesList from './components/QuotesList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    // state
    this.state = {
      randomQuote: {},
      quotesList: []
    }
    // method bindings
    this.add = this.add.bind(this);
    this.search = this.search.bind(this);
    this.fiveMostRecent = this.fiveMostRecent.bind(this);
  }

  componentDidMount() {
    axios.get('/quotes')
      .then((response) => {
        this.setState({ randomQuote: response.data });
      })
      .catch((error) => {
        alert('error in getting a random quote');
      })
  }

  add(quoteFormData) {
    axios.post('/quotes', quoteFormData)
      .then((response) => {
        if (response.data === 'saved') {
          alert('your quote has been successfully SAVED');
        }
        if (response.data === 'updated') {
          alert('your quote has been successfully UPDATED');
        }
      })
      .catch((error) => {
        alert('error in saving quote');
      })
  }

  search(searchData) {
    let query = { params: searchData };
    axios.get('/search', query)
      .then((response) => {
        if (response.data.length > 0) {
          this.setState({ quotesList: response.data });
        } else {
          alert('no quotes found based on search query - please try again');
        }
      })
      .catch((error) => {
        alert('search error');
      })
  }

  fiveMostRecent() {
    axios.get('/five-most-recent-quotes')
      .then((response) => {
        this.setState({ quotesList: response.data });
      })
      .catch((error) => {
        alert('error in retrieving five most recent quotes');
      })
  }

  render() {
    return (
      <div>
        <h1>smile quotes</h1>
        <h2>come for the smiles, stay to be inspired</h2>
        <RandomQuote randomQuote={this.state.randomQuote} />
        <AddQuoteForm add={this.add} />
        <Search search={this.search} fiveMostRecent={this.fiveMostRecent} />
        <QuotesList quotes={this.state.quotesList} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

