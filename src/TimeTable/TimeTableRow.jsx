import React from 'react'
import TimeTableCell from './TimeTableCell'

const TimeTableRow = ({...props}) => {
  return (
    <>
      <TimeTableCell day="mon" {...props} />
      <TimeTableCell day="Tue" {...props} />
      <TimeTableCell day="Wed" {...props} />
      <TimeTableCell day="Thu" {...props} />
      <TimeTableCell day="Fri" {...props} />
    </>
  )
}

export default TimeTableRow