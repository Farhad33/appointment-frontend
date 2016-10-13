import './App.css'
import React, { Component } from 'react'
import { Router, Route, browserHistory } from 'react-router'
import Services from './components/Services'
import Schedule from './scheduler/Schedule'
import ContactInfo from './components/ContactInfo'
import Services from './Services'
import Progress_bar from './Progress_bar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Progress_bar/>
      </div>
    );
  }
}

export default App
