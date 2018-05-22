import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'mobx-react';
import App from './App';

const renderMethod = !module.hot ? ReactDOM.hydrate : ReactDOM.render;

renderMethod(
  <Provider appState={appState}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
