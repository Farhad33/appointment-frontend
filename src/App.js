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
}

export default App
