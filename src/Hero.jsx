import { Link } from 'react-router-dom'

import './Hero.css'

function Hero() {
  return (
    <>
      <section className="hero">
        <div className="heroText">
            <p>
              Hi, I'm Sebastian Ha, a second year computer games development student.
            </p>
            <p>
              I'm a passionate game developer skilled in Unity, Unreal, and C++. 
              I love solving problems and pushing the limits of interactive experiences 
              especially when collaborating in a team.
            </p>
            <p>
              Game Developer | Problem Solver | Video Game Enthusiast
            </p>
        </div>     
        <Link to="/about" className="heroButton">Learn more about me</Link>   
      </section>
    </>
  )
}

export default Hero
