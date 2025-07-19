// HOOKS
import { useContext, useState } from "react";

//STYLES
import "./CreateTaskForm.css";

import { TaskListContext } from "../Contexts/taskLists.context";
import { useParams } from "react-router-dom";

/*-------------------------------------------------------------------*/

function CreateTaskForm({
  showForm,
  currentTaskList,
  setCurrentTaskList,
  currentBoard,
  }) {
  //States from the form inputs
  const { boardsArray, setBoardsArray } = useContext(TaskListContext);
  const {boardId} = useParams()

  const [inputs, setInputs] = useState({
    title: "Unknown title",
    description: "",
    assignee: "",
    priority: "Choose priority",
    dueDate: "not assigned",
  });

  //Handle function for the inputs
  const handleInput = (e) => {
    const value = e.target.value;
    setInputs({ ...inputs, [e.target.name]: value });
  };

  //Function for the add task button (submit)
  function handleAddTask(e) {
    e.preventDefault();
    const newTaskList = [...currentTaskList, newTask];
    console.log("BEFORE SETCURRENTTASKLIST", currentTaskList);
    setCurrentTaskList(() => newTaskList);
    console.log("AFTER SETCURRENTTASKLIST", currentTaskList);
    const newBoard = { ...currentBoard, taskList: newTaskList };
    console.log(boardsArray);
    const currentBoardIndex = boardsArray.indexOf(
      boardsArray.find((board) => board.id === boardId)
    );
    const boardsArrayCopy = [...boardsArray];
    boardsArrayCopy.splice(
      currentBoardIndex,
      1,
      newBoard
    );
    const newBoardsArray = boardsArrayCopy
    setBoardsArray(newBoardsArray);
    console.log(boardsArray);

    showForm(false);
  }

  const { title, description, assignee, priority, dueDate } = inputs;
  let newTask = {
    id: Math.floor(Math.random() * 999999).toString(),
    title,
    description,
    assignee,
    status: "To Do",
    priority,
    createdDate: new Date().toLocaleDateString("en-CA"),
    dueDate,
  };

  return (
    <>
      <div className="create-task-container">
        <h1>NEW TASK</h1>

        <form onSubmit={handleAddTask}>
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
          <select name="priority" value={priority} onChange={handleInput}>
            <option value="-Choose priority-">-Choose priority-</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>

          <label htmlFor="due-date">Due Date: </label>
          <input
            type="date"
            name="dueDate"
            value={dueDate}
            onChange={handleInput}
          />

          <button type="submit">Add task</button>
          <button id="x" onClick={() => showForm(false)}>
            X
          </button>
        </form>
      </div>
    </>
  );
}

export default CreateTaskForm;
