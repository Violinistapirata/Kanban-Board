//COMPONENTS
import Task from "./Task";

//STYLES
import "./List.css";

/*-------------------------------------------------------------------*/

function List({listStatus, taskList, setTaskList, currentBoard}) {

  const filteredTasks = () => taskList.filter(task => task.status === listStatus);
  
  return (
    <>
      {taskList &&
        filteredTasks().map((task) => (
          <Task
            key={task.id}
            currentBoard={currentBoard}
            taskList={taskList}
            setTaskList={setTaskList}
            task={task}
          />
        ))}
    </>
  );
}

export default List;
