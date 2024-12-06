//CONTEXT
import { TaskListContext } from "../Contexts/taskLists.context";

//HOOKS
import { useContext, useState } from "react";
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
  const {boardsArray} = useContext(TaskListContext)
  const { boardId } = useParams();
  const selectedBoard = boardsArray.find((board) => board.id == boardId);
  const [currentBoard, setCurrentBoard] = useState(selectedBoard)
  const [currentTaskList, setCurrentTaskList] = useState(currentBoard.taskList)
  currentBoard !== selectedBoard && setCurrentBoard(selectedBoard) 
  // !currentTaskList && setCurrentTaskList(currentBoard.taskList)


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
    
    setCurrentTaskList([...currentTaskList]);
  }

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
