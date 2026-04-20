import { Link } from 'react-router-dom'
import './NavBar.css'

function NavBar() {
    return (
        <nav className="navbar">
          <div className="navbar-left">
            <Link to="/"><img src="/Images/steamBunFinal.png" alt="Logo"/></Link>
            <Link to="/">Home</Link>
          </div>
          <div className="navbar-center">
            <div className="dropdown">
              <Link to="/projects" className="dropbtn">Projects</Link>
              <div className="dropdown-menu">
                <Link to="/projects/FinalYearProject">VR Final Project</Link> 
                <Link to="/projects/RuleBasedSystem">Rule Based System</Link>
                <Link to="/projects/Sebleste">Sebleste</Link>
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