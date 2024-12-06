//CONTEXT
import { TaskListContext } from "../Contexts/taskLists.context";

//HOOKS
import { useContext } from "react";

//COMPONENTS
import Task from "./Task";

//STYLES
import "./List.css";

/*-------------------------------------------------------------------*/

function List({listStatus}) {

  //taskList context props
  const {currentBoard} = useContext(TaskListContext)
  const currentTaskList = currentBoard.taskList
  const filteredTasks = () => currentTaskList.filter(task => task.status === listStatus)
  
  return (
    <>
      {currentTaskList &&
        filteredTasks().map((task) => (
          <Task
            key={task.id}
            task={task}
          />
        ))}
    </>
  );
}

export default List;
