//ROUTES
import { Link } from "react-router-dom";

//CONTEXT
import { TaskListContext } from "../Contexts/taskLists.context";

//HOOKS
import { useState } from "react";
import { useContext } from "react";

//COMPONENTS
import CreateBoardForm from "../components/CreateBoardForm";

import ConfirmationPrompt from "../components/ConfirmationPrompt";
import NewBoardButton from "../components/NewBoardButton";
// import CurrentBoard from "../components/CurrentBoard";
import ArchiveButton from "../components/ArchiveButton";
import EditButton from "../components/EditButton";
import EditBoardNameForm from "../components/EditBoardNameForm";

//STYLES
import "./DashboardPage.css";

/*-------------------------------------------------------------------*/

function DashboardPage() {
  console.log("The DashboardPage component has rendered");
  const { myBoardsArray } = useContext(TaskListContext);

  //Create function states
  const [showForm, setShowForm] = useState(false);

  //Edit function states
  const [showEditNameInput, setShowEditNameInput] = useState(false);
  const [boardToEdit, setBoardToEdit] = useState(null);
  const [boardName, setBoardName] = useState(
    (boardToEdit && boardToEdit.name) || ""
  );

  //Delete function states
  const [showConfirmationPrompt, setShowConfirmationPrompt] = useState(false);
  const [boardToDelete, setBoardToDelete] = useState(null);

  const editBoardStateProps = { setShowEditNameInput, boardToEdit, setBoardToEdit, boardName, setBoardName}
  

  //Move this to the ArchivedBoardsPage
  /* function handleShowConfirmationPrompt(boardId) {
    console.log("THIS IS THE BOARD ID:", boardId);

    setShowConfirmationPrompt(true);
    const selectedBoard = boardsArray.find((board) => board.id === boardId);
    console.log("THIS IS THE SELECTED BOARD:", selectedBoard);

    setBoardToDelete(selectedBoard);
  } */

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
        <h1>MY BOARDS</h1>
        <div className="dashboard__boards-scroll">
          {myBoardsArray.map((board) => {
            return (
              <article key={board.id} className="board-card">
                {showEditNameInput && boardToEdit && boardToEdit.id === board.id ? (
                  <EditBoardNameForm board={board} editBoardStateProps={editBoardStateProps} />
                ) : (
                  <Link to={`/current-board/${board.id}`}>
                    <h2>{board.name}</h2>
                  </Link>
                  
                )}
                <ArchiveButton selectedBoard={board}/>
                <EditButton setShowEditNameInput={setShowEditNameInput} setBoardToEdit={setBoardToEdit} board={board}/>
                {/* Move the DeleteButton to the ArchivedBoardsPage*/}
                {/* <DeleteButton
                  handleF={() => handleShowConfirmationPrompt(board.id)}
                /> */}
              </article>
            );
          })}
        </div>
        {showForm && <CreateBoardForm setShowForm={setShowForm} />}
        <NewBoardButton setShowForm={setShowForm} />
      </div>
    </div>
  );
}

export default DashboardPage;
