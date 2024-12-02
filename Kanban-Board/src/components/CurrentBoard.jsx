// CSS
import "./CurrentBoard.css";

// COMPONENTS
import List from "./List";
import CreateTaskForm from "./CreateTaskForm";
import { useState } from "react";
import { useDrop } from "react-dnd";

function CurrentBoard({ taskList, setTaskList }) {
  const [showCreateTaskForm, setShowCreateTaskForm] = useState(false);
    const [, drop] =useDrop(()=>({
        accept: "task",
        drop: (item)=> changeTaskStatus(item.id, "To Do"),
    }))
    const [, drop2] =useDrop(()=>({
        accept: "task",
        drop: (item)=> changeTaskStatus(item.id, "In Progress"),            
    }))
    const [, drop3] =useDrop(()=>({
        accept: "task",
        drop: (item)=> changeTaskStatus(item.id, "Done"),
    }))
    
    
    function changeTaskStatus(taskId, newStatus) {
        const draggedTask = taskList.find((task)=> task.id === taskId);
        draggedTask.status = newStatus;

        setTaskList([...taskList])
    }
    
  return (
      <div className="current-board-container">
        <div>
          <h1>TO DO</h1>
          <div className="task-scroll" ref={drop}>
            <List
              taskList={taskList}
              setTaskList={setTaskList}
              taskStatus="To Do"
            />
          </div>

          <button
            className="add-task-button"
            onClick={() => setShowCreateTaskForm(true)}
          >
            Add Task
          </button>
        </div>
        <div>
          <h1>IN PROGRESS</h1>
          <div className="task-scroll" ref={drop2}>
            <List
              taskList={taskList}
              setTaskList={setTaskList}
              taskStatus="In Progress"
            />
          </div>
        </div>
        <div>
          <h1>DONE</h1>

          <div className="task-scroll" ref={drop3}>
            <List
              taskList={taskList}
              setTaskList={setTaskList}
              taskStatus="Done"
            />
          </div>
        </div>

        {showCreateTaskForm && (
          <CreateTaskForm
            taskList={taskList}
            setTaskList={setTaskList}
            showForm={setShowCreateTaskForm}
          />
        )}
      </div>

  );
}

export default CurrentBoard;
