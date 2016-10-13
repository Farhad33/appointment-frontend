import React, { Component } from 'react'



export default class DayInput extends Component {
  render() {
    const { selectedDay, selectDay, availableDays } = this.props
    const days = availableDays.map(({day, slots}) =>
      <Day
        id={day}
        day={day}
        slots={slots}
        selected={selectedDay === day}
        selectDay={selectDay}
      />
    )

    return <div className="Calendar">
      <div>day: {this.props.day}</div>
      <div>{days}</div>
    </div>
  }
}

const Day = (props) => {
  const { day, slots, selected, selectDay } = props
  const style = {
    display: 'inline-block',
    'background-color': selected ? 'salmon' : 'teal',
  }
  return <div style={style}>
    <h3>{day}</h3>
    <button onClick={() => { selectDay(day) }}>Select</button>
  </div>
}
