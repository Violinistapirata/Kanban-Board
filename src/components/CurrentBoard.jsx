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
  console.log("The CurrentBoard component has rendered");
  //taskList context props
  const { boardsArray, setBoardsArray } = useContext(TaskListContext);
  console.log("Boards Array:", boardsArray);  
  const { boardId } = useParams();
  console.log("Current Board ID:", boardId);
  const selectedBoard = boardsArray.find((board) => board.id === boardId);
  const [currentBoard, setCurrentBoard] = useState(selectedBoard || {});
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
    setCurrentTaskList(prevTaskList =>
    prevTaskList.map(task =>
      task.id === taskId ? { ...task, status: newStatus } : task
    )
  );
    /* const droppedTask = currentTaskList.find((task) => task.id === taskId);
    console.log("CurrentTaskList:", currentTaskList);
    console.log("Dropped Task:", droppedTask);
    if (!droppedTask) {
      console.error("Task not found:", taskId);
      return;
    }
    droppedTask.status = newStatus;
    console.log("Updated Task:", droppedTask);
    setCurrentTaskList([...currentTaskList]); */
  }

  // Effect to set the current board and task list based on the boardId from the URL
  /* useEffect(() => {
  
  console.log("Selected Board:", selectedBoard);
  setCurrentBoard(selectedBoard || {});
  setCurrentTaskList(selectedBoard ? selectedBoard.taskList : []);
  }, [boardId, boardsArray]); */
  
  // Update the current board and task list in localStorage when they change
  useEffect(() => {
    console.log("The useEffect that updates boardsArray has run");
    currentBoard.taskList = currentTaskList;
    console.log("Updated Current Board:",currentBoard, currentBoard.taskList);
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
  }, [currentTaskList]);

  // Update the current board when the boardId changes
  useEffect(() => {
    if (selectedBoard) {
      setCurrentBoard(selectedBoard);
      setCurrentTaskList(selectedBoard.taskList || []);
      console.log("Current Board and Task List updated based on boardId:", boardId);
    }
  }, [boardId, selectedBoard]);

  return (
    <div className="current-board-container">
      <div>
        <h1>TO DO</h1>
        <div className="task-scroll" ref={drop}>
          <List
            listStatus="To Do"
            currentTaskList={currentTaskList}
            setCurrentTaskList={setCurrentTaskList}
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
            currentTaskList={currentTaskList}
            setCurrentTaskList={setCurrentTaskList}
            currentBoard={currentBoard}
          />
        </div>
      </div>
      <div>
        <h1>DONE</h1>

        <div className="task-scroll" ref={drop3}>
          <List
            listStatus="Done"
            currentTaskList={currentTaskList}
            setCurrentTaskList={setCurrentTaskList}
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
