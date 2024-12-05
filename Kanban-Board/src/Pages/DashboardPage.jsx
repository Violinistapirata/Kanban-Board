//COMPONENTS
import CurrentBoard from "../components/CurrentBoard";

/*-------------------------------------------------------------------*/

function DashboardPage ({boardsArray}) {
return(
    <>
        {boardsArray.map(board => <CurrentBoard key={board.id} taskList={board.taskList} />)}
    </>
)

}

export default DashboardPage;