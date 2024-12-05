//ROUTES
import { Route, Routes } from "react-router-dom";

//PAGES
import DashboardPage from "./Pages/DashboardPage";
import TaskDetailsPage from "./Pages/TaskDetailsPage";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import NotFoundPage from "./Pages/NotFoundPage";

//COMPONENTS
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";

//STYLES
import "./App.css";
import { useContext } from "react";
import { TaskListContext } from "./Contexts/taskLists.context";

/*-------------------------------------------------------------------*/

function App() {
  const {currentTaskList} = useContext(TaskListContext)
  const boardsArray =[{id: "board 1", taskList: currentTaskList}, {id: "board 2", taskList: []}, {id: "board 3", taskList: []}]

  return (
    <main>
      <NavBar />
      <div className="central-section">
        <SideBar />
        <Routes>
          <Route path="/" element={<DashboardPage boardsArray={boardsArray}/>} />
          <Route path="/details/:taskId" element={<TaskDetailsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <Footer />
    </main>
  );
}

export default App;
