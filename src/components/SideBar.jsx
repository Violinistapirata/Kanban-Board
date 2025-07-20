//ROUTES
import { Link } from "react-router-dom";

//CONTEXT
import { TaskListContext } from "../Contexts/taskLists.context";

//HOOKS
import { useContext } from "react";

//STYLES
import "./SideBar.css";

function SideBar() {
  const { boardsArray } = useContext(TaskListContext);

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
      {/* <h2>ARCHIVED BOARDS</h2> */}
    </ul>
  );
}

export default SideBar;
