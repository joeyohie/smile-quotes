import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';
import RandomQuote from './components/RandomQuote.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    // state
    this.state = {
      randomQuote: {}
    }
    // method bindings
    // this.handleClick = this.handleClick.bind(this);
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

  render() {
    return (
      <div>
        <h1>smile quotes</h1>
        <h2>come for the smiles, stay to be inspired</h2>
        <RandomQuote randomQuote={this.state.randomQuote}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

