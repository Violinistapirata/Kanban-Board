//COMPONENTS
import CurrentBoard from "../components/CurrentBoard";

function DashboardPage ({taskList, setTaskList}) {
    return(
        <CurrentBoard taskList={taskList} setTaskList={setTaskList}/>
    )
}

export default DashboardPage;