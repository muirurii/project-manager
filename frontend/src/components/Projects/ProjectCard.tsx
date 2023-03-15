import { Badge, Card } from "react-bootstrap"
import { Link } from "react-router-dom"

const ProjectCard = ({projectName}:{projectName:string}) => {
  return (
    <div>
        <Card bg="li" className="" style={{maxWidth:"400px"}}>
          <Card.Header className="bg-primary text-white">{projectName}</Card.Header>
          <Card.Body>
            <div className="d-flex gap-2 justify-content-between mb-4">
                <span className="border-bottom border-secondary">Created at 1st March 2023</span>
                <Badge pill bg="info">
                    In progress
                </Badge>
            </div>
            <Card.Text>
                Lorem ipsum dolor sit consectetur Text here Lorem ipsum dolor sit consectetur 
                Text here Lorem ipsum dolor sit consectetur Lorem ipsum dolor sit consectetur....
            </Card.Text>
            <Link to="/project/projectId" className="btn btn-primary">
                View project</Link>
          </Card.Body>
        </Card>
    </div>
  )
}

export default ProjectCard