//ROUTES
import { Route, Routes } from "react-router-dom";

//HOOKS
import { useContext } from "react";

//PAGES
import DashboardPage from "./Pages/DashboardPage";
import TaskDetailsPage from "./Pages/TaskDetailsPage";
import AboutPage from "./Pages/AboutPage";
import NotFoundPage from "./Pages/NotFoundPage";

//COMPONENTS
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";

//STYLES
import "./App.css";
import { TaskListContext } from "./Contexts/taskLists.context";

/*-------------------------------------------------------------------*/

function App() {
  
  const {currentTaskList, setCurrentTaskList} = useContext(TaskListContext)
  
  return (
    <main>
      <NavBar />
      <div className="central-section">
        <SideBar />
        <Routes>
          <Route path="/" element={<DashboardPage taskList={currentTaskList} setTaskList={setCurrentTaskList}/>} />
          <Route path="/details/:taskId" element={<TaskDetailsPage/>} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <Footer />
    </main>
  );
}

export default App;
