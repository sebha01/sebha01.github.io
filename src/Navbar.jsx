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
                <Link to="/projects/Aku">Sploot</Link>
                <Link to="/projects/OutbreakDelta">Outbreak Delta</Link>
                <Link to="/projects/Sonder">Sonder</Link>
                <Link to="/projects/Aku">Aku</Link>
                <Link to="/projects/TheJourneyHome">The Journey Home</Link>
              </div>
            </div>
            <Link to="/about">About Me</Link>
            <Link to="/contact">Contact Me</Link>
          </div>
        </nav>
    )
}

export default NavBar