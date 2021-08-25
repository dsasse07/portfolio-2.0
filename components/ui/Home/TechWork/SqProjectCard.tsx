import styled from 'styled-components'
import OpenInNewIcon from '@material-ui/icons/OpenInNew'
import GitHubIcon from '@material-ui/icons/GitHub'
import Image from 'next/image'
import { createPlaceholder } from '../../../../utils/createPlaceholder'
import { PortfolioProjectsResponseModel } from '../../../../data/networkRequests'
import Link from 'next/link'

interface ProjectCardProps {
  project: PortfolioProjectsResponseModel
}

const SqProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card>
      <Link
        href={`/projects/${project.route}`}
        key={project.databaseId}
        passHref
      >
        <ProjectDetails>
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
        </ProjectDetails>
      </Link>
      <LinkRow>
        <LinkTab
          aria-label={`${project.name} Github Repo`}
          href={project.url}
          target='_blank'
          rel='noreferrer'
        >
          <GitHubIcon />
        </LinkTab>
        {project.deployUrl && (
          <LinkTab
            aria-label={`${project.name} Website`}
            href={project.deployUrl}
            target='_blank'
            rel='noreferrer'
          >
            <OpenInNewIcon />
          </LinkTab>
        )}
      </LinkRow>
    </Card>
  )
}

export default SqProjectCard

const Card = styled.article`
  position: relative;
  width: 20vw;
  min-width: 250px;
  height: 20vw;
  min-height: 250px;

  box-shadow: ${(props) => props.theme.shadow};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.fontColor};
  border: 1px solid ${({ theme }) => theme.fontColor};
  box-shadow: ${({ theme }) => theme.shadow + ' ' + theme.fontColor};
  padding: 10px 10px;
  margin: 20px 20px;
  cursor: pointer;
  overflow: hidden;

  :hover,
  :focus-within {
    box-shadow: ${({ theme }) => theme.shadow + ' ' + theme.sigAngles};
    border: 1px solid ${({ theme }) => theme.sigAngles};
  }
`

const ProjectDetails = styled.a`
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 0;
  margin: 0;
  overflow: hidden;
  color: ${({ theme }) => theme.fontColor};
  text-decoration: none;
  outline: none;
  flex: 1 0 0;
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

const LinkRow = styled.div`
  display: flex;
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.fontColor};
`

const LinkTab = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 10px;
  transition: 0.2s;
  flex: 1;
  border-left: 1px solid ${({ theme }) => theme.fontColor};

  :first-of-type {
    border-left: none;
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
  margin-bottom: 5px;
  overflow-y: scroll;
  padding: 0 10px;
`
