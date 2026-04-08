import { Link } from 'react-router-dom'
import './NavBar.css'

function NavBar() {
    return (
        <nav className="navbar">
          <div className="navbar-left">
            <Link to="/">Home</Link>
          </div>
          <div className="navbar-center">
            <Link to="/projects">Projects</Link>
            <Link to="/about">About Me</Link>
            <Link to="/contact">Contact Me</Link>
          </div>
        </nav>
    )
}

export default NavBar