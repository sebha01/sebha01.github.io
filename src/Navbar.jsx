import { Link } from 'react-router-dom'
import './NavBar.css'

function NavBar() {
    return (
        <nav className="navbar">
          <div className="navbar-left">
            <Link to="/">Home</Link>
          </div>
          <div className="navbar-center">
            <div className="dropdown">
              <Link to="/projects" className="dropbtn">Projects</Link>
              <div className="dropdown-menu">
                <Link to="/projects/sonder">Project1</Link>
                <Link to="/projects/project2">Project 2</Link>
                <Link to="/projects/project3">Project 3</Link>
              </div>
            </div>
            <Link to="/about">About Me</Link>
            <Link to="/contact">Contact Me</Link>
          </div>
        </nav>
    )
}

export default NavBar