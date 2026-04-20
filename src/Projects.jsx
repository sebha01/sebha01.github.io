import { Link } from 'react-router-dom'
import './Projects.css'

function Projects() {
  return (
    <>
      <section className="projectsContainer">
        <div>
          {/*Final Year Project*/}
          <div className='projectsSectionTop'>
            <h1>Year 3 Projects</h1>
            <hr />
            <div className='projectsList'>
              <div>
                <h3>Final Year Project - An Educational Virtual Reality Approach to Raising Awareness of Digital Eye Strain (Computer Vision Syndrome)</h3>
                <Link to="/projects/FinalYearProject">
                  <img src="/Images/VR_Project7.png" className="projectImage" alt="VR applications in Optholmalogy" />
                </Link> 
              </div>
              <div>
                <h3>Rule based system in c++ for waiting for a table</h3>
                <Link to="/projects/RuleBasedSystem">
                  <img src="/Images/RBS1.png" className="projectImage" alt="Rule Based System for Waiting for Table" />
                </Link> 
              </div>
            </div>
          </div>

          {/* Year 2 Projects */}
          <div className="projectsSection">
            <h1>Year 2 Projects:</h1>
            <hr />
            <div className="projectsList">
              {/*Sebleste*/}
              <div>
                <h3>Sebleste</h3>
                <Link to="/projects/Sebleste">
                  <img src="/Images/Sebleste12.png" className="projectImage" alt="Sebleste" />
                </Link>
              </div>
              {/* Sploot */}
              <div>
                <h3>Sploot</h3>
                <Link to="/projects/Sploot">
                  <img src="/Images/Sploot1.png" className="projectImage" alt="Sploot" />
                </Link>
              </div>

              {/* Outbreak Delta */}
              <div>
                <h3>Outbreak Delta</h3>
                <Link to="/projects/OutbreakDelta">
                  <img src="/Images/OutbreakDelta6.png" className="projectImage" alt="Outbreak Delta" />
                </Link>
              </div>

              {/* Sonder */}
              <div>
                <h3>Sonder</h3>
                <Link to="/projects/Sonder">
                  <img src="/Images/Sonder1.png" className="projectImage" alt="Sonder" />
                </Link>
              </div>
            </div>
          </div>

          {/* Year 1 Projects */}
          <div className="projectsSection">
            <h1>Year 1 Projects:</h1>
            <hr />
            <div className="projectsList">
              {/* Aku */}
              <div>
                <h3>Aku, Frenzied Shinigami</h3>
                <Link to="/projects/Aku">
                  <img src="/Images/AkuLogo.png" className="Aku" alt="Aku" />
                  </Link>
              </div>

              {/* The Journey Home */}
              <div>
                <h3>The Journey Home</h3>
                <Link to="/projects/TheJourneyHome">
                  <img src="/Images/TJH1.png" className="projectImage" alt="The Journey Home" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Projects