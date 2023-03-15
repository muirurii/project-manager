import { ListGroup,Accordion } from "react-bootstrap"
import TaskBadges from "./TaskBadges"
import Task from "./Task"

const TaskList = () => {
  return (
    <Accordion className="w-100">
        <h6 className="bg-dark p-3 text-white">Tasks</h6>
        <TaskBadges />
        <Task accessIndex="0" />
        <Task accessIndex="1"/>
        <Task accessIndex="2"/>
    </Accordion>
  )
}

export default TaskList