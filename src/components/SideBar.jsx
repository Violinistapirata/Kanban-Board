//ROUTES
import { NavLink } from "react-router-dom";

//CONTEXT
import { TaskListContext } from "../Contexts/taskLists.context";

//HOOKS
import { useDrop } from "react-dnd";
import { useState, useContext } from "react";

//COMPONENTS
import CreateBoardForm from "./CreateBoardForm";

//STYLES
import "./SideBar.css";
import SidebarBoardCard from "./SidebarBoardCard";

/*-------------------------------------------------------------------*/

function SideBar() {
  console.log("The SideBar component has rendered");
  const {
    boardsArray,
    setBoardsArray,
    myBoardsArray,
    archivedBoardsArray,
  } = useContext(TaskListContext);

  // State for the Add-board form
  const [showForm, setShowForm] = useState(false);

  //Drag-and-drop functionality
  const [, sidebarMyBoardsSection] = useDrop(() => ({
    accept: "board",
    drop: (item) => changeBoardIsArchivedStatus(item.board, false),
  }));
  const [, sidebarArchivedBoardsSection] = useDrop(() => ({
    accept: "board",
    drop: (item) => changeBoardIsArchivedStatus(item.board, true),
  }));

  function changeBoardIsArchivedStatus(board, newStatus) {
    board.isArchived = newStatus;
    setBoardsArray([...boardsArray])
    /* setCurrentTaskList((prevTaskList) =>
      prevTaskList.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    ); */
  }

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
        <ul className="sidebar_boards-scroll" ref={sidebarMyBoardsSection}>
          {myBoardsArray.length ? (
            myBoardsArray.map((board) => {
              return (
               <SidebarBoardCard key={board.id} board={board}/>
              );
            })
          ) : (
            <li>
              <p>-- Empty --</p>
            </li>
          )}
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
        <NavLink
          to={`/archived`}
          className={({ isActive }) =>
            isActive ? "sidebar-button--active" : "sidebar-button"
          }
        >
          <h2>ARCHIVED BOARDS</h2>
        </NavLink>
        <ul className="sidebar_boards-scroll" ref={sidebarArchivedBoardsSection}>
          {archivedBoardsArray.length ? (
            archivedBoardsArray.map((board) => {
              return (
                <SidebarBoardCard key={board.id} board={board}/>
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
