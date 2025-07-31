//ROUTES
import { Link } from "react-router-dom";

//CONTEXT
import { TaskListContext } from "../Contexts/taskLists.context";

//HOOKS
import { useState } from "react";
import { useContext } from "react";

//COMPONENTS
import DeleteButton from "../components/DeleteButton";
import ConfirmationPrompt from "../components/ConfirmationPrompt";
import UnarchiveButton from "../components/UnarchiveButton";

//STYLES
import "./DashboardPage.css";

/*-------------------------------------------------------------------*/

function ArchivedBoardsPage() {
  console.log("The ArchivedBoardsPage component has rendered");
  const { archivedBoardsArray } = useContext(TaskListContext);

  //Delete function states
  const [showConfirmationPrompt, setShowConfirmationPrompt] = useState(false);
  const [boardToDelete, setBoardToDelete] = useState(null);

  
  function handleShowConfirmationPrompt(boardId) {
    console.log("THIS IS THE BOARD ID:", boardId);

    setShowConfirmationPrompt(true);
    const selectedBoard = archivedBoardsArray.find((board) => board.id === boardId);
    console.log("THIS IS THE SELECTED BOARD:", selectedBoard);

    setBoardToDelete(selectedBoard);
  }

  return (
    <div className="boards-container">
      <div className="boards-sub-container">
        {showConfirmationPrompt && (
          <ConfirmationPrompt
            boardToDelete={boardToDelete}
            setBoardToDelete={setBoardToDelete}
            setShowConfirmationPrompt={setShowConfirmationPrompt}
          />
        )}
        <h1>ARCHIVED BOARDS</h1>
        <div className="dashboard__boards-scroll">
          {archivedBoardsArray.map((board) => {
            return (
              <article key={board.id} className="board-card">
                <Link to={`/current-board/${board.id}`}>
                  <h2>{board.name}</h2>
                </Link>
                <UnarchiveButton selectedBoard={board} />
                <DeleteButton
                  handleF={() => handleShowConfirmationPrompt(board.id)}
                />
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ArchivedBoardsPage;
