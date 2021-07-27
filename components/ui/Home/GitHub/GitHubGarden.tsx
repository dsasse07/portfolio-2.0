import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Week } from '../../../../models/GitHub'
// import { weeks } from './weeks'
import Tooltip from '../../Tooltip'
import { useBreakpoint } from '../../../../utils/useBreakpointProvider'

interface GitHubGardenProps {
  weeks: Week[]
}

const findMonth = (dateString: string) => {
  return new Date(dateString).getMonth()
}

const buildWeek = (weeks: Week[], weekNumber: number) => {
  const days = weeks[weekNumber].contributionDays.map((day) => {
    let commitText =
      day.contributionCount === 0
        ? 'No commits'
        : `${day.contributionCount} commit`
    commitText += day.contributionCount > 1 ? 's' : ''

    return (
      <Tooltip
        content={`${commitText} on ${new Date(day.date)
          .toUTCString()
          .match(/^.*202\d/)}`}
        key={day.date}
      >
        <DayRect color={day.color} />
      </Tooltip>
    )
  })
  return <WeekColumn key={weeks[weekNumber].firstDay}>{days}</WeekColumn>
}

const mapMonths = (weeks: Week[]) => {
  let months: { monthNum: number; arr: JSX.Element[] }[] = [
    {
      monthNum: findMonth(weeks[0].contributionDays[0].date),
      arr: [buildWeek(weeks, 0)],
    },
  ]
  for (let i = 1; i < weeks.length; i++) {
    if (
      findMonth(weeks[i].contributionDays[0].date) ===
      months[months.length - 1].monthNum
    ) {
      months[months.length - 1].arr.push(buildWeek(weeks, i))
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

export const monthStrings = [
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

const GitHubGarden: React.FC<GitHubGardenProps> = ({ weeks }) => {
  const breakpoint = useBreakpoint()
  const [displayMonths, setMonthsToDisplay] = useState<number>(0)
  const monthArr = mapMonths(weeks)

  useEffect(() => {
    switch (true) {
      case breakpoint.xs:
        setMonthsToDisplay(2)
        break
      case breakpoint.sm:
        setMonthsToDisplay(5)
        break
      case breakpoint.md:
        setMonthsToDisplay(7)
        break
      case breakpoint.lg:
        setMonthsToDisplay(12)
        break
    }
  }, [breakpoint.xs, breakpoint.sm, breakpoint.md, breakpoint.lg])

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
      {monthComponents.slice(12 - displayMonths)}
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
