// COMPONENTS
import Task from "./Task";

// HOOKS
import { useState } from "react";

function List({ taskList }) {
    const [currentTaskList, setCurrentTaskList] = useState(taskList);

  return (
    <>
      {currentTaskList.map((task) => (
        
        <Task key={task.id} task={task} currentTaskList={currentTaskList} setCurrentTaskList={setCurrentTaskList} />
    
      ))}
    </>
  );
}

export default List;
