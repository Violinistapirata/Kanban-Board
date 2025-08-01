//ROUTES
import { Link } from "react-router-dom";

// //CONTEXT
// import { TaskListContext } from "../Contexts/taskLists.context";

// //HOOKS
// import { useContext } from "react";
import { useDrag } from "react-dnd";

//STYLES
import './Task.css';
import DeleteButton from "./DeleteButton"
/*-------------------------------------------------------------------*/

function Task ({currentBoard, currentTaskList, setCurrentTaskList, task}){
    console.log("The Task component has rendered");
    console.log("Task Details:", task, "Current Board:", currentBoard, "Current Task List:", currentTaskList);

    //taskList context props
    // const {currentBoard, setCurrentBoard} = useContext(TaskListContext)
    
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
           const updatedTaskList = currentTaskList.filter((task)=>task.id !== taskId);
           setCurrentTaskList(updatedTaskList);
       }

    return (
    <>
        <ul ref={currentBoard.isArchived ? null : drag} className={`task-container ${isDragging && "red-border"}`} draggable="true">
            <li>
                <h2>
                <Link to={`/current-board/${currentBoard.id}/${task.id}`}>{task.title}</Link>
                </h2>
            </li>
            <li className="task-text">Assignee: {task.assignee}</li>
            <li className="task-text">Priority: {task.priority}</li>
            {!currentBoard.isArchived && <li><DeleteButton handleF={handleDeleteTask} /></li>}
        </ul>
    </>
    )
}

export default Task;