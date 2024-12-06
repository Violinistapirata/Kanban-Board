//CONTEXT
import { TaskListContext } from "../Contexts/taskLists.context";

//HOOKS
import { useContext, useEffect, useState } from "react";
import { useDrop } from "react-dnd";
import { useParams } from "react-router-dom";

//COMPONENTS
import List from "./List";
import CreateTaskForm from "./CreateTaskForm";

//STYLES
import "./CurrentBoard.css";

/*-------------------------------------------------------------------*/

function CurrentBoard() {
  //taskList context props
  const {currentBoard, setCurrentBoard, boardsArray} = useContext(TaskListContext)

  const { boardId } = useParams();
  const selectedBoard = boardsArray.find((board) => board.id == boardId);

  useEffect(()=>{
    setCurrentBoard(selectedBoard);
  }, [])

  console.log("THIS IS THE CURRENT BOARD", currentBoard);
  const currentTaskList = currentBoard.taskList;

  console.log("THIS IS THE CURRENT TASKLIST", currentTaskList);
  
  const {taskList, setTaskList} = useState(currentTaskList)

  
  console.log("THIS IS THE TASKLIST STATE", taskList);
  //Add-task form state
  const [showCreateTaskForm, setShowCreateTaskForm] = useState(false);

  //Drag-and-drop functionality
  const [, drop] = useDrop(() => ({
    accept: "task",
    drop: (item) => changeTaskStatus(item.id, "To Do"),
  }));
  const [, drop2] = useDrop(() => ({
    accept: "task",
    drop: (item) => changeTaskStatus(item.id, "In Progress"),
  }));
  const [, drop3] = useDrop(() => ({
    accept: "task",
    drop: (item) => changeTaskStatus(item.id, "Done"),
  }));

  function changeTaskStatus(taskId, newStatus) {
    const droppedTask = currentTaskList.find((task) => task.id === taskId);
    droppedTask.status = newStatus;

    setTaskList([...currentTaskList]);
  }

  return (
    <div className="current-board-container">
      <div>
        <h1>TO DO</h1>
        <div className="task-scroll" ref={drop}>
          <List
            listStatus="To Do"
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
            listStatus="In Progress"
          />
        </div>
      </div>
      <div>
        <h1>DONE</h1>

        <div className="task-scroll" ref={drop3}>
          <List
            listStatus="Done"
          />
        </div>
      </div>

      {showCreateTaskForm && (
        <CreateTaskForm
          showForm={setShowCreateTaskForm}
        />
      )}
    </div>
  );
}

export default CurrentBoard;
