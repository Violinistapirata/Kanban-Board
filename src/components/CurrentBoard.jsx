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
  const { boardsArray, setBoardsArray } = useContext(TaskListContext);
  console.log("Boards Array:", boardsArray);  
  const { boardId } = useParams();
  console.log("Current Board ID:", boardId);

  let selectedBoard = null;
  boardsArray && (selectedBoard = boardsArray.find((board) => board.id === boardId)) ;
  console.log("Selected Board:", selectedBoard);
  
  const [currentBoard, setCurrentBoard] = useState(selectedBoard);
  console.log("Current Board State:", currentBoard);
  const [currentTaskList, setCurrentTaskList] = useState(currentBoard.taskList || []);
  console.log("Current Task List State:", currentTaskList);
  
  //State for the Add-task form 
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

  // Function to change the status of a task when dropped and update the task list
  function changeTaskStatus(taskId, newStatus) {
    const droppedTask = currentTaskList.find((task) => task.id === taskId);
    droppedTask.status = newStatus;

    setCurrentTaskList([...currentTaskList]);
  }

  // Update the current board and task list in localStorage when they change
  useEffect(() => {
    currentBoard.taskList = currentTaskList;
    const updatedBoardsArray = boardsArray.map((board) => {
      if (board.id === currentBoard.id) {
        return currentBoard;
      }
      return board;
    }
    );
    // Update the boardsArray state and localStorage
    setBoardsArray(updatedBoardsArray);
    localStorage.setItem("boardsArray", JSON.stringify(updatedBoardsArray));
  }, [currentBoard, currentTaskList]);

  // Update the current board when the boardId changes
  useEffect(() => {
    const updatedBoard = boardsArray.find((board) => board.id == boardId);
    if (updatedBoard) {
      setCurrentBoard(updatedBoard);
      setCurrentTaskList(updatedBoard.taskList);
    }
  }, [boardId, boardsArray]);

  return (
    <div className="current-board-container">
      <div>
        <h1>TO DO</h1>
        <div className="task-scroll" ref={drop}>
          <List
            listStatus="To Do"
            taskList={currentTaskList}
            setTaskList={setCurrentTaskList}
            currentBoard={currentBoard}
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
            taskList={currentTaskList}
            setTaskList={setCurrentTaskList}
            currentBoard={currentBoard}
          />
        </div>
      </div>
      <div>
        <h1>DONE</h1>

        <div className="task-scroll" ref={drop3}>
          <List
            listStatus="Done"
            taskList={currentTaskList}
            setTaskList={setCurrentTaskList}
            currentBoard={currentBoard}
          />
        </div>
      </div>

      {showCreateTaskForm && (
        <CreateTaskForm
          showForm={setShowCreateTaskForm}
          currentTaskList={currentTaskList}
          setCurrentTaskList={setCurrentTaskList}
          currentBoard={currentBoard}
        />
      )}
    </div>
  );
}

export default CurrentBoard;
