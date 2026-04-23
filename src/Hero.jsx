import { Link } from 'react-router-dom'

import './Hero.css'

function Hero() {
  return (
    <>
      <section className="hero">
        <div className="heroText">
            <h1>Sebastian Ha</h1>
            <br />
            <h3>Final-year Computer Games Development student seeking graduate software engineering roles</h3>
            <br />
            <p>
              Strong in C++, C#, Python and low-level C, with project experience across Unreal Engine, Unity, Godot and VR development.
            </p>
            <br />
            <p>
              My work includes a VR educational application in Unreal Engine, a rule-based system in C++ and an NES-style game.
            </p>
        </div>     
        <Link to="/about" className="heroButton">Learn more about me</Link>  
      </section>
      <section className="extras">
        <div className="featuredProject">
          <h2>Featured Project</h2>
          <h4>VR Educational System (Final Year Project)</h4>
          <p>Unreal Engine | VR Interaction | User Testing</p>
          <Link to="/projects/finalyearproject">
            <img src="/Images/VR_Project7.png" />
          </Link>
        </div>

        <div className="keySkills">
          <br />
          <br />
          <h2>Key Skills</h2>
          <p>C++, C#, Python, Low-level C</p>
          <p>Unreal Engine, Unity, Godot</p>
          <br />
          <br />
          <h2>Qualifications</h2>
          <p>BSc Honours Computer Games Development</p>
          <p>Graduated July 2026 with a First Class Honours</p>
        </div>
      </section>
    </>
  )
}

export default Hero
