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
            <img src="/Images/Headshot.jpeg" alt="Headshot" />
          </div>
          <div className="AboutMeRightSide">
            <p>
              Hi, I’m Sebastian Ha, a passionate and determined game developer currently pursuing my 
              undergraduate degree in Computer Games Development. I thrive on solving problems, tackling 
              challenges head-on, and continuously expanding my knowledge in game development. Throughout
              my academic journey, I’ve worked on several projects using Unity, Godot, and Unreal Engine,
              sharpening my skills in C++, C#, problem-solving, and teamwork.<br /><br />While I don’t have 
              professional experience yet, my hands-on projects have strengthened my ability to 
              collaborate effectively and think critically, essential traits in game development.
              Beyond coding and game design, I believe in maintaining both mental and physical strength. 
              I’m dedicated to weightlifting and fitness, finding that discipline in physical training 
              translates well into my work ethic as a developer. <br /><br /> One quote that inspires me is: 
              "Nothing great in the world has ever been accomplished without passion." – Georg Wilhelm 
              Friedrich Hegel I’m always eager to meet like-minded individuals, exchange ideas, and 
              collaborate on exciting projects. Whether you’re looking to discuss game development, 
              share insights, or explore opportunities, feel free to reach out to me through my contact 
              page, email, or LinkedIn. 
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutMe