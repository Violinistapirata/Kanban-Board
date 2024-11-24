import { Link } from "react-router-dom";
//CSS
import './Task.css';

function Task ({task, taskList, setTaskList}){
    

    return (
    <>
        <ul className="task-container">
            <li>
                <h2>
                <Link to={`/details/${task.id}`}>{task.title}</Link>
                </h2>
            </li>
            {/* <li>{task.description}</li> */}
            <li className="task-text">Assignee: {task.assignee}</li>
            {/* <li>{task.status} {task.status==="Done"? "✅" : task.status==="In Progress"? "✍️" : "❌" }</li> */}
            <li className="task-text">Priority: {task.priority}</li>
          {/*   <li>{task.createdDate}</li>
            <li>{task.dueDate}</li> */}
            <li><button className="delete-task-button" onClick={()=> {
            const taskId = task.id;
            const newTaskList = taskList.filter((task)=>task.id !== taskId);
            setTaskList(newTaskList);
            }}>
            Delete Task
        </button></li>
        </ul>
        
    </>
    )
}

export default Task;