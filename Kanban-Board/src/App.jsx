import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import CurrentBoard from "./components/CurrentBoard";
import KanbanJson from './data/kanban.json'

function App() {
  
  return (
    <>
      <main>
        <NavBar />
        <div className="central-section">
          <SideBar />
          <CurrentBoard taskList={KanbanJson}/>
        </div>
        <Footer />
      </main>
    </>
  );
}

export default App;
