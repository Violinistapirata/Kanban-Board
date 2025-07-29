//ROUTES
import { NavLink } from "react-router-dom";

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
    <div className="sideBar-container">
      <h2>MY BOARDS</h2>
      <ul className="sidebar_boards-scroll">
        {boardsArray.map((board) => {
          return (
            <li key={board.id} className="sidebar__board-card">
              <NavLink to={`/current-board/${board.id}`}
              className={({ isActive }) => (isActive ? "sidebar-button--active" : "sidebar-button")}>
                <h2>{board.name}</h2>
              </NavLink>
            </li>
          );
        })}
      </ul>
      {showForm && <CreateBoardForm setShowForm={setShowForm}/>}
      <button className="create-board-button" onClick={() => setShowForm(true)}>Add New Board</button>
      {/* <h2>ARCHIVED BOARDS</h2> */}
    </div>
  );
}

export default SideBar;
