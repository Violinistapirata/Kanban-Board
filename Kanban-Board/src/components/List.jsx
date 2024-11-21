// HOOKS
import { useState } from "react";

function List ({taskList}){
    const [currentTaskList, setCurrentTaskList] = useState(taskList)
    
    return(
        <>
            {currentTaskList.map((task) => (
                <>
                    <ul key={task.id}>
                        <li>
                            <h2>{task.title}</h2>
                        </li>
                        <li>{task.description}</li>
                        <li>{task.assignee}</li>
                        <li>{task.status} {task.status==="Done"? "✅" : task.status==="In Progress"? "✍️" : "❌" }</li>
                        <li>{task.priority}</li>
                        <li>{task.createdDate}</li>
                        <li>{task.dueDate}</li>
                    </ul>
                    <button onClick={()=> {
                        const taskListCopy = [...currentTaskList]
                        const taskId = task.id;
                        const newTaskList = taskListCopy.filter((task)=>task.id !== taskId);
                        // console.log(taskList);
                        console.log(newTaskList);
                        setCurrentTaskList(newTaskList);
                        }}>
                        Delete Task
                    </button>
                </>
                ))}      
        </>
    )
}

export default List;