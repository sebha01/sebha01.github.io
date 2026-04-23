import './AboutMe.css'

function AboutMe() {
  return (
    <>
      <section className="section1">
        <div className="AboutMeTitle">
          <h2>About Me</h2>
          <hr />
        </div>
      </section>
      <section className="AboutMeSection">
        <div className="AboutMeContainer">
          <div className="AboutMeLeftSide">
            <img src="/Images/Headshot.jpeg" alt="Sebastian Ha" />
          </div>

          <div className="AboutMeRightSide">
            <br />
            <h3>Key Skills</h3>
            <p>C++, C#, Python, C</p>
            <p>Unreal Engine, Git</p>
            <p>Problem solving & system design</p>
            <br />
            <p>
              I’m Sebastian Ha, a graduating Computer Games Development student and currently seeking graduate software engineering roles.
            </p>
            <br />
            <p>
              My main strengths are in C++, C#, Python, and low-level C. I have experience developing software using Unreal Engine, Unity and Godot across 2D, 3D and VR environments.
              My projects include a VR educational application built in Unreal Engine 5.3 to raise awareness about Digital Eye Strain, a rule-based system implemented in C++ 
              and a NES-style game developed in low-level C under hardware and memory style constraints.
              Building systems such as the rule-based project has developed my interest in decision-making systems and applied AI, particularly in areas where software is used to 
              support complex problem solving in real-world and operational contexts.
            </p>
            <br />
            <p>
              I’m particularly interested in graduate software development roles where I can apply strong programming fundamentals, contribute to technically challenging systems
              and work on software with real-world impacts.
            </p>
            <br />
            <p>
              Through my projects, I’ve built experience in problem solving, systems thinking, user-focused iterative testing and turning technical ideas into working software. 
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutMe