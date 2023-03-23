import { Badge, Card } from "react-bootstrap";
import TaskList from "../components/Projects/TaskList";
import AddMember from "../components/Projects/AddMember";
import {useQuery} from "@apollo/client";

const Project = () => {

  // const {loading,}

  return (
    <div className="container">
        <h1 className="mt-5 mb-3">Project One</h1>
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus pariatur aperiam numquam tempora provident molestiae qui minima, aspernatur quisquam id? Qui doloribus molestias consequatur ad reprehenderit corporis expedita accusantium voluptates.
                </Card.Text>
            </Card.Body>
        </Card>
        <TaskList />
        </div>
    </div>
  )
}

export default Project