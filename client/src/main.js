import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'mobx-react';
import App from './App';
import AppState from './store';
import Test from './store/test';

const renderMethod = !module.hot ? ReactDOM.hydrate : ReactDOM.render;
const appState = new AppState();
const test = new Test();
const stores = {
  test,
  appState,
};

renderMethod(
  <Provider {...stores}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
