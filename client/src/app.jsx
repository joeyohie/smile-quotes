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
      randomQuote: {}
    }
    // method bindings
    this.add = this.add.bind(this);
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
    console.log('here', quoteFormData);
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

  render() {
    return (
      <div>
        <h1>smile quotes</h1>
        <h2>come for the smiles, stay to be inspired</h2>
        <RandomQuote randomQuote={this.state.randomQuote}/>
        <AddQuoteForm add={this.add}/>
        <Search />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

