import { Badge, Button } from "react-bootstrap";

const TaskBadges = () => {
  return (
    <div className="d-flex gap-2 my-3">
      <Button variant="dark">
        All
        <Badge bg="dark" className="d-inline-block mx-1" pill>
          4
        </Badge>
      </Button>
      <Button variant="outline-dark">
        Complete
        <Badge bg="dark" className="d-inline-block mx-1" pill>
          2
        </Badge>
      </Button>
      <Button
        variant="outline-dark"
      >
        In progress
        <Badge bg="dark" className="d-inline-block mx-1" pill>
          1
        </Badge>
      </Button>
      <Button
         variant="outline-dark"
      >
        Unassigned
        <Badge bg="dark" className="d-inline-block mx-1" pill>
          1
        </Badge>
      </Button>
    </div>
  );
};

export default TaskBadges;
