<<<<<<< HEAD
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
=======
import React, { Component } from 'react'
import { Router, Route, browserHistory } from 'react-router'
import Services from './components/Services'
import ContactInfo from './components/ContactInfo'
import './App.css'
import 'muicss/dist/css/mui.css'

class App extends Component {
  render() {
    return <Router history={ browserHistory }>
      <Route path="/" component={ Services } />
      <Route path="/contact-info" component={ ContactInfo } />
    </Router>
  }
>>>>>>> f8a5a052f4e05f2b642f0eb8f8ff84850863ffe1
}

export default App
