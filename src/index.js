import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import { Router, Route, browserHistory } from 'react-router'

import Services from './Services'
import Progress_bar from './Progress_bar'

ReactDOM.render((
  <Router history={ browserHistory }>
    <Route path="/" component={ Services } />
  </Router>),
  document.getElementById( 'root' )
);
