import { Link, useParams } from "react-router-dom";


function Task ({task, currentTaskList, setCurrentTaskList}){
    

    return (
    <>
        <ul>
            <li>
                <h2>
                <Link to={`/details/${task.id}`}>{task.title}</Link>
                </h2>
            </li>
            {/* <li>{task.description}</li> */}
            <li>Assignee: {task.assignee}</li>
            {/* <li>{task.status} {task.status==="Done"? "✅" : task.status==="In Progress"? "✍️" : "❌" }</li> */}
            <li>Priority: {task.priority}</li>
          {/*   <li>{task.createdDate}</li>
            <li>{task.dueDate}</li> */}
        </ul>
        <button onClick={()=> {
            const taskListCopy = [...currentTaskList]
            const taskId = task.id;
            const newTaskList = taskListCopy.filter((task)=>task.id !== taskId);
            setCurrentTaskList(newTaskList);
            }}>
            Delete Task
        </button>
    </>
    )
}

export default Task;