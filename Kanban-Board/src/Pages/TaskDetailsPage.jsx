//ROUTES
import { Link } from "react-router-dom";

//HOOKS
import { useContext, useState } from "react";
import { useParams } from "react-router-dom";

//COMPONENTS
import UpdateTaskForm from "../components/UpdateTaskForm";

//STYLES
import "./TaskDetailsPage.css";
import { TaskListContext } from "../Contexts/taskLists.context";

/*-------------------------------------------------------------------*/

function TaskDetailsPage() {
  //taskList context props
  const { currentTaskList } = useContext(TaskListContext);

  const [showUpdateTaskForm, setShowUpdateTaskForm] = useState(false);

  const { taskId } = useParams();
  const selectedTask = currentTaskList.find((task) => task.id == taskId);

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
    <UpdateTaskForm task={selectedTask} showForm={setShowUpdateTaskForm} />
  ) : (
    <div className="task-details-main-background">
      <div className="task-details-container">
        <h1>TASK DETAILS</h1>
        <ul className="task-details-background">
          <li>
            <h3>Title: </h3>
            <p>{title}</p>
          </li>
          <br />
          <li>
            <h4>Description:</h4>
            <p>{description}</p>
          </li>
          <br />
          <li>
            <h4>Assignee: </h4>
            <p>{assignee}</p>
          </li>
          <br />
          <li>
            <h4>Status:</h4>
            <p> {status} {status==="Done"? "✅" : status==="In Progress"? "✍️" : "❌" }</p>
          </li>
          <br />
          <li>
            <h4>Priority:</h4>
            <p>{priority}</p>
          </li>
          <br />
          <li>
            <h4>Created on:</h4>
            <p> {createdDate}</p>
          </li>
          <br />
          {selectedTask.lastUpdate && (
            <>
              <li>
                <h4>Last upate on:</h4>
                <p> {selectedTask.lastUpdate}</p>
              </li>
              <br />
            </>
          )}
          <li>
            <h4>Due date:</h4>
            <p>{dueDate}</p>
          </li>
        </ul>
        <br />
        <button onClick={handleEditTask}>Edit task</button>
        <Link to={"/"}>
          <button>{"<-- Back to board"}</button>
        </Link>
      </div>
    </div>
  );
}

export default TaskDetailsPage;
