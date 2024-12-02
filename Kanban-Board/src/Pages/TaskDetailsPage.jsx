//HOOKS
import { useState } from "react";
import { useParams } from "react-router-dom";
import UpdateTaskForm from "../components/UpdateTaskForm";
import { Link } from "react-router-dom";

//CSS
import './TaskDetailsPage.css';

function TaskDetailsPage({ taskProps }) {
    
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
    
    
    <div className="task-details-main-background">
    
    <div className="task-details-container">
    <h1>TASK DETAILS</h1>
      <ul className="task-details-background">
        <li><h3>Title: </h3><p>{title}</p></li>
        <br></br>
        <li><h4>Description:</h4> <p>{description}</p></li>
        <br></br>
        <li><h4>Assignee: </h4><p>{assignee}</p></li>
        <br></br>
        <li><h4>Status:</h4><p> {status}</p></li>
        <br></br>
        <li><h4>Priority:</h4> <p>{priority}</p></li>
        <br></br>
        <li><h4>Created on:</h4><p> {createdDate}</p></li>
        <br></br>
        <li><h4>Due date:</h4> <p>{dueDate}</p></li>
      </ul>
      <br />
      <button onClick={handleEditTask}>Edit task</button>
      <Link to={'/'}><button>{'<-- Back to board'}</button></Link>
    </div>
    </div>
  );
}

export default TaskDetailsPage;
