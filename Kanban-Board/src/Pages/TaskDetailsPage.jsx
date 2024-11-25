
//HOOKS
import { useState } from "react";
import { useParams } from "react-router-dom";
import UpdateTaskForm from "../components/UpdateTaskForm";


function TaskDetailsPage ({taskProps}) {
    const [showUpdateTaskForm, setShowUpdateTaskForm] = useState(false);
    const formProps = {showUpdateTaskForm, setShowUpdateTaskForm};
    
    const { taskId } = useParams();    
    const selectedTask = taskProps.taskList.find((task) => task.id == taskId);
    const {title, description, assignee, status, priority, createdDate, dueDate} = selectedTask;

    const handleEditTask = () => setShowUpdateTaskForm(true);
    
    {showUpdateTaskForm && <UpdateTaskForm task={selectedTask} taskProps={taskProps} formProps={formProps} />}
    return (
        <>
            <ul>
                <li>Title: {title}</li>
                <li>Description: {description}</li>
                <li>Assignee: {assignee}</li>
                <li>Status: {status}</li>
                <li>Priority: {priority}</li>
                <li>Created on: {createdDate}</li>
                <li>Due date: {dueDate}</li>
            </ul>
            <button onClick={handleEditTask}>Edit task</button>
        </>
    )
}

export default TaskDetailsPage;