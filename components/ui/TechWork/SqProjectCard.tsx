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
      <LogoContainer>
        <Image
          layout='fill'
          placeholder='blur'
          blurDataURL={`data:image/svg+xml;base64,${createPlaceholder(
            250,
            250
          )}`}
          src={project.logo}
          alt={`${project.name} logo`}
        />
      </LogoContainer>
      <Link
        href={`/projects/${project.route}`}
        key={project.databaseId}
        passHref
      >
        <ProjectDetails>
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
  min-width: 300px;
  height: 20vw;
  min-height: 300px;
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
  z-index: 1;
`

const Col = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  padding: 0 15px;
  background: rgba(30, 29, 30, 0.75);
`

const LogoContainer = styled.div`
  position: absolute;
  top: 10px;
  left: auto;
  width: 70%;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 0;
`

const Title = styled.header`
  font-weight: bold;
  width: 100%;
  text-align: center;
  margin: 0;
  margin-bottom: 25px;
  padding: 0;
  font-size: 2rem;
`

const LinkRow = styled.div`
  display: flex;
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.fontColor};
  z-index: 1;
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
  color: ${({ theme }) => theme.fontColor};
  font-size: 1.1rem;
  margin-bottom: 5px;
  overflow-y: scroll;
  padding: 0 10px;
`
