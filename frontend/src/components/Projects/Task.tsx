import { Accordion,Badge, Button} from "react-bootstrap";

const Task = ({accessIndex}:{accessIndex:string}) => {
  return <Accordion.Item eventKey={accessIndex}>
    <Accordion.Header className="border-top d-block">
        <span className="text-dark">Task one</span>
        <img src="/img.png" className="d-inline-block p-0 mx-2 pill" style={{width:"30px",height:"30px"}} alt="Profile" />
            <Badge pill bg="info">
                in progress
            </Badge>
        </Accordion.Header>
        <Accordion.Body>
            <p className="text-sm w-fit my-2 text-dark">Created by user1 on 1st March 2023</p>
            <p className="text-sm w-fit my-2 text-dark">Assigned to user2</p>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi fugit soluta architecto autem, facere nobis, sunt quod accusantium commodi sapiente qui in beatae, saepe quis culpa! Voluptates quaerat ad est.
            </p>
            <div className="d-flex gap-3">
                <Button className="rounded-pill" variant="dark">Mark done</Button>
                <Button className="rounded-pill px-4" variant="outline-dark">Edit</Button>
                <Button className="rounded-pill" variant="outline-danger">Delete</Button>
            </div>
        </Accordion.Body>
    </Accordion.Item>;
};

export default Task;
