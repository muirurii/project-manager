import { CardGroup } from "react-bootstrap"
import ProjectCard from "../components/Projects/ProjectCard"
import { useQuery } from "@apollo/client";
import {GET_PROJECTS} from "../queries/projectQueries";

const Projects = () => {
  const {loading,error,data} = useQuery(GET_PROJECTS);

  if(loading) return <p>Loading</p>
  if(error){
    console.log(error)
    return <p>Error</p>
  }
  console.log(data);

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