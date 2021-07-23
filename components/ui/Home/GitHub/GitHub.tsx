import React from 'react'
import styled from 'styled-components'
import { GitHubResponseModel } from '../../../../models/GitHub'

interface GitHubProps {
  profileInfo: GitHubResponseModel
}

const GitHub: React.FC<GitHubProps> = ({ profileInfo }) => {
  const { weeks } = profileInfo.contributionsCollection.contributionCalendar

  return (
    <div>
      <h2>GitHub Section</h2>
    </div>
  )
}

export default GitHub
