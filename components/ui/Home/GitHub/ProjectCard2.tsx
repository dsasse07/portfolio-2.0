import styled from 'styled-components'
import OpenInNewIcon from '@material-ui/icons/OpenInNew'
import GitHubIcon from '@material-ui/icons/GitHub'
import Image from 'next/image'
import { createPlaceholder } from '../../../../utils/createPlaceholder'
import { forwardRef } from 'react'
import { icons } from '../../../../assets/icons/icons'
import { PortfolioProjectsResponseModel } from '../../../../data/networkRequests'
import Tooltip from '../../Tooltip'
import { useState } from 'react'
import { useBreakpoint } from '../../../../utils/useBreakpointProvider'

interface ProjectCardProps {
  project: PortfolioProjectsResponseModel
  href?: string
  onClick?: () => void
}

const ProjectCard = forwardRef<HTMLElement, ProjectCardProps>(
  ({ project, onClick, href }, ref) => {
    return (
      //@ts-ignore
      <Card href={href} ref={ref} onClick={onClick}>
        <LogoContainer>
          <Image
            placeholder='blur'
            blurDataURL={`data:image/svg+xml;base64,${createPlaceholder(
              100,
              100
            )}`}
            width={100}
            height={100}
            src={project.logo}
            alt={`${project.name} logo`}
          />
        </LogoContainer>
        <Col>
          <Title>{project.name}</Title>
          <Description>{project.description}</Description>
        </Col>
        <LinkCol>
          <LinkButton
            aria-label={`${project.name} Github Repo`}
            href={project.url}
            target='_blank'
            rel='noreferrer'
          >
            <GitHubIcon />
          </LinkButton>
          {project.deployUrl && (
            <LinkButton
              aria-label={`${project.name} Website`}
              href={project.deployUrl}
              target='_blank'
              rel='noreferrer'
            >
              <OpenInNewIcon />
            </LinkButton>
          )}
        </LinkCol>
      </Card>
    )
  }
)

export default ProjectCard

const Card = styled.article`
  position: relative;
  width: 90%;
  box-shadow: ${(props) => props.theme.shadow};
  display: flex;
  align-items: flex-start;
  justify-content: center;
  color: ${({ theme }) => theme.fontColor};
  border: 1px solid ${({ theme }) => theme.fontColor};
  box-shadow: ${({ theme }) => theme.shadow + ' ' + theme.fontColor};
  padding: 10px 0;
  padding-left: 10px;
  margin-bottom: 30px;
  cursor: pointer;
  max-height: 90px;
  overflow: hidden;

  :hover,
  :focus {
    box-shadow: ${({ theme }) => theme.shadow + ' ' + theme.sigAngles};
    border: 1px solid ${({ theme }) => theme.sigAngles};
  }
`

const Col = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  padding: 0 15px;
`

const LogoContainer = styled.div`
  width: 90px;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Title = styled.header`
  font-weight: bold;
  width: 100%;
  text-align: center;
  margin: 0;
  margin-bottom: 5px;
  padding: 0;
  font-size: 1.5rem;
`

const LinkCol = styled.div`
  display: flex;
  flex-direction: column;
  height: 90px;
  border-left: 1px solid ${({ theme }) => theme.fontColor};
`

const LinkButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 10px;
  transition: 0.2s;
  flex: 1;
  border-top: 1px solid ${({ theme }) => theme.fontColor};

  :first-of-type {
    border-top: none;
  }

  svg {
    transition: 0.2s;
    color: ${({ theme }) => theme.fontColor};
  }

  :hover,
  :focus {
    background: ${({ theme }) => theme.fontColor};
    svg {
      color: ${({ theme }) => theme.darkFontColor};
    }
  }
`

const Description = styled.summary`
  text-align: center;
  color: ${({ theme }) => theme.subtextColor};
  font-size: 0.9rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 5px;
`
