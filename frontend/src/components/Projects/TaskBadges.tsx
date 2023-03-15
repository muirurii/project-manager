import { Badge, Button } from "react-bootstrap";
import AddTask from "./AddTask";

const TaskBadges = () => {
  return (
    <div className="d-flex gap-2 my-3">
      <Button className="rounded-pill" variant="dark">
        All
        <Badge bg="dark" className="d-inline-block mx-1" pill>
          4
        </Badge>
      </Button>
      <Button className="rounded-pill" variant="outline-dark">
        Complete
        <Badge bg="dark" className="d-inline-block mx-1" pill>
          2
        </Badge>
      </Button>
      <Button className="rounded-pill"
        variant="outline-dark"
      >
        In progress
        <Badge bg="dark" className="d-inline-block mx-1" pill>
          1
        </Badge>
      </Button>
      <AddTask />
    </div>
  );
};

export default TaskBadges;
