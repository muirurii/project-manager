import { CardGroup } from "react-bootstrap"
import ProjectCard from "../components/Projects/ProjectCard"

const Projects = () => {
  return (
    <div className="container">
      <h1 className="my-4">Projects</h1>
      <CardGroup className="flex gap-4">
        <ProjectCard projectName="E-commerce site" />
        <ProjectCard projectName="Tech community" />
        <ProjectCard projectName="Wildfire tracker" />
        <ProjectCard projectName="CSS library" />
      </CardGroup>
    </div>
  )
}

export default Projects