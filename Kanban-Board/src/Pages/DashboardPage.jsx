//ROUTES
import { Link } from "react-router-dom";

//COMPONENTS
// import CurrentBoard from "../components/CurrentBoard";

//STYLES
import "./DashboardPage.css"
/*-------------------------------------------------------------------*/

function DashboardPage({ boardsArray }) {
  return (
    <div className="boards-container dashboard">
      {boardsArray.map((board) => {
        return (
          <article key={board.id} className="board-card">
        <Link to={`/${board.id}`}>
            <h2>{board.name}</h2>
        </Link>
          </article>
        );
      })}
      {/* {boardsArray.map(board => <CurrentBoard key={board.id} taskList={board.taskList} /> )} */}
    </div>
  );
}

export default DashboardPage;
