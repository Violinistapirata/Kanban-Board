//LINKS
import { Link, NavLink } from "react-router-dom";

//HOOKS
import { useState } from "react";

//STYLES
import "./NavBar.css";

function NavBar() {
  console.log("The NavBar component has rendered");

  const [menuIsOpen, setMenuIsOpen] = useState(false);

  function toggleMenu() {
    setMenuIsOpen(!menuIsOpen);
  }

  return (
    <nav className="navbar-container">
      <NavLink to="/" className="logo">
        <img src="/images/LOGO.PNG" alt="Logo" />
      </NavLink>

      <button type="button" className="menu-button" onClick={toggleMenu}>
        <img src="/images/menu-icon.svg" alt="menu button" />
      </button>

      {menuIsOpen && (
        <ul className="menu-container">
          <li>
            <Link
              to="/" 
              onClick={toggleMenu}
            >
              MY BOARDS
            </Link>
          </li>
          <li>
            <Link
              to="/archived" 
              onClick={toggleMenu} 
            >
              ARCHIVED BOARDS
            </Link>
          </li>
          <li>
            <Link
              to="/about" 
              onClick={toggleMenu}
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              to="/contact" 
              onClick={toggleMenu}
            >
              CONTACT
            </Link>
          </li>
        </ul>
      )}
      <ul className="navbar-tabs-container">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "navbar-button active" : "navbar-button"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "navbar-button active" : "navbar-button"
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "navbar-button active" : "navbar-button"
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
