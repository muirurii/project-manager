import { CardGroup } from "react-bootstrap"
import ProjectCard from "../components/Projects/ProjectCard"
import { useQuery } from "@apollo/client";
import {GET_PROJECTS} from "../graphQL/queries/projects";
import { ProjectTypes } from "../Types";

const Projects = () => {
  const {loading,error,data} = useQuery(GET_PROJECTS);

  if(loading) return <p>Loading</p>
  if(error){
    console.log(error)
    return <p>Error</p>
  }
  console.log(data);

  const projectsData = data.getProjects as ProjectTypes[];


  return (
    <div className="container">
      <h1 className="my-4">Projects</h1>
      <CardGroup className="flex gap-4">
        {
          projectsData.map((project)=> <ProjectCard project={project} />)
        }
      </CardGroup>
    </div>
  )
}

export default Projects