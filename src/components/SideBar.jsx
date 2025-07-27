//ROUTES
import { Link } from "react-router-dom";

//CONTEXT
import { TaskListContext } from "../Contexts/taskLists.context";

//HOOKS
import { useState, useContext } from "react";

//COMPONENTS
import CreateBoardForm from "./CreateBoardForm";

//STYLES
import "./SideBar.css";

/*-------------------------------------------------------------------*/

function SideBar() {
  console.log("The SideBar component has rendered");
  const { boardsArray } = useContext(TaskListContext);

  // State for the Add-board form
  const [showForm, setShowForm] = useState(false);

  return (
    <ul className="SideBar-container">
      <h2>MY BOARDS</h2>
      <div className="boards-container-sidebar">
        {boardsArray.map((board) => {
          return (
            <article key={board.id} className="board-card">
              <Link to={`/current-board/${board.id}`}>
                <h2>{board.name}</h2>
              </Link>
            </article>
          );
        })}
      </div>
      {showForm && <CreateBoardForm setShowForm={setShowForm}/>}
      <button className="create-board-button" onClick={() => setShowForm(true)}>Add New Board</button>
      {/* <h2>ARCHIVED BOARDS</h2> */}
    </ul>
  );
}

export default SideBar;
