import { Badge, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ProjectTypes } from "../../Types";

const ProjectCard = ({ project } :{project:ProjectTypes}) => {
  return (
    <div>
        <Card bg="li" className="" style={{maxWidth:"400px"}}>
          <Card.Header className="bg-dark text-white p-3">{project.projectName}</Card.Header>
          <Card.Body>
            <div className="d-flex gap-2 justify-content-between mb-4 text-sm">
                <span className="">Created at 1st March 2023</span>
                <Badge pill bg="info">in progress</Badge>
            </div>
            <Card.Text>
                {project.description}
            </Card.Text>
            <Link to="/project/projectId" className="btn btn-primary rounded-pill">
                View project</Link>
          </Card.Body>
        </Card>
    </div>
  )
}

export default ProjectCard