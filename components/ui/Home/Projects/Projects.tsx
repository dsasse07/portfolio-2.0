import styled from 'styled-components'
import ProjectCard from './ProjectCard'
import { projects } from '../../../../data/projects'

interface ProjectsProps {}

const Projects: React.FC<ProjectsProps> = () => {
  const projectCards = projects.map((project, index) => {
    return <ProjectCard key={index} project={project} />
  })

  return (
    <Container id='projects'>
      <Heading>
        <SectionHeading>Tech Projects</SectionHeading>
        <Description>
          Recent projects utilizing different technologies. Flip each card for a
          demo!
        </Description>
      </Heading>

      {projectCards}
    </Container>
  )
}

export default Projects

const Container = styled.div`
  background: rgba(100, 100, 100, 0.22);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /* gap: 2rem; */
  align-items: center;
  padding: 1rem;
  min-height: 70vh;
  margin: 10vh 0;

  .flex-item {
    margin: 1rem;
  }
`

const Heading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* gap: 1rem; */
  width: 100%;
  padding: 20px;

  h2,
  h4 {
    margin: 0.5rem;
  }
`

const SectionHeading = styled.h2`
  font-size: 2.5rem;
  margin-top: 0;
  margin-bottom: 0;
`

const Description = styled.h3`
  text-align: center;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 1.25rem;
  font-weight: normal;
`
