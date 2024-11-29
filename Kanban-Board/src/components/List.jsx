// COMPONENTS
import Task from "./Task";
import "./List.css";

function List({ taskList, setTaskList, taskStatus }) {
  const filteredTasks = (parameter) => taskList.filter(task => task.status === parameter)
  console.log(taskStatus);
  
  return (
    <>
      {taskList.length > 0 &&
        filteredTasks(`${taskStatus}`).map((task) => (
          <Task
            key={task.id}
            task={task}
            taskList={taskList}
            setTaskList={setTaskList}
          />
        ))}
    </>
  );
}

export default List;
