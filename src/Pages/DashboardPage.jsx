//ROUTES
import { Link } from "react-router-dom";

//CONTEXT
import { TaskListContext } from "../Contexts/taskLists.context";

//HOOKS
import { useState } from "react";
//COMPONENTS
import CreateBoardForm from "../components/CreateBoardForm";
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

  return (
    <div className="boards-container">
    
    <div className="boards-sub-container">
    <h1>MY BOARDS</h1>
    <div className="dashboard__boards-scroll">
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
      {showForm && <CreateBoardForm setShowForm={setShowForm}/>}
      <button className="create-board-button" onClick={() => setShowForm(true)}>Add New Board</button>
      </div>
    </div>
  );
}

export default DashboardPage;
