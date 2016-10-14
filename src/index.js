import React from 'react'
import { Router, Route, browserHistory } from 'react-router'
import ReactDOM from 'react-dom'
import Services from './components/Services'
import ContactInfo from './components/ContactInfo'
import Schedule from './scheduler/Schedule'

ReactDOM.render((
  <Router history={ browserHistory }>
    <Route path="/" component={ Services } />
    <Route path="/schedule/:service" component={ Schedule } />
    <Route path="/" component={ ContactInfo } />
  </Router>),
  document.getElementById( 'root' )
);
