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
        { id: "board 1", taskList: KanbanJson },
        {
          id: "board 2",
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
        { id: "board 3", taskList: [] },
      ]);   
    },[])

    const taskListStatesArray = boardsArray.map(board => {
        function CreateTaskListStateVariable () {
            const [taskList, setTaskList] = useState(board.taskList)
            return({
              taskList,
              setTaskList
          })
          }
        return(CreateTaskListStateVariable)
    })
    console.log("THIS IS THE TASK LIST STATES ARRAY", taskListStatesArray);
 
  const [currentTaskList, setCurrentTaskList] = useState(KanbanJson);

  return (
    <TaskListContext.Provider value={{ currentTaskList, setCurrentTaskList }}>
      {props.children}
    </TaskListContext.Provider>
  );
}

export { TaskListContext, TaskListProviderWrapper };
