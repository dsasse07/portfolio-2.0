import React from 'react'
import styled from 'styled-components'
import { GitHubResponseModel } from '../../../../models/GitHub'
import GitHubGarden from './GitHubGarden'

interface GitHubProps {
  profileInfo: GitHubResponseModel
}

const GitHub: React.FC<GitHubProps> = ({ profileInfo }) => {
  const { weeks } = profileInfo.contributionsCollection.contributionCalendar

  return (
    <div>
      <h2>GitHub Section</h2>
      <GitHubGarden />
      <p>{weeks.length}</p>
    </div>
  )
}

export default GitHub
