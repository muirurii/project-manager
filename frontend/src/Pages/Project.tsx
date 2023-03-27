import { Badge, Card } from "react-bootstrap";
import TaskList from "../components/Projects/TaskList";
import AddMember from "../components/Projects/AddMember";
import {useQuery} from "@apollo/client";
import { GET_PROJECT } from "../graphQL/queries/projects";
import { ProjectTypes } from "../Types";
import { useAppSelector } from "../app/hooks";
import { selectUser } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Project = () => {

  const {loading, data, error} = useQuery(GET_PROJECT,{
    variables:{
      projectId:"641b4a17de5d38342dccb763"
    }
  });
  const user = useAppSelector(selectUser)
  const navigate = useNavigate();

  useEffect(()=>{
    if(!user.isLogged) navigate("/");
  },[]);

  if (loading) return <p>Loading</p>
  if (error) return <p>Error</p>

  const project = data as ProjectTypes;

  return (
    <div className="container">
        <h1 className="mt-5 mb-3">{project.projectName}</h1>
        <p className="">Created by user1 on 1st March 2020</p>
        <div className="mb-2 d-flex gap-2 align-items-center mb-4">
          <span>
            <Badge bg="info" pill>in progress</Badge>
          </span>
        <span>5 members</span>
        <AddMember/>
        </div>
        <div className="d-flex gap-4">
        <Card className="border-0" style={{maxWidth:"550px"}}>
            <Card.Img variant="top" src="/img.png" />
            <Card.Body>
               <Card.Text>
                  {project.description}
                </Card.Text>
            </Card.Body>
        </Card>
        <TaskList />
        </div>
    </div>
  )
}

export default Project