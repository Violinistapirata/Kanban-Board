//CONTEXT
import { TaskListContext } from "../Contexts/taskLists.context";

//HOOKS
import { useContext, useState } from "react";
import { useParams } from "react-router-dom";

//STYLES
import "./UpdateTaskForm.css";

/*-------------------------------------------------------------------*/

function UpdateTaskForm({ task, showForm }) {
  //taskList context props
  const { boardsArray, setBoardsArray} = useContext(TaskListContext);
  const {boardId} = useParams()

  //States from the form inputs
  const [inputs, setInputs] = useState({
    title: task.title,
    description: task.description,
    assignee: task.assignee,
    priority: task.priority,
    dueDate: task.dueDate,
    status: task.status,
  });

  //Handle function for the inputs
  const handleInput = (e) => {
    const value = e.target.value;
    setInputs({ ...inputs, [e.target.name]: value });
  };

  //Function for the form's onSubmit event listener
  const handleUpdateTask = (e) => {
    e.preventDefault();
    const currentBoard = boardsArray.find(board => board.id === boardId)
    const currentBoardIndex = boardsArray.indexOf(currentBoard)
    const currentTaskList = currentBoard.taskList
    console.log(currentBoard.taskList);
    const taskIndex = currentTaskList.indexOf(task);
    const updatedTaskList = [...currentTaskList];

    updatedTaskList.splice(taskIndex, 1, updatedTask);
    const newBoard = {...currentBoard, taskList: updatedTaskList}
    const boardsArrayCopy = [...boardsArray]
    boardsArrayCopy.splice(currentBoardIndex, 1, newBoard)
    setBoardsArray(boardsArrayCopy);
    showForm(false);
  };

  const {title, description, assignee, priority, dueDate, status } = inputs
  let updatedTask = {
    id: task.id,
    title: title,
    description: description,
    assignee: assignee,
    status: status,
    priority: priority,
    createdDate: task.createdDate,
    lastUpdate: new Date().toLocaleDateString("en-CA"),
    dueDate: dueDate,
  };

  return (
    <>
      <div className="update-task-container">
        <h1>EDIT TASK</h1>

        <form onSubmit={handleUpdateTask}>
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={handleInput}
          />

          <label htmlFor="description">Description: </label>
          <textarea
            name="description"
            value={description}
            onChange={handleInput}
          />

          <label htmlFor="assignee">Assignee: </label>
          <input
            type="text"
            name="assignee"
            value={assignee}
            onChange={handleInput}
          />

          <label htmlFor="priority">Priority: </label>
          <select
            name="priority"
            value={priority}
            onChange={handleInput}
          >
            <option value="-Choose priority-">-Choose priority-</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>

          <label htmlFor="due-date">Due Date: </label>
          <input
            type="date"
            name="due-date"
            value={dueDate}
            onChange={handleInput}
          />

          <label htmlFor="status">Status: </label>
          <select
            name="status"
            value={status}
            onChange={handleInput}
          >
            <option value="-Choose status-">-Choose status-</option>
            <option value="To Do">To Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
          </select>

          <button type="submit">Update task</button>
          <button id="x" onClick={() => showForm(false)}>
            X
          </button>
        </form>
      </div>
    </>
  );
}

export default UpdateTaskForm;
