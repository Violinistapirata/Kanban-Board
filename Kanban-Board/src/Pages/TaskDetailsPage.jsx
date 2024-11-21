//ASSETS
import KanbanJson from '../data/kanban.json';

//HOOKS
import { useParams } from "react-router-dom";


function TaskDetailsPage () {
    const { taskId } = useParams();    
    const selectedTask = KanbanJson.find((task) => task.id === taskId);
    const {title, description, assignee, status, priority, createdDate, dueDate} = selectedTask;
    
    return (
        <ul>
            <li>Title: {title}</li>
            <li>Description: {description}</li>
            <li>Assignee: {assignee}</li>
            <li>Status: {status}</li>
            <li>Priority: {priority}</li>
            <li>Created on: {createdDate}</li>
            <li>Due date: {dueDate}</li>
        </ul>
    )
}

export default TaskDetailsPage;