import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { createHashHistory } from 'history'; 
import App from './containers/AppContainer/App';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

ReactDOM.render(
  <Router  history={createHashHistory()} >
    <App />
  </Router>
  , document.getElementById('root'));
registerServiceWorker();
