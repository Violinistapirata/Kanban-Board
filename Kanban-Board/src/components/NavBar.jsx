//CSS
import './NavBar.css';

//COMPONENTS
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav>
            <ul className='navbar-container'>
                <li>
                <Link to={'/'}>Home</Link>
                </li>
                <li>
                <Link to={'/about'}>About</Link>
                </li>
                <li>Contact</li>
            </ul>
        </nav>
    )
};

export default NavBar;