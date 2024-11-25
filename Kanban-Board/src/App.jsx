// CSS
import "./App.css";

//ASSETS
import KanbanJson from './data/kanban.json';

//COMPONENTS
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";

//PAGES
import DashboardPage from "./Pages/DashboardPage";
import TaskDetailsPage from "./Pages/TaskDetailsPage";
import AboutPage from "./Pages/AboutPage";
import NotFoundPage from "./Pages/NotFoundPage";



function App() {
  const [currentTaskList, setCurrentTaskList] = useState(KanbanJson);
  const taskProps = {currentTaskList, setCurrentTaskList};
  
  return (
    <main>
      <NavBar />
      <div className="central-section">
        <SideBar />
        <Routes>
          <Route path="/" element={<DashboardPage taskList={currentTaskList} setTaskList={setCurrentTaskList}/>} />
          <Route path="/details/:taskId" element={<TaskDetailsPage taskProps={taskProps}/>} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <Footer />
    </main>
  );
}

export default App;
