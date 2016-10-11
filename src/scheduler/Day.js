import React, { Component } from 'react';
import '../App.css'
import days from './calender'

// import TimeBlock from './TimeBlock'
import TimeSlot from './TimeSlot'

import moment from 'moment'


export default class Day extends Component {

  weekDays() {
    return days.items.map( ( slot, i ) => {
      return (
        <div key={ i } className="Day" id="Sunday">

          { moment( slot.day ).format(  'dddd' ) }
          <br />
          <strong>{ moment( slot.day ).date() }</strong>

          <div className="availible-margin">
            { slot.slots.length } availible
          </div>

          <TimeSlot key={ i } slots={ slot.slots } />

        </div>
      )
    })
  }

  render() {
    return (
      <div className="Calendar">
        {this.weekDays()}
      </div>
    )
  }
}
