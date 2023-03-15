import { Card } from "react-bootstrap";
import TaskList from "../components/Projects/TaskList";

const Project = () => {
  return (
    <div className="container">
        <h1 className="my-5">Project One</h1>
        <div className="d-flex gap-4">
        <Card className="border-0" style={{maxWidth:"550px"}}>
            <Card.Img variant="top" src="/img.png" />
            <Card.Body>
                <Card.Title>Title</Card.Title>
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