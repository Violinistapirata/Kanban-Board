// CSS
import "./CurrentBoard.css";

// COMPONENTS
import List from "./List";
import CreateTaskForm from "./CreateTaskForm";
import { useState } from "react";

function CurrentBoard({taskList, setTaskList}) {
  
  const [showCreateTaskForm, setShowCreateTaskForm] = useState(false);
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
  // if (showUpdateTaskForm) <UpdateTaskForm />;
  return (
    <>
      <List
        taskList={taskList}
        setTaskList={setTaskList}
      />
    </>
  );
}

export default CurrentBoard;
