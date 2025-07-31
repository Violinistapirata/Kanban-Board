//ROUTES
import { Link } from "react-router-dom";

//CONTEXT
import { TaskListContext } from "../Contexts/taskLists.context";

//HOOKS
import { useState } from "react";
import { useContext } from "react";

//COMPONENTS
import CreateBoardForm from "../components/CreateBoardForm";
// import DeleteButton from "../components/DeleteButton";
import ConfirmationPrompt from "../components/ConfirmationPrompt";
import NewBoardButton from "../components/NewBoardButton";
// import CurrentBoard from "../components/CurrentBoard";

//STYLES
import "./DashboardPage.css";
import ArchiveButton from "../components/ArchiveButton";
import EditButton from "../components/EditButton";

/*-------------------------------------------------------------------*/

function DashboardPage() {
  console.log("The DashboardPage component has rendered");
  const { boardsArray, setBoardsArray, myBoardsArray, setMyBoardsArray, archivedBoardsArray, setArchivedBoardsArray } = useContext(TaskListContext);

  // State for the Add-board form
  const [showForm, setShowForm] = useState(false);
  const [showEditNameInput, setShowEditNameInput] = useState(false);
  const [boardToEdit, setBoardToEdit] = useState(null)
  const [boardName, setBoardName] = useState(boardToEdit && boardToEdit.name || "" );
  const [showConfirmationPrompt, setShowConfirmationPrompt] = useState(false);
  const [boardToDelete, setBoardToDelete] = useState(null);

  console.log("THIS IS THE BOARD TO EDIT:", boardToEdit);
  
  function handleEditBoardName(e) {
    e.preventDefault();

    boardToEdit.name = boardName;
    setBoardsArray([...boardsArray])
    setBoardName("");
    setBoardToEdit(null);
    setShowEditNameInput(false);
  }

  function handleInput(e) {
    const value = e.target.value;
    setBoardName(value);
  }

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
                  <form onSubmit={handleEditBoardName}>
                    <input
                      value={boardName}
                      placeholder={board.name}
                      onChange={handleInput}
                    ></input>
                  </form>
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
