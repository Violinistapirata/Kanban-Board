// CSS
import "./App.css";

//COMPONENTS
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import CurrentBoard from "./components/CurrentBoard";
import Footer from "./components/Footer";

function App() {
  return (
    <main>
      <NavBar />
      <div className="central-section">
        <SideBar />
        <CurrentBoard />
      </div>
      <Footer />
    </main>
  );
}

export default App;
