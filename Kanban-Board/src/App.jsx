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

/*-------------------------------------------------------------------*/

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
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <Footer />
    </main>
  );
}

export default App;
