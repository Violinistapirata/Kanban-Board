//DATA
import KanbanJson from "../data/kanban.json";

//HOOKS
import { createContext, useEffect } from "react";
import { useState } from "react";
/*-------------------------------------------------------------------*/
const TaskListContext = createContext();

function TaskListProviderWrapper(props) {
  const [boardsArray, setBoardsArray] = useState([]);
 
  

  useEffect(() => {
    setBoardsArray([
      { id: "1", name: "board 1", taskList: KanbanJson },
      {
        id: "2",
        name: "board 2",
        taskList: [
          {
            id: "1",
            title: "Design Landing Page",
            description:
              "Create a visually appealing landing page for the website.",
            assignee: "Mary Davis",
            status: "To Do",
            priority: "High",
            createdDate: "2023-09-15",
            dueDate: "2023-09-30",
          },
        ],
      },
      { id: "3", name: "board 3",taskList: [] },
      
    ]);
    // Instead, if we have a backend database with the boards data we could fetch it like this when the app mounts
    /*  
    fetch("BACKEND URL")
    .then(response => response.json())
    .then(response => setBoardsArray(response))    
    */
}, []);
console.log(boardsArray);
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
      }}
    >
      {props.children}
    </TaskListContext.Provider>
  );
}

export { TaskListContext, TaskListProviderWrapper };
