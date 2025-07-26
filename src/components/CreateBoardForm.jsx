import { useState, useContext } from "react";
import { TaskListContext } from "../Contexts/taskLists.context";
import "./CreateBoardForm.css";

/*-------------------------------------------------------------------*/

function CreateBoardForm() {
  console.log("The CreateBoardForm component has rendered");

  const { setBoardsArray } = useContext(TaskListContext);

    // State for the board name input
  const [boardName, setBoardName] = useState("");

    // Function to create a new board object
  function createBoard(boardName) {
    return {
      id: crypto.randomUUID(),
      boardName: boardName,
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
  };

  return (
    <form onSubmit={handleSubmit} className="create-board-form hidden">
      <input
        type="text"
        value={boardName}
        onChange={(e) => setBoardName(e.target.value)}
        placeholder="Enter board name"
        required
      />
      <button type="submit">Create Board</button>
    </form>
  );
}

export default CreateBoardForm;
