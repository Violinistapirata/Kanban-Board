//ROUTES
import { Link } from "react-router-dom";

//IMAGES
import Logo from "../images/LOGO.png";

//STYLES
import "./NavBar.css";

/*-------------------------------------------------------------------*/

function NavBar() {
  return (
    <nav>
      <ul className="navbar-container">
        <li className="logo">
          <img src={Logo} />
        </li>
        <li>
          <Link to={"/"}>
            <button className="navbar-button">Home</button>
          </Link>
        </li>
        <li>
          <Link to={"/about"}>
            <button className="navbar-button">About</button>
          </Link>
        </li>
        <Link to={"/contact"}>
          <button className="navbar-button">Contact</button>
        </Link>
      </ul>
    </nav>
  );
}

export default NavBar;
