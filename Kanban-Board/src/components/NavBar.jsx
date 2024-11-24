//IMAGES

import Logo from '../images/LOGO.png'; 

//CSS
import './NavBar.css';
//COMPONENTS
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav>
            <ul className='navbar-container'>

                <li className='logo'><img src={Logo}/>
                </li>
                <li>
                <Link to={'/'}><button className="navbar-button">Home</button></Link>
                </li>
                <li>
                <Link to={'/about'}><button className= "navbar-button">About</button></Link>
                </li>
                <Link to={'/about'}><button className= "navbar-button">Contact</button></Link>
            </ul>
        </nav>
    )
};

export default NavBar;