//ROUTES
import { Link } from "react-router-dom";

//CONTEXT
import { TaskListContext } from "../Contexts/taskLists.context";

//HOOKS
import { useContext } from "react";
import { useDrag } from "react-dnd";

//STYLES
import './Task.css';

/*-------------------------------------------------------------------*/

function Task ({task}){

    //taskList context props
    const {currentTaskList, setCurrentTaskList} = useContext(TaskListContext)

    //Drag-and-drop functionality
    const [{isDragging}, drag] = useDrag(()=>({
        type: "task",
        item: {id: task.id, status: task.status},
        collect: (monitor)=>({
            isDragging: !!monitor.isDragging()
        })
    }))
    
    //Handle function for the delete task button
    function handleDeleteTask () {
        const taskId = task.id;
        const newTaskList = currentTaskList.filter((task)=>task.id !== taskId);
        setCurrentTaskList(newTaskList);
    }

    return (
    <>
        <ul ref={drag} className={`task-container ${isDragging && "red-border"}`} draggable="true">
            <li>
                <h2>
                <Link to={`/details/${task.id}`}>{task.title}</Link>
                </h2>
            </li>
            <li className="task-text">Assignee: {task.assignee}</li>
            <li className="task-text">Priority: {task.priority}</li>
            <li><button className="delete-task-button" onClick={handleDeleteTask}>
            <img src="src/images/papelera.png"></img>
        </button></li>
        </ul>
    </>
    )
}

export default Task;