//CONTEXT
import { TaskListContext } from "../Contexts/taskLists.context";

//HOOKS
import { useContext, useState } from "react";
import { useDrop } from "react-dnd";

//COMPONENTS
import List from "./List";
import CreateTaskForm from "./CreateTaskForm";

//STYLES
import "./CurrentBoard.css";

/*-------------------------------------------------------------------*/

function CurrentBoard() {
  //taskList context props
  const {currentTaskList, setCurrentTaskList} = useContext(TaskListContext)

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
          taskList={currentTaskList}
          setTaskList={setCurrentTaskList}
          showForm={setShowCreateTaskForm}
        />
      )}
    </div>
  );
}

export default CurrentBoard;
