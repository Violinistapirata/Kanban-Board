import { useState, useContext } from "react";
import { TaskListContext } from "../Contexts/taskLists.context";
import "./CreateBoardForm.css";

/*-------------------------------------------------------------------*/

function CreateBoardForm({ setShowForm }) {
  console.log("The CreateBoardForm component has rendered");

  const { setBoardsArray } = useContext(TaskListContext);

    // State for the board name input
  const [boardName, setBoardName] = useState("");

    // Function to create a new board object
  function createBoard(boardName) {
    return {
      id: crypto.randomUUID(),
      name: boardName,
      taskList: [],
      isArchived: false,
    };
  }
    // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (boardName.trim() === "") return; // Prevent empty board names

    const newBoard = createBoard(boardName);
    setBoardsArray((prevBoards) => [...prevBoards, newBoard]);
    setBoardName(""); // Reset the input field
    setShowForm(false); // Close the form after submission
  };

  return (
    <form onSubmit={handleSubmit} className="create-board-form">
      <input
        type="text"
        value={boardName}
        onChange={(e) => setBoardName(e.target.value)}
        placeholder="Enter board name"
        required
      />
      <button type="submit">Create Board</button>
      <button type="button" onClick={() => setShowForm(false)}>Cancel</button>
    </form>
  );
}

export default CreateBoardForm;
