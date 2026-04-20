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
                <a href="https://github.com/sebha01/VR_EyeProject.git">Check out the repository here</a>
                <br />

                <p>
                    Sebleste is a retro-inspired 2D platformer developed in low-level C for an
                    NES-style environment. The project focuses on implementing core gameplay
                    systems such as movement, collision, progression, and UI within tight
                    hardware-style constraints.
                </p>

                <img src="/Images/Sebleste12.png" alt="Sebleste title screen" />

                <h2>Project Overview</h2>
                <p>
                    The game is structured around three levels where the player moves left and
                    right, jumps, dashes, avoids hazards, and reaches the goal door to progress.
                    The codebase uses explicit game states, frame-driven updates, and tile-based
                    logic to control gameplay flow. 
                </p>

                <h2>Technical Implementation</h2>
                <p>
                    The project was built using low-level C with NES homebrew libraries,
                    including neslib and nesdoug. The main loop waits per frame using
                    <code>ppu_wait_nmi()</code>, polls controller input, and switches behaviour
                    based on the current game state. This includes title, gameplay, credits, and
                    end screen handling. 
                </p>

                <p>
                    A custom <code>Player</code> struct stores position, collider bounds, facing
                    direction, vertical velocity, jump state, jump buffer, coyote time, dash
                    state, dash cooldown, damage timer, and death counter. This keeps the core
                    player systems organised around a single gameplay object. 
                </p>

                <h2>Movement Systems</h2>
                <p>
                    Sebleste includes several movement features designed to make the platforming
                    feel responsive: standard movement, jumping, dashing, coyote time, and jump
                    buffering. Constants such as <code>JUMP_VELOCITY</code>,
                    <code>COYOTE_FRAMES</code>, <code>JUMP_BUFFER_FRAMES</code>,
                    <code>DASH_SPEED</code>, <code>DASH_DURATION</code>, and
                    <code>DASH_COOLDOWN</code> are defined directly in code to tune gameplay
                    behaviour. 
                </p>

                <img src="/Images/Sebleste1.png" alt="Sebleste gameplay screenshot" />

                <h2>Collision and Level Logic</h2>
                <p>
                    Collision and progression are handled through tile-based checks. Functions
                    such as <code>GetTileIndex()</code>, <code>OnGround()</code>,
                    <code>CheckIfCollidableTile()</code>, <code>CheckIfGoalTile()</code>,
                    <code>CheckIfPlatformTile()</code>, and <code>CheckIfSpikes()</code> allow
                    the game to determine whether the player is grounded, blocked, dead, or has
                    reached the end of a level. 
                </p>

                <p>
                    Level progression is tied to the current level pointer and goal checks,
                    while reset and respawn logic support repeated attempts. The manual also
                    reflects this structure by describing zone progression and the player’s goal
                    of reaching the door at the end of each area. 
                </p>

                <img src="/Images/Sebleste11.png" alt="Sebleste goals screen" />

                <h2>Rendering and Presentation</h2>
                <p>
                    The project manually defines background and sprite palettes and writes screen
                    data directly for title, credits, and end screens. Title prompts, credits
                    text, loading text, and death counter text are all explicitly stored and
                    drawn, which reflects a more hands-on rendering pipeline than a typical
                    engine-based workflow. 
                </p>

                <h2>Tools and Content Pipeline</h2>
                <p>
                    On my CV, I position this project as NES game development carried out using
                    low-level C programming and homebrew development tools, with audio integrated
                    through FamiStudio and levels designed using NEXXT NES editing tools. That is
                    the strongest framing for graduate roles because it shows low-level thinking,
                    performance awareness, and implementation under system constraints.
                </p>

                <img src="/Images/Sebleste6.png" alt="Sebleste controls and zones screen" />

                <h2>Design and Gameplay</h2>
                <p>
                    The game’s structure is supported by three themed zones: Rust Zone, Zone
                    Zero, and Labyrinth Zone. The manual frames them as distinct gameplay spaces
                    with different hazards and pacing, helping the project feel like more than a
                    single prototype level.
                </p>

                <img src="/Images/Sebleste2.png" alt="Rust Zone" />
                <img src="/Images/Sebleste3.png" alt="Labyrinth Zone" />

                <h2>What This Project Demonstrates</h2>
                <p>
                    For employers, Sebleste demonstrates low-level programming, state-driven game
                    architecture, tile-based collision handling, gameplay tuning, and development
                    within hardware-style constraints. It also shows I can build complete systems
                    without relying on a large engine abstraction layer. 
                </p>

                <h2>Credits</h2>
                <p>
                    The instruction manual credits Sebastian Ha as developer, PixelFight for
                    character art, Hexany Ives / Hexany Tiles for map art, and FamiTracker / Fami
                    Studio demo songs for music. 
                </p>

                <img src="/Images/Sebleste8.png" alt="Sebleste credits screen" />
            </div>
        </section>
    </>
  )
}

export default Sebleste