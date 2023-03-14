import { Badge, Button } from "react-bootstrap";

const TaskBadges = () => {
  return (
    <div className="d-flex gap-2 my-3">
      <Button variant="dark">
        All
        <Badge className="bg-dark text-white d-inline-block mx-1" pill>
          4
        </Badge>
      </Button>
      <Button variant="outline-dark">
        Complete
        <Badge className="bg-dark text-white d-inline-block mx-1" pill>
          2
        </Badge>
      </Button>
      <Button
        variant="outline-dark"
      >
        In progress
        <Badge className="bg-dark text-white d-inline-block mx-1" pill>
          1
        </Badge>
      </Button>
      <Button
         variant="outline-dark"
      >
        Late
        <Badge className="bg-white text-dark d-inline-block mx-1" pill>
          1
        </Badge>
      </Button>
    </div>
  );
};

export default TaskBadges;
