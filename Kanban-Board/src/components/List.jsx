// COMPONENTS
import Task from "./Task";


function List({ taskList, setTaskList, setShowCreateTaskForm }) {

  return (
    <>
      {taskList.length > 0 && taskList.map((task) => <Task key={task.id} task={task} taskList={taskList} setTaskList={setTaskList} />
      )}
      <br/>
      <button className="add-task-button" onClick={()=>setShowCreateTaskForm(true)}>Add Task</button>
    </>
  );
}

export default List;
