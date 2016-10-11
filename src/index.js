import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import { Router, Route, browserHistory } from 'react-router'

import Services from './Services'
import Schedule from './scheduler/Schedule'

ReactDOM.render((
  <Router history={ browserHistory }>
    <Route path="/" component={ Services } />
    <Route path="/schedule" component={ Schedule } />
  </Router>),
  document.getElementById( 'root' )
);
