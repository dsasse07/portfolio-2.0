import styled from 'styled-components'
import OpenInNewIcon from '@material-ui/icons/OpenInNew'
import GitHubIcon from '@material-ui/icons/GitHub'
import Image from 'next/image'
import { createPlaceholder } from '../../../../utils/createPlaceholder'
import { PortfolioProjectsResponseModel } from '../../../../models/Project'

interface ProjectCardProps {
  project: PortfolioProjectsResponseModel
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const techTagComponents = project.repositoryTopics.nodes.map(
    (node, index) => {
      return <TechTag key={index}>{node.topic.name}</TechTag>
    }
  )

  return (
    <Card className='flex-item'>
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
      {/* <TechnologyContainer>{techTagComponents}</TechnologyContainer> */}
    </Card>
  )
}

export default ProjectCard

const Card = styled.article`
  position: relative;
  width: 90%;
  box-shadow: ${(props) => props.theme.shadow};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.fontColor};
  border: 1px solid ${({ theme }) => theme.fontColor};
  box-shadow: ${({ theme }) => theme.shadow};
  padding: 10px 0;
  padding-left: 10px;
  margin-bottom: 30px;
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
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Title = styled.header`
  font-weight: bold;
  width: 100%;
  text-align: center;
  margin: 0;
  margin-bottom: 10px;
  padding: 0;
  font-size: 1.7rem;
`

const LinkCol = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
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

const TechnologyContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 0.5rem;

  span {
    margin: 0.1rem;
  }
`
const TechTag = styled.span`
  border: 1px solid ${(props) => props.theme.logoName};
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.hoverColor};
  padding: 0.2rem;
  font-size: 0.8rem;
`

const Description = styled.summary`
  transition: 0.5s;
  overflow: scroll;
  text-align: center;
  color: ${({ theme }) => theme.subtextColor};
  font-size: 0.9rem;
`
