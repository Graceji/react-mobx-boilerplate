import React, { Component } from 'react';
import { hot } from 'react-hot-loader'; // eslint-disable-line

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {

    };
  }

  render () {
    return (
      <React.Fragment>
        <div>第一块1</div>
        <div>第二块2</div>
      </React.Fragment>
    );
  }
}

export default hot(module)(App);
