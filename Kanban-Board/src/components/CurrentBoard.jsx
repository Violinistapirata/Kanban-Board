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


function CurrentBoard(props) {
    const taskList = props.taskList;
    // const params = useParams();
    console.log(taskList);


    const itemsId = taskList.map((item) => {
        const itemId = item.id
        // console.log(item.id);
        return itemId;
    })
    // console.log(itemsId);
    console.log(itemsId);
    
    // const taskList = 
    return (
        <>
            <ul>{taskList.map((task) => (
                <li key={task.id}>
                    <h2>{task.title}</h2>
                </li>
                ))}
            </ul>
        </>
    )
};

export default CurrentBoard;