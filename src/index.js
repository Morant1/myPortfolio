import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import App from './App.jsx';
import * as serviceWorker from './serviceWorker';
import './assets/scss/global.scss';

ReactDOM.render(
  <Router >
  <App />
 </Router >,
  document.getElementById('root')
);

serviceWorker.unregister();
