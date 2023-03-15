import { Accordion,Badge} from "react-bootstrap";

const Task = ({accKey}:{accKey:string}) => {
  return <Accordion.Item eventKey={accKey}>
    <Accordion.Header className="border-top d-block">
        <span>Task one</span>
        <img src="/img.png" className="d-inline-block p-0 mx-2 pill" style={{width:"30px",height:"30px"}} alt="Profile" />
                <span className="text-sm d-inline-block mx-2">Created at 1st March 2023</span>
                <Badge pill bg="info">
                    In progress
                </Badge>
            {/* </div> */}
        </Accordion.Header>
        <Accordion.Body>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi fugit soluta architecto autem, facere nobis, sunt quod accusantium commodi sapiente qui in beatae, saepe quis culpa! Voluptates quaerat ad est.
        </Accordion.Body>
    </Accordion.Item>;
};

export default Task;
