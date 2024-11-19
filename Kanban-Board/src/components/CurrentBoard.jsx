import './CurrentBoard.css';
import { useState } from 'react';
// import { useParams } from 'react-router-dom';

function CurrentBoard({taskList}) {
    const [updateTaskList, setUpdateTaskList] = useState(taskList)
    // const params = useParams();
    return (
            <>
                {updateTaskList.map((task) => (
                    <>
                        <ul key={task.id}>
                            <li >
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
                            const taskIndex = taskList.indexOf(task);
                            const newTaskList = taskList.splice(taskIndex, 1);
                            console.log(taskList);
                            setUpdateTaskList(newTaskList);
                            }}>
                            Delete Task
                        </button>
                    </>
                    ))}      
            </>
    )
};

export default CurrentBoard;