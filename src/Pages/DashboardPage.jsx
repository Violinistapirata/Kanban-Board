//ROUTES
import { Link } from "react-router-dom";

//CONTEXT
import { TaskListContext } from "../Contexts/taskLists.context";

//HOOKS
import { useState } from "react";

//COMPONENTS
import CreateBoardForm from "../components/CreateBoardForm";
import DeleteButton from "../components/DeleteButton";
import ConfirmationPrompt from "../components/ConfirmationPrompt";
// import CurrentBoard from "../components/CurrentBoard";

//STYLES
import "./DashboardPage.css";
import { useContext } from "react";
/*-------------------------------------------------------------------*/

function DashboardPage() {
  console.log("The DashboardPage component has rendered");
  const { boardsArray } = useContext(TaskListContext);

  // State for the Add-board form
  const [showForm, setShowForm] = useState(false);
  const [showConfirmationPrompt, setShowConfirmationPrompt] = useState(false);
  const [selectedBoard, setSelectedBoard] = useState(null);
  /* function handleDeleteBoard (boardId) {

    } */
  function handleShowConfirmationPrompt(boardId) {
    console.log("THIS IS THE BOARD ID:", boardId);

    setShowConfirmationPrompt(true);
    const selectedBoard = boardsArray.find((board) => board.id === boardId);
    console.log("THIS IS THE SELECTED BOARD:", selectedBoard);
    
    setSelectedBoard(selectedBoard);
  }

  return (
    <div className="boards-container">
      <div className="boards-sub-container">
        {showConfirmationPrompt && <ConfirmationPrompt selectedBoard={selectedBoard} setShowConfirmationPrompt={setShowConfirmationPrompt}/>}
        <h1>MY BOARDS</h1>
        <div className="dashboard__boards-scroll">
          {boardsArray.map((board) => {
            return (
              <article key={board.id} className="board-card">
                <Link to={`/current-board/${board.id}`}>
                  <h2>{board.name}</h2>
                </Link>
                <DeleteButton
                  handleF={() => handleShowConfirmationPrompt(board.id)}
                />
              </article>
            );
          })}
          {/* {boardsArray.map(board => <CurrentBoard key={board.id} taskList={board.taskList} /> )} */}
        </div>
        {showForm && <CreateBoardForm setShowForm={setShowForm} />}
        <button
          className="create-board-button"
          onClick={() => setShowForm(true)}
        >
          Add New Board
        </button>
      </div>
    </div>
  );
}

export default DashboardPage;
