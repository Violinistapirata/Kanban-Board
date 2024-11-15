import './App.css';
import NavBar from './components/NavBar'
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import CurrentBoard from './components/CurrentBoard';

function App() {
  return (
    <>
     <NavBar />
     <div className='central-section'>
        <SideBar />
        <CurrentBoard />
     </div>
     <Footer />
    </>
  )
}

export default App
