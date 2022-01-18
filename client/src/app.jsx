import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    // state
    // method bindings
    // this.state = { counter: 0 };
    // this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <div>
        <h1>smile quotes</h1>
        <h3>come for the smiles, stay to be inspired</h3>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

