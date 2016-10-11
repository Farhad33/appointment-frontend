import React, { Component } from 'react';
import calender from './calender'
import DayInput from './DayInput'
import TimeSlotInput from './TimeSlotInput'
// import TimeBlock from './TimeBlock'

const availableDays = calender.items

export default class Schedule extends Component {

  constructor(){
    super()
    this.state = {
      day: null,
      timeSlot: null,
    }
    this.selectDay = this.selectDay.bind(this)
    this.selectTimeSlot = this.selectTimeSlot.bind(this)
    this.save = this.save.bind(this)
  }

  selectDay(day){
    if (this.state.day !== day){
      this.setState({
        day,
        timeSlot: null
      })

    }
  }

  selectTimeSlot(timeSlot){
    this.setState({timeSlot})
  }

  save(){
    alert(`you want an apt on ${this.state.day} at ${this.state.timeSlot}`)
  }

  render() {
    const { service } = this.props.params
    let timeSlotInput
    if (this.state.day){
      const selectedDay = availableDays.find(day => day.day === this.state.day)
      timeSlotInput = <TimeSlotInput
        timeSlots={selectedDay.slots}
        selectedTimeSlot={this.state.timeSlot}
        selectTimeSlot={this.selectTimeSlot}
      />
    }

    let saveButton
    if (this.state.day && this.state.timeSlot) {
      saveButton = <button onClick={this.save}>Save</button>
    }
    return <div className="Schedule">
      <h1>{service}</h1>
      <DayInput
        availableDays={availableDays}
        selectedDay={this.state.day}
        selectDay={this.selectDay}
      />
      {timeSlotInput}
      {saveButton}
    </div>
  }
}
