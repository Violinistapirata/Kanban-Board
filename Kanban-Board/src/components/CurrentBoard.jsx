// CSS
import "./CurrentBoard.css";

// COMPONENTS
import List from "./List";
import CreateTaskForm from "./CreateTaskForm";
import { useState } from "react";

function CurrentBoard({ taskList, setTaskList }) {
  const [showCreateTaskForm, setShowCreateTaskForm] = useState(false);

  return (
    <div className="current-board-container">
        <div>
            <h1>TO DO</h1>
            <div className="task-scroll">
                <List
                    taskList={taskList}
                    setTaskList={setTaskList}
                    taskStatus="To Do"
                />
            </div>
            
            <button className="add-task-button" onClick={()=>setShowCreateTaskForm(true)}>Add Task</button>
        </div>
        <div>
            <h1>DOING</h1>
            <div className="task-scroll">
                <List
                    taskList={taskList}
                    setTaskList={setTaskList}
                    taskStatus="In Progress"
                />
            </div>
            
        </div>
        <div>
            <h1>DONE</h1>

            <div className="task-scroll">
                <List
                    taskList={taskList}
                    setTaskList={setTaskList}
                    taskStatus="Done"
                />
            </div>
            
        </div>
    
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
