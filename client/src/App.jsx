import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render () {
    return (
      <React.Fragment>
        <div>第一块</div>
        <div>第二块</div>
      </React.Fragment>
    );
  }
}

export default hot(module)(App);
