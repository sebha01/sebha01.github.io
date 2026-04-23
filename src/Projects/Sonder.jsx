import './ProjectPages.css'

function Sonder() {
    return (
        <>
            <section className="projectDetails">
                <div>
                    <h1>Sonder</h1>
                    <hr />

                    <br /><br />
                    <h3>Check it out on itch.io below!</h3>
                    <iframe frameborder="0" src="https://itch.io/embed/3405591?border_width=3&amp;bg_color=4b326f&amp;fg_color=ffffff&amp;link_color=ffffff&amp;border_color=000000" width="556" height="171">
                        <a href="https://cainetinyarms.itch.io/sonder-reflections">
                            Sonder: Reflections by CaineTinyArms, FinlayDGameDev, Steam Bun Games - Sebastian Ha, WilliamDaviesDev, Her Ladyship
                        </a>
                    </iframe>

                    <br />
                    <a href="https://github.com/PlaceholderGames/sonder-ftt24.git">Check out the repository here</a>
                    <br />

                    <br />
                    <h3>Godot 4.3 Stable | Scipting | GD Script | 3D Choice Based Narritive Driven Game</h3>
                    <br />

                    <h3>Overview</h3>
                    <p>
                        Sonder is a 3D choice-based narrative game developed in Godot 4.3 using GDScript. The project focuses on creating an interactive narrative 
                        experience through dialogue systems, player choice and progression within a structured scene flow.
                    </p>

                    <img src="/Images/Sonder1.png" />

                    <h3>Dialogue and Narrative Systems</h3>
                    <p>
                        The project includes a dialogue manager, dialogue UI and supporting dialogue structures for lines, rounds and player choices. These systems 
                        work together to present conversations, handle player input and guide progression through the narrative.
                    </p>

                    <p>
                        Character-specific scripts and review or outcome logic support the game’s narrative structure, helping player interactions feel connected 
                        to the wider experience rather than existing as isolated dialogue events.
                    </p>

                    <img src="/Images/Sonder2.png" />

                    <h3>Technical Implementation</h3>
                    <p>
                        Sonder was built using Godot 4.3 and GDScript, with scripts organised around areas such as dialogue flow, scene progression, menus, settings 
                        and level transitions. This helped separate responsibilities between interaction, presentation and game flow.
                    </p>

                    <p>
                        Additional systems such as pause handling, credits, menus and settings were also implemented to support a complete user experience around 
                        the narrative gameplay.
                    </p>

                    <img src="/Images/Sonder4.png" />
                </div>
            </section>
        </>
    )
}

export default Sonder