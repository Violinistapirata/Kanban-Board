//DATA
import KanbanJson from "../data/kanban.json";

//HOOKS
import { createContext, useState, useEffect } from "react";

/*-------------------------------------------------------------------*/
const TaskListContext = createContext();

function TaskListProviderWrapper(props) {
  console.log("The taskList.context component has rendered");
  const [boardsArray, setBoardsArray] = useState(null);

  // Function to load data from localStorage
  const loadData = () => {
    const storedBoards = localStorage.getItem("boardsArray");
    if (storedBoards) {
      setBoardsArray(JSON.parse(storedBoards));
    } else {
      setBoardsArray(KanbanJson);
    }
  };
  // Load data from localStorage when the component mounts
  !boardsArray && loadData();

  // Save the boardsArray to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("boardsArray", JSON.stringify(boardsArray));
  }, [boardsArray]);

  //Initialize states for my boards and the archived boards
  const [myBoardsArray, setMyBoardsArray] = useState([]);
  const [archivedBoardsArray, setArchivedBoardsArray] = useState([]);

  useEffect(() => {
    const filteredBoardsArray = boardsArray.filter((board) => !board.isArchived);
    setMyBoardsArray(filteredBoardsArray);
    const filteredArchivedBoardsArray = boardsArray.filter((board) => board.isArchived);
    setArchivedBoardsArray(filteredArchivedBoardsArray);
  }, [boardsArray]);

  // Instead, if we have a backend database with the boards data we could fetch it like this when the app mounts
  /*  
    fetch("BACKEND URL")
    .then(response => response.json())
    .then(response => setBoardsArray(response))    
    */

  /* const taskListStatesArray = boardsArray.map((board) => {
    function CreateTaskListStateVariable() {
      const [taskList, setTaskList] = useState(board.taskList);
      return {
        taskList,
        setTaskList,
      };
    }
    return CreateTaskListStateVariable;
  }); */

  return (
    <TaskListContext.Provider
      value={{
        boardsArray,
        setBoardsArray,
        myBoardsArray,
        setMyBoardsArray,
        archivedBoardsArray,
        setArchivedBoardsArray
      }}
    >
      {props.children}
    </TaskListContext.Provider>
  );
}

export { TaskListContext, TaskListProviderWrapper };
