import { TableCell } from '@mui/material'
import React, { useMemo } from 'react'
import { useRecoilState } from 'recoil'
import { timeTableState } from '../store/store'

const TimeTableCell = ({day, timeNum}) => {
  const [timeTableData, setTimeTableData] = useRecoilState(timeTableState);

  const timeData = useMemo(() => timeTableData[day].find((time) => time.start<=timeNum && timeNum<time.end), [day, timeNum, timeTableData])
  // console.log(timeTableData);
  // console.log(timeData);

  return (
    <>
    {
      timeData?.start === timeNum
        ? <TableCell style={{backgroundColor: timeData.color, position:'relative'}} align='center' rowSpan={timeData.end - timeData.start}>{timeData.content}</TableCell>
        : timeData?.start < timeNum && timeNum < timeData?.end ? null : <TableCell />
    }
    </>
  )
}

export default TimeTableCell