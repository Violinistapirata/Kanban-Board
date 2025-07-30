//ROUTES
import { NavLink } from "react-router-dom";

//CONTEXT
import { TaskListContext } from "../Contexts/taskLists.context";

//HOOKS
import { useState, useContext, useEffect } from "react";

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
  const [archivedBoardsArray, setArchivedBoardsArray] = useState([]);

  useEffect(() => {
    const filteredBoardsArray = boardsArray.filter((board) => board.isArchived);
    setArchivedBoardsArray(filteredBoardsArray);
  }, [boardsArray]);

  return (
    <div className="sideBar-container">
      <section className="my-boards-container">
        <NavLink
          to={`/`}
          className={({ isActive }) =>
            isActive ? "sidebar-button--active" : "sidebar-button"
          }
        >
          <h2>MY BOARDS</h2>
        </NavLink>
        <ul className="sidebar_boards-scroll">
          {boardsArray.map((board) => {
            return (
              <li key={board.id} className="sidebar__board-card">
                <NavLink
                  to={`/current-board/${board.id}`}
                  className={({ isActive }) =>
                    isActive ? "sidebar-button--active" : "sidebar-button"
                  }
                >
                  <h2>{board.name}</h2>
                </NavLink>
              </li>
            );
          })}
        </ul>
        {showForm && <CreateBoardForm setShowForm={setShowForm} />}
        <button
          className="create-board-button"
          onClick={() => setShowForm(true)}
        >
          Add New Board
        </button>
      </section>
      <section className="archive-container">
        <h2>ARCHIVED BOARDS</h2>
        <ul className="sidebar_boards-scroll">
          {archivedBoardsArray.length ? (
            archivedBoardsArray.map((board) => {
              return (
                <li key={board.id} className="sidebar__board-card">
                  <NavLink
                    to={`/current-board/${board.id}`}
                    className={({ isActive }) =>
                      isActive ? "sidebar-button--active" : "sidebar-button"
                    }
                  >
                    <h2>{board.name}</h2>
                  </NavLink>
                </li>
              );
            })
          ) : (
            <li>
              <p>-- Empty --</p>
            </li>
          )}
        </ul>
      </section>
    </div>
  );
}

export default SideBar;
