import './App.css'
import React from 'react'
import { Router, Route, browserHistory } from 'react-router'

import Services from './Services'
import Schedule from './scheduler/Schedule'

const App = (props) => {
  return <Router history={ browserHistory }>
    <Route path="/" component={ Services } />
    <Route path="/schedule/:service" component={ Schedule } />
  </Router>
}

export default App
