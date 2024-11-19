{/*  <li key={task.title}>
     {task.title}
 </li>
 <li key={task.description}></li>
 <li key={task.assignee}></li>
 <li key={task.status}></li>
 <li key={task.priority}></li>
 <li key={task.dreateDate}></li>
 <li key={task.dueDate}></li> */}
import './CurrentBoard.css';
// import { useParams } from 'react-router-dom';


function CurrentBoard({taskList}) {

    // const params = useParams();
    return (
            <>
                {taskList.map((task) => (
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
                    ))}      
            </>
    )
};

export default CurrentBoard;