//DATA
import KanbanJson from "../data/kanban.json";

//HOOKS
import { createContext, useState, useEffect } from "react";

/*-------------------------------------------------------------------*/
const TaskListContext = createContext();

function TaskListProviderWrapper(props) {
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  const [boardsArray, setBoardsArray] = useState(state.data || []); // Initialize boardsArray with an empty array or state data

  // Load data from localStorage or KanbanJson when the component mounts
  // If localStorage has data, use it; otherwise, use KanbanJson and save it to localStorage
  useEffect(() => {
    const loadData = async () => {
      try {
    const storedBoards = localStorage.getItem("boardsArray");
    if (storedBoards) {
      setState({data: JSON.parse(storedBoards), loading: false, error: null});
    } else {
    setState({data: JSON.parse(KanbanJson), loading: false, error: null});
    localStorage.setItem("boardsArray", JSON.stringify(KanbanJson));
    }
    } catch (err) {
        setState({ data: null, loading: false, error: err.message });
      }
    }

    loadData();
  }, []);

  // Update boardsArray when state.data changes
  useEffect(() => {
      if (state.data) {
        setBoardsArray(state.data);
      }
    }, [state.data]);
      /* { id: "1", name: "board 1", taskList: KanbanJson },
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
       */
   
    
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
      }}
    >
      {props.children}
    </TaskListContext.Provider>
  );
}

export { TaskListContext, TaskListProviderWrapper };
