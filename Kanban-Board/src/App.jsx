// CSS
import "./App.css";

//ASSETS
// import KanbanJson from './data/kanban.json';

//COMPONENTS
import { Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
import DashboardPage from "./Pages/DashboardPage";
import TaskDetailsPage from "./Pages/TaskDetailsPage";
import AboutPage from "./Pages/AboutPage";
import NotFoundPage from "./Pages/NotFoundPage";



function App() {
  return (
    <main>
      <NavBar />
      <div className="central-section">
        <SideBar />
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/details/:taskId" element={<TaskDetailsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <Footer />
    </main>
  );
}

export default App;
