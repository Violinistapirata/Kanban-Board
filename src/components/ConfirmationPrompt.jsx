
//CONTEXT
import { TaskListContext } from "../Contexts/taskLists.context";

//HOOKS
import { useContext, useState, useEffect } from "react";

//STYLES
import "./ConfirmationPrompt.css"

/*-------------------------------------------------------------------*/

function ConfirmationPrompt({
  boardToDelete,
  setBoardToDelete,
  setShowConfirmationPrompt,
}) {
  console.log(boardToDelete);
  const { boardsArray, setBoardsArray } = useContext(TaskListContext);

  const [boardIsDeleted, setBoardIsDeleted] = useState(false);
  const [countDown, setCountDown] = useState(5);

  function handleDeleteBoard(boardId) {
    const updatedBoardsArray = boardsArray.filter(
      (board) => board.id !== boardId
    );
    setBoardsArray(updatedBoardsArray);
    setBoardIsDeleted(true);
  }

  //count down
  useEffect(() => {
    if (boardIsDeleted && countDown > 0) {    
        const timer = setTimeout(() => setCountDown(countDown - 1), 1000);
        return () => clearTimeout(timer);
    } else if (boardIsDeleted && countDown === 0) {    
      setShowConfirmationPrompt(false);
      setBoardIsDeleted(false);
      setBoardToDelete(null);
      setCountDown(5);
    }

  }, [boardIsDeleted, countDown]);

  return (
    <div className="prompt-container">
      <h3>Delete confirmation</h3>
      {!boardIsDeleted ? (
        <>
          <p>You are going to delete {boardToDelete.name}.</p>
          <p>Do you wish to proceed?</p>
          <div>
            <button
              type="button"
              className="cancel-btn"
              onClick={() => setShowConfirmationPrompt(false)}
            >
              Wait, don&apos;t delete it
            </button>
            <button
              type="button"
              onClick={() => handleDeleteBoard(boardToDelete.id)}
            >
              Yes, delete it
            </button>
          </div>
        </>
      ) : (
        <>
          <p>{boardToDelete.name} deleted successfully.</p>
          <p>Back to Archived Boards in {countDown}</p>
        </>
      )}
      <button type="button" onClick={() => setShowConfirmationPrompt(false)} className="close-btn"> X </button>
    </div>
  );
}

export default ConfirmationPrompt;
