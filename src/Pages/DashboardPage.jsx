//ROUTES
import { Link } from "react-router-dom";

//CONTEXT
import { TaskListContext } from "../Contexts/taskLists.context";

//HOOKS
import { useState } from "react";
import { useContext } from "react";

//COMPONENTS
import NewBoardButton from "../components/NewBoardButton";
import CreateBoardForm from "../components/CreateBoardForm";

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

  const editBoardStateProps = { setShowEditNameInput, boardToEdit, setBoardToEdit, boardName, setBoardName}
  

  return (
    <div className="boards-container">
      <div className="boards-sub-container">

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
