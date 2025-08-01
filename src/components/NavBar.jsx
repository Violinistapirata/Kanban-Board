//HOOKS
import { NavLink } from "react-router-dom"; 

//STYLES
import "./NavBar.css";

function NavBar() {
  console.log("The NavBar component has rendered");
  return (
    <nav className="navbar-container">
        <NavLink to="/" className="logo">
            <img src="/images/LOGO.PNG" alt="Logo" />
        </NavLink>

        <button type="button" className="menu-button">
          <img src="/images/menu-icon.svg" alt="menu button" />
        </button>
      <ul className="navbar-tabs-container">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "navbar-button active" : "navbar-button")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "navbar-button active" : "navbar-button")}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "navbar-button active" : "navbar-button")}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;