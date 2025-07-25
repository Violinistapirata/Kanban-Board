//STYLES
import './Footer.css'

function Footer () {
    console.log("The Footer component has rendered");
    return (
        <ul className='footer-container'>
            <li>KANBAN BOARD</li>
            <li>By: Tomás & Èric</li>
            <li><a target='_blank' href="https://github.com/Violinistapirata/Kanban-Board">GitHub</a></li>
        </ul>
    )
}

export default Footer;