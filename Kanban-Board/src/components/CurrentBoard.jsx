// CSS
import "./CurrentBoard.css";

// COMPONENTS
import List from "./List";
import CreateTaskForm from "./CreateTaskForm";
// import UpdateTaskForm from "./UpdateTaskForm";
import { useState } from "react";

function CurrentBoard({ taskList, setTaskList }) {
  const [showCreateTaskForm, setShowCreateTaskForm] = useState(false);
//   const [showUpdateTaskForm, setShowUpdateTaskForm] = useState(false)
  console.log(taskList);

//   {showUpdateTaskForm && <UpdateTaskForm />};
  return (
    <div className="current-board-container"> 
        <h1>TO DO</h1>
      <List
        taskList={taskList}
        setTaskList={setTaskList}
        setShowCreateTaskForm={setShowCreateTaskForm}
      />
      {showCreateTaskForm &&
      <CreateTaskForm
        taskList={taskList}
        setTaskList={setTaskList}
        showForm={setShowCreateTaskForm}

      />}
    </div>
    );
}

export default CurrentBoard;
