interface Day {
  color: string
  contributionCount: number
  contributionLevel:
    | 'NONE'
    | 'FIRST_QUARTILE'
    | 'SECOND_QUARTILE'
    | 'THIRD_QUARTILE'
    | 'FOURTH_QUARTILE'
  date: string
  weekday: number
}

export interface Week {
  firstDay: string
  contributionDays: Day[]
}

export interface GitHubResponseModel {
  contributionsCollection: {
    contributionCalendar: {
      weeks: Week[]
    }
  }
}
