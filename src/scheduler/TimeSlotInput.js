import React, { Component } from 'react'


export default class DayInput extends Component {

  render() {
    const { timeSlots, selectedTimeSlot, selectTimeSlot } = this.props

    const timeSlotComponents = timeSlots.map((timeSlot) =>
      <TimeSlot
        id={timeSlot}
        timeSlot={timeSlot}
        selected={selectedTimeSlot === timeSlot}
        selectTimeSlot={selectTimeSlot}
      />
    )

    return <div className="TimeSlotInput">
      <div>{timeSlotComponents}</div>
    </div>
  }
}


const TimeSlot = (props) => {
  const { timeSlot, selected, selectTimeSlot } = props
  const style = {
    'background-color': selected ? 'salmon' : 'teal',
  }
  return <button style={style} onClick={() => { selectTimeSlot(timeSlot) }}>
    {timeSlot}
  </button>
}
