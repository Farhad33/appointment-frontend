import React, { Component } from 'react';
import '../App.css'

import Day from './Day'
import TimeBlock from './TimeBlock'

export default class Schedule extends Component {
  render() {
    return (
      <div className="Schedule">
       <Day />
       <TimeBlock />
      </div>
    );
  }
}
