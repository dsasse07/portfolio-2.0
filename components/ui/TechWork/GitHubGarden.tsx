import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Week } from '../../../models/GitHub'
// import { weeks } from './weeks'
import Tooltip from '../Tooltip'
import { useBreakpoint } from '../../../utils/useBreakpointProvider'
import { useAppSelector } from '../../../redux/hooks'

interface GitHubGardenProps {
  weeks: Week[]
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
  const theme = useAppSelector(({ theme }) => theme.theme)

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
          <DayRect color={theme.gitHubColors[day.contributionLevel]} />
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

  const monthArr = mapMonths(weeks)

  const findDisplaySize = () => {
    switch (true) {
      case breakpoint.xs:
        return 2
      case breakpoint.sm:
        return 5
      case breakpoint.md:
        return 7
      case breakpoint.lg:
        return 12
      default:
        return 12
    }
  }
  const [displayMonths, setMonthsToDisplay] = useState<number>(
    findDisplaySize()
  )
  useEffect(() => {
    setMonthsToDisplay(findDisplaySize())
  }, [
    findDisplaySize,
    breakpoint.xs,
    breakpoint.sm,
    breakpoint.md,
    breakpoint.lg,
  ])

  const monthComponents = monthArr.map((mon, i) => {
    return (
      <Month key={i}>
        <MonthLabel>{i !== 0 ? monthStrings[mon.monthNum] : ''}</MonthLabel>
        <WeeksContainer>{mon.arr}</WeeksContainer>
      </Month>
    )
  })

  return (
    <div>
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
      <Key>
        <KeyLabel>Less</KeyLabel>
        <DayRect color={theme.gitHubColors.NONE} />
        <DayRect color={theme.gitHubColors.FIRST_QUARTILE} />
        <DayRect color={theme.gitHubColors.SECOND_QUARTILE} />
        <DayRect color={theme.gitHubColors.THIRD_QUARTILE} />
        <DayRect color={theme.gitHubColors.FOURTH_QUARTILE} />
        <KeyLabel>More</KeyLabel>
      </Key>
    </div>
  )
}

export default GitHubGarden

const GardenPlot = styled.div`
  display: flex;
  justify-content: center;
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

const Key = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
`

const KeyLabel = styled.p`
  font-size: 0.9rem;
  margin: 5px 8px;
`
