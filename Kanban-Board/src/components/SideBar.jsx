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
      <div className="boards-container sidebar">
        {boardsArray.map((board) => {
          return (
            <article key={board.id} className="board-card">
              <h2>{board.name}</h2>
            </article>
          );
        })}
      </div>
      <h2>ARCHIVED BOARDS</h2>
    </ul>
  );
}

export default SideBar;
