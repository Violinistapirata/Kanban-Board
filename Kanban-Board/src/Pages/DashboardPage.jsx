//ROUTES
import { Link } from "react-router-dom";

//CONTEXT
import { TaskListContext } from "../Contexts/taskLists.context";

//COMPONENTS
// import CurrentBoard from "../components/CurrentBoard";

//STYLES
import "./DashboardPage.css";
import { useContext } from "react";
/*-------------------------------------------------------------------*/

function DashboardPage() {
  const { boardsArray } = useContext(TaskListContext);

  return (
    <div className="boards-container">
    
    <div className="boards-sub-container">
    <h1>MY BOARDS</h1>
      {boardsArray.map((board) => {
        return (
          <article key={board.id} className="board-card">
            <Link to={`/current-board/${board.id}`}>
                <h2>{board.name}</h2>
            </Link>
          </article>
        );
      })}
      {/* {boardsArray.map(board => <CurrentBoard key={board.id} taskList={board.taskList} /> )} */}
      </div>
    </div>
  );
}

export default DashboardPage;
