import './CurrentBoard.css';
import { useState } from 'react';
// import { useParams } from 'react-router-dom';

function CurrentBoard({taskList}) {
    const [currentTaskList, setCurrentTaskList] = useState(taskList)
    // const params = useParams();
    return (
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
                            const newTaskList = taskListCopy.filter((element)=>element.id !== taskId);
                            setCurrentTaskList(newTaskList);
                            }}>
                            Delete Task
                        </button>
                    </>
                    ))}      
            </>
    )
};

export default CurrentBoard;