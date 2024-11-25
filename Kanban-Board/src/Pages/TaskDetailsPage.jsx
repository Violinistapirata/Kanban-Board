//HOOKS
import { useState } from "react";
import { useParams } from "react-router-dom";
import UpdateTaskForm from "../components/UpdateTaskForm";

function TaskDetailsPage({ taskProps }) {
    console.log(taskProps.currentTaskList);
    
  const [showUpdateTaskForm, setShowUpdateTaskForm] = useState(false);
  const formProps = { showUpdateTaskForm, setShowUpdateTaskForm };

  const { taskId } = useParams();
  const selectedTask = taskProps.currentTaskList.find(
    (task) => task.id == taskId
  );
  const {
    title,
    description,
    assignee,
    status,
    priority,
    createdDate,
    dueDate,
  } = selectedTask;

  const handleEditTask = () => setShowUpdateTaskForm(true);

  return showUpdateTaskForm ? (
    <UpdateTaskForm
      task={selectedTask}
      taskProps={taskProps}
      formProps={formProps}
    />
  ) : (
    <div>
      <ul>
        <li>Title: {title}</li>
        <li>Description: {description}</li>
        <li>Assignee: {assignee}</li>
        <li>Status: {status}</li>
        <li>Priority: {priority}</li>
        <li>Created on: {createdDate}</li>
        <li>Due date: {dueDate}</li>
      </ul>
      <br />
      <button onClick={handleEditTask}>Edit task</button>
    </div>
  );
}

export default TaskDetailsPage;
