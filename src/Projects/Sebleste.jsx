import './ProjectPages.css'

function Sebleste() {
  return (
    <>
        <section className="projectDetails">
            <div>
                <h1>Sebleste</h1>
                <hr />

                <h3>Low-level NES platformer built in C</h3>

                <iframe frameborder="0" src="https://itch.io/embed/3510144" width="552" height="167">
                    <a href="https://sebastianha01.itch.io/sebleste">
                        Sebleste by Steam Bun Games - Sebastian Ha
                    </a>
                </iframe>

                <br />
                <a href="https://github.com/sebha01/Sebleste.git">Check out the repository here</a>
                <br />

                <br />
                <h3>NES Homebrew | Low Level C | FamiStudio | NEXXT | MESENX </h3>
                <br />

                <p>
                    Sebleste is a retro 2D platformer developed in low-level C for an NES-style environment. 
                    The project takes inspiration from the 2D platformer Celeste and focuses on implementing 
                    core gameplay systems such as movement, collision, progression and UI under hardware-style 
                    constraints.
                </p>

                <img src="/Images/Sebleste12.png" />

                <h2>Project Overview</h2>
                <p>
                    The game is structured around three levels where the player moves left and
                    right, jumps, dashes, avoids hazards and reaches a goal to progress.
                    The system uses explicit game states, frame-driven updates and tile-based
                    logic to control gameplay flow. 
                </p>

                <h2>Technical Implementation</h2>
                <p>
                    The project was built using low-level C with NES homebrew libraries,
                    including neslib and nesdoug. The main loop runs per frame using
                    <code>ppu_wait_nmi()</code>, polling controller input and switching behaviour
                    based on the current game state. This includes handling the title screen, gameplay, 
                    credits and end screen. 
                </p>

                <p>
                    A custom <code>Player</code> struct stores position, collider bounds, facing
                    direction, vertical velocity, jump state, jump buffer, coyote time, dash
                    state, dash cooldown, damage timer and death counter variables. This keeps the core
                    player logic organised around a single object.
                </p>

                <img src="/Images/Sebleste6.png" />

                <h2>Movement Systems</h2>
                <p>
                    Sebleste includes several movement features designed to make the platforming
                    feel responsive: standard movement, jumping, dashing, coyote time and jump
                    buffering. Constants such as <code>JUMP_VELOCITY</code>,
                    <code>COYOTE_FRAMES</code>, <code>JUMP_BUFFER_FRAMES</code>,
                    <code>DASH_SPEED</code>, <code>DASH_DURATION</code> and
                    <code>DASH_COOLDOWN</code> are defined directly in code to tune gameplay
                    behaviour. 
                </p>

                <img src="/Images/Sebleste1.png" />

                <h2>Collision and Level Logic</h2>
                <p>
                    Collision and progression are handled through tile-based checks. Functions
                    such as <code>GetTileIndex()</code>, <code>OnGround()</code>,
                    <code>CheckIfCollidableTile()</code>, <code>CheckIfGoalTile()</code>,
                    <code>CheckIfPlatformTile()</code> and <code>CheckIfSpikes()</code> allow
                    the game to determine whether the player is grounded, blocked, dead or has
                    reached the end of a level. 
                </p>

                <p>
                    Level progression is tied to the current level pointer and goal checks,
                    while reset and respawn logic support repeated attempts. Each level is structured 
                    around reaching a goal at the end of the area, reinforcing progression through the game.
                </p>

                <img src="/Images/Sebleste2.png" />

                <h2>Rendering and Presentation</h2>
                <p>
                    Rendering is handled manually by defining background and sprite palettes 
                    and writing screen data directly for title, credits and end screens. 
                    This reflects a low-level rendering approach without relying on engine rendering.
                </p>
                
                <img src="/Images/Sebleste3.png" />

                <h2>What This Project Demonstrates</h2>
                <p>
                    Sebleste demonstrates low-level programming, state-driven game
                    architecture, tile-based collision handling, gameplay tuning and development
                    within hardware-style constraints. It also shows I can build complete systems
                    without relying on a large engine abstraction layer. 
                </p>
                <img src="/Images/Sebleste8.png" />
            </div>
        </section>
    </>
  )
}

export default Sebleste