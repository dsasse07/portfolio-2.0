import React from 'react'
import styled from 'styled-components'
import { Week } from '../../../../models/GitHub'
import { weeks } from './weeks'
import Tooltip from '../../Tooltip'

// interface GitHubGardenProps {
//   weeks: Week[]
//   monthsToDisplay: number
// }

const findMonth = (dateString: string) => {
  return new Date(dateString).getMonth()
}

const buildWeek = (weeks: Week[], weekNumber: number) => {
  const days = weeks[weekNumber].contributionDays.map((day) => {
    return (
      <Tooltip content={`Hi friend`}>
        <DayRect color={day.color} />
      </Tooltip>
    )
  })
  return <WeekColumn>{days}</WeekColumn>
}

const mapMonths = (weeks: Week[]) => {
  let months: { monthNum: number; arr: JSX.Element[] }[] = [
    {
      monthNum: findMonth(weeks[0].contributionDays[0].date),
      arr: [buildWeek(weeks, 0)],
    },
  ]
  // Iterate through the weeks
  for (let i = 1; i < weeks.length; i++) {
    // If current week is the same month as the last
    // Add it to the array
    if (
      findMonth(weeks[i].contributionDays[0].date) ===
      months[months.length - 1].monthNum
    ) {
      months[months.length - 1].arr.push(buildWeek(weeks, i))
      // If current week is a new month, make a new entry
    } else {
      months.push({
        monthNum: findMonth(weeks[i].contributionDays[0].date),
        arr: [],
      })
      months[months.length - 1].arr.push(buildWeek(weeks, i))
    }
  }
  return months
}

// const GitHubGarden: React.FC<GitHubGardenProps> = ({ weeks }) => {
const GitHubGarden: React.FC = () => {
  const monthArr = mapMonths(weeks)
  const monthStrings = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  const monthComponents = monthArr.map((mon, i) => {
    return (
      <Month>
        <MonthLabel>{i !== 0 ? monthStrings[mon.monthNum] : ''}</MonthLabel>
        <WeeksContainer>{mon.arr}</WeeksContainer>
      </Month>
    )
  })

  return (
    <GardenPlot>
      <DayLabels>
        <DayLabel>Sun</DayLabel>
        <DayLabel>Mon</DayLabel>
        <DayLabel>Tues</DayLabel>
        <DayLabel>Wed</DayLabel>
        <DayLabel>Thu</DayLabel>
        <DayLabel>Fri</DayLabel>
        <DayLabel>Sat</DayLabel>
      </DayLabels>
      {monthComponents}
    </GardenPlot>
  )
}

export default GitHubGarden

const GardenPlot = styled.div`
  align-items: flex-end;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  padding-bottom: 1rem;
`

const Month = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

const MonthLabel = styled.p`
  margin: 0;
  padding: 0;
  padding-left: 3px;
  font-size: 0.8rem;
`

const WeeksContainer = styled.div`
  display: flex;
`

const WeekColumn = styled.div`
  display: flex;
  flex-direction: column;
`

const DayLabels = styled.div`
  display: flex;
  flex-direction: column;
`

const DayLabel = styled(MonthLabel)`
  :first-of-type {
    padding-top: 17px;
  }
  :nth-child(odd) {
    color: transparent;
  }
`

interface DayRectStyleProps {
  color: string
}

const DayRect = styled.div<DayRectStyleProps>`
  width: 10px;
  height: 10px;
  margin: 2px;
  background: ${({ color }) => color};
  border-radius: 2px;
`
