import './ProjectPages.css'

function OutbreakDelta() {
    return (
        <>
            <section className="projectDetails">
                <div>
                    <h1>Outbreak Delta</h1>
                    <hr />

                    <br /><br />
                    <h3>Check it out on itch.io below!</h3>
                    <iframe frameborder="0" src="https://itch.io/embed/3413107?border_width=4&amp;bg_color=3d5691&amp;fg_color=ffffff&amp;link_color=1a2aa5&amp;border_color=000000" width="558" height="173">
                        <a href="https://sebastianha01.itch.io/outbreak-delta">
                            Outbreak Delta by Steam Bun Games - Sebastian Ha
                        </a>
                    </iframe>

                    <br />
                    <a href="https://github.com/sebha01/Metaverse-Assignment-1.git">Check out the repository here</a>
                    <br />

                    <br />
                    <h3>C# | Unity | VR</h3>
                    <br />

                    <h3>Overview</h3>
                    <p>
                        Outbreak Delta is a VR zombie survival experience developed in Unity using C#. The project focuses on implementing interactive VR systems such as weapon handling,
                        enemy behaviour and player state management within an immersive environment.
                    </p>

                    <img src="/Images/OutbreakDelta3.png"/>

                    <h3>Core Systems</h3>
                    <p>
                        The project includes a range of interacting systems, including player health management, zombie AI, enemy spawning, weapon handling and object interaction. 
                        Zombies are spawned dynamically and navigate towards the player, while combat is handled through damage systems and physical interaction.
                    </p>

                    <p>
                        Weapon systems include magazine handling and reload mechanics, supported by VR interaction components such as hand controllers and socket-based attachment. 
                        Additional systems such as audio management, UI feedback and scene transitions contribute to a complete gameplay loop.
                    </p>

                    <img src="/Images/OutbreakDelta2.png" alt="Combat system" />

                    <h3>Technical Implementation</h3>
                    <p>
                        The project was built using Unity and C# scripts organised around individual gameplay systems. Separate scripts manage areas such as zombie behaviour, 
                        spawning, player health, weapon interaction, object slicing and UI flow. VR-specific interaction is handled through controller input, velocity tracking 
                        and object attachment systems.
                    </p>

                    <img src="/Images/OutbreakDelta5.png" alt="Zombie interaction" />

                    <h3>What This Project Demonstrates</h3>
                    <p>
                        Outbreak Delta demonstrates VR interaction design, gameplay systems implementation in Unity, and the ability to build interconnected systems such as AI 
                        behaviour, player state management and physics-based interaction. It also shows experience working with immersive environments and handling real-time 
                        player input.
                    </p>

                    <img src="/Images/OutbreakDelta6.png" alt="Final gameplay" />
                </div>
            </section>
        </>
    )
}

export default OutbreakDelta