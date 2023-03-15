import { ListGroup,Accordion } from "react-bootstrap"
import TaskBadges from "./TaskBadges"
import Task from "./Task"

const TaskList = () => {
  return (
    <Accordion className="w-100">
        <h6 className="bg-primary p-3 text-white">Tasks</h6>
        <TaskBadges />
        <Task accKey="0" />
        <Task accKey="1"/>
        <Task accKey="2"/>
    </Accordion>
  )
}

export default TaskList