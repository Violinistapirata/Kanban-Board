// COMPONENTS
import Task from "./Task";


function List({ taskList, setTaskList }) {

  return (
    <>
      {taskList.map((task) => (
        
        <Task key={task.id} task={task} taskList={taskList} setTaskList={setTaskList} />
    
      ))}
    </>
  );
}

export default List;
