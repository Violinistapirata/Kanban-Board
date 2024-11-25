// CSS
import "./CurrentBoard.css";

// COMPONENTS
import List from "./List";
import CreateTaskForm from "./CreateTaskForm";
import { useState } from "react";

function CurrentBoard({taskList, setTaskList}) {
  
  const [showCreateTaskForm, setShowCreateTaskForm] = useState(true);
  // const [showUpdateTaskForm, setShowUpdateTaskForm] = useState(false)
  console.log(taskList);
  
  if (showCreateTaskForm)
    return (
      <CreateTaskForm
        taskList={taskList}
        setTaskList={setTaskList}
        showForm={setShowCreateTaskForm}
      />
    );
  // {showUpdateTaskForm && <UpdateTaskForm />};
  return (
    <div>
      <List
        taskList={taskList}
        setTaskList={setTaskList}
      />
    </div>
  );
}

export default CurrentBoard;
