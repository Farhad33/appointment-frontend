import React, { Component } from 'react';

export default class TimeBlock extends Component {
  render() {
    return (
      <div className="timeOfDay">
        <div className="Time" id="Early">Early</div>
        <div className="Time" id="Morning">Morning</div>
        <div className="Time" id="Afternoon">Afternoon</div>
        <div className="Time" id="Evening">Evening</div>
      </div>
    )
  }
}
