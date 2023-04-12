import { Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ProjectTypes } from "../../Types";
import useDateFormatter from "../../customHooks/dateFormatter";

const ProjectCard = ({
  project,
  index,
}: {
  project: ProjectTypes;
  index: number;
}) => {
  const date = useDateFormatter(project.createdAt);

  return (
    <tr>
      <td>{index}</td>
      <td>{project.projectName}</td>
      <td>
        <a href={`/users/${project.creator.username}`} className="text-primary">
          {project.creator.username}
        </a>
      </td>
      <td>{date}</td>
      <td>
        <Badge bg={index % 2 ? "info" : "success"} pill>
          {project.status}
        </Badge>
      </td>
      <td>
        <Link className="text-primary" to={`/projects/${project._id}`}>
          view more
        </Link>
      </td>
    </tr>
  );
};

export default ProjectCard;
