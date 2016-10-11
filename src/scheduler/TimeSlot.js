import React, { Component } from 'react'
import moment from 'moment'


export default class TimeSlot extends Component {
  timeSlots() {
    return this.props.slots.map( ( slot, i ) => {
      return <div key={ i } className="slotties">{ moment( slot ).format( 'LT' ) } </div>
    })
  }

  render() {
    return (
      <div className="Grid">
        <div>{ this.timeSlots() }</div>
      </div>
    )
  }
}
