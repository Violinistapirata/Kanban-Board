//COMPONENTS
import Task from "./Task";

//STYLES
import "./List.css";

/*-------------------------------------------------------------------*/

function List({listStatus, currentTaskList, setCurrentTaskList, currentBoard}) {
  console.log("The List component has rendered");
  console.log("listStatus:", listStatus, "currentTaskList:", currentTaskList, "currentBoard:", currentBoard);
  const filteredTasks = () => currentTaskList.filter(task => task.status === listStatus);
  return (
    <>
      {currentTaskList &&
        filteredTasks().map((task) => (
          <Task
            key={task.id}
            currentBoard={currentBoard}
            currentTaskList={currentTaskList}
            setCurrentTaskList={setCurrentTaskList}
            task={task}
          />
        ))}
    </>
  );
}

export default List;
