import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';
import RandomQuote from './components/RandomQuote.jsx';
import AddQuoteForm from './components/AddQuoteForm.jsx';
import Search from './components/Search.jsx';

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
        console.log('componentDidMount response', response.data);
        this.setState({ randomQuote: response.data });
      })
      .catch((error) => {
        console.log('componentDidMount error', error);
      })
  }

  add(quoteFormData) {
    axios.post('/quotes', quoteFormData)
      .then((response) => {
        console.log('success in add method/post', response);
        if (response.data === 'saved') {
          alert('your quote has been successfully SAVED');
        }
        if (response.data === 'updated') {
          alert('your quote has been successfully UPDATED');
        }
      })
      .catch((error) => {
        console.log('error in add method/post', error);
      })
  }

  search(searchData) {
    let query = { params: searchData };
    console.log('query', query);
    axios.get('/search', query)
      .then((response) => {
        this.setState({ quotesList: response.data });
      })
      .catch((error) => {
        // ********** add a status code **********
        alert('search error')
      })
  }

  fiveMostRecent() {
    console.log('five most recent')
  }

  render() {
    return (
      <div>
        <h1>smile quotes</h1>
        <h2>come for the smiles, stay to be inspired</h2>
        <RandomQuote randomQuote={this.state.randomQuote}/>
        <AddQuoteForm add={this.add}/>
        <Search search={this.search} fiveMostRecent={this.fiveMostRecent}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

