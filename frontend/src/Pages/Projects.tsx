import { CardGroup } from "react-bootstrap"
import ProjectCard from "../components/Projects/ProjectCard"
import { useQuery } from "@apollo/client";
import {GET_PROJECTS} from "../graphQL/queries/projects";
import { ProjectTypes } from "../Types";
import { useAppSelector } from "../app/hooks";
import { selectUser } from "../features/user/userSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Layout/Loader";

const Projects = () => {
  const {loading,error,data} = useQuery(GET_PROJECTS);
  const user = useAppSelector(selectUser);
  const navigate = useNavigate();

  useEffect(()=>{
    if(!user.isLogged) navigate("/");
    if(data){
      console.log(data,"useEff")
    }
  },[]);

  if(loading) return <Loader height="80vh" width="100vw" />
  if(error){
    return <p className="my-4 text-align-center">Error loading projects</p>
  }

  const projectsData = data.getProjects as ProjectTypes[];


  return (
    <div className="container">
      <h1 className="my-4">Projects {user.username}</h1>
      <CardGroup className="flex gap-4">
        {
          projectsData.map((project)=> <ProjectCard key={project._id} project={project} />)
        }
      </CardGroup>
    </div>
  )
}

export default Projects