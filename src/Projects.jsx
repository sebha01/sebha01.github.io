import './Projects.css'

function Projects() {
  return (
    <>
      <section className="projectsContainer">
        <div>
          {/* Year 2 Projects */}
          <div className="projectsSectionTop">
            <h1>Year 2 Projects:</h1>
            <hr />
            <div className="projectsList">
              {/* Sploot */}
              <div>
                <h3>Sploot</h3>
                <a href="/HTML/Projects/Sploot.html">
                  <img src="/Images/Sploot1.png" className="projectImage" alt="Sploot" />
                </a>
              </div>

              {/* Outbreak Delta */}
              <div>
                <h3>Outbreak Delta</h3>
                <a href="/HTML/Projects/OutbreakDelta.html">
                  <img src="/Images/OutbreakDelta6.png" className="projectImage" alt="Outbreak Delta" />
                </a>
              </div>

              {/* Sonder */}
              <div>
                <h3>Sonder</h3>
                <a href="/HTML/Projects/Sonder.html">
                  <img src="/Images/Sonder1.png" className="projectImage" alt="Sonder" />
                </a>
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
                <a href="/HTML/Projects/Aku.html">
                  <img src="/Images/AkuLogo.png" className="Aku" alt="Aku" />
                </a>
              </div>

              {/* The Journey Home */}
              <div>
                <h3>The Journey Home</h3>
                <a href="/HTML/Projects/TheJourneyHome.html">
                  <img src="/Images/TJH1.png" className="projectImage" alt="The Journey Home" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Projects