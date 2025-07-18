//HOOKS
import { NavLink } from "react-router-dom"; 

//STYLES
import "./NavBar.css";

function NavBar() {
  return (
    <nav>
      <ul className="navbar-container">
        <NavLink to="/">
          <li className="logo">
            <img src="/images/LOGO.png" alt="Logo" />
          </li>
        </NavLink>
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